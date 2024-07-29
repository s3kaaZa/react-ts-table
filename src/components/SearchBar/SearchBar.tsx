import React, { FC } from "react";
import "./SearchBar.css";

interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (text: string) => void;
    onInStockOnlyChange: (inStock: boolean) => void;
}

const SearchBar: FC<SearchBarProps> = ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange,
}) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                Only show products in stock
            </label>
        </div>
    );
};

export default SearchBar;
