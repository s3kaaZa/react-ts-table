import React, { FC } from "react";
import "./CategoryRows.css";
import ProductRow from "../ProductRow/ProductRow";
import { IProduct } from "../../models/products.interfaces";

interface CategoryRowsProps {
  name: string;
  range: IProduct[];
}

const CategoryRows: FC<CategoryRowsProps> = ({ name, range }) => {
    const rows = range.map((product) => <ProductRow key={product.name} product={product} />);

    return (
        <>
            <tr key={name}>
                <th colSpan={2}>{name}</th>
            </tr>
            {rows}
        </>
    );
};

export default CategoryRows;
