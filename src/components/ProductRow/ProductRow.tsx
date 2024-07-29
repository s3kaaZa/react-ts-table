import React, { FC } from "react";
import "./ProductRow.css";
import { IProduct } from "../../models/products.interfaces";

interface ProductRowProps {
    product: IProduct;
}

const ProductRow: FC<ProductRowProps> = ({ product }) => {
    return (
        <tr key={product.name}>
            <td className={product.stocked ? "in-stock" : "out-of-stock"}>
                {product.name}
            </td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;
