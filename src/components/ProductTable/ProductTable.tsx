import React, { FC } from "react";
import CategoryRows from "../CategoryRows/CategoryRows";
import "./ProductTable.css";
import { IProduct } from "../../models/products.interfaces";

interface ProductTableProps {
    products: { [key: string]: IProduct[] };
}

const ProductTable: FC<ProductTableProps> = ({ products }) => {
    const categories = Object.keys(products);

    const rows = categories.map((category) => (
        <CategoryRows
            key={category}
            name={category}
            range={products[category]}
        />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
