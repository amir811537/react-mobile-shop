import { useLoaderData } from "react-router-dom";
import ProductSingle from "./ProductSingle";


const Products = () => {

const products= useLoaderData()
console.log(Products.products)


    return (
     <div className="grid grid-cols-3 gap-4 p-5">
        {
            products.products?.map(product => <ProductSingle key={product.id} product={product}></ProductSingle>)
        }
     </div>
    );
};

export default Products;