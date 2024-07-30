import React, { FC, useEffect, useState } from "react";
import "./FilterableProductTable.css";
import { IProduct } from "../../models/products.interfaces";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

const FilterableProductTable: FC<{ products: IProduct[] }> = ({ products }) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    // The Object.groupBy method is a new feature in ECMAScript 2024
    // and isn’t yet supported in TypeScript by default.

    // const groupedProducts = Object.groupBy(
    //     getData(),
    //     ({ category }) => category
    // );

    useEffect(() => {
        document.title = `React + TS + ${filterText ? 'filtered' : 'full'} table`;
    })

    const getData = () => {
        return products
            .filter((product) =>
                product.name.toLowerCase().includes(filterText)
            )
            .filter((product) => (inStockOnly ? product.stocked : product));
    }

    const groupedProducts = getData().reduce((acc, product) => {
        const { category } = product;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);

        return acc;
    }, {} as { [key: string]: IProduct[] });

    return (
        <div className="App">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable products={groupedProducts}></ProductTable>
        </div>
    );
};

export default FilterableProductTable;
