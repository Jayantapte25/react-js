import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const ProductList = () => {
    const [url, setUrl] = React.useState('http://localhost:8000/products/');
    const { data: Products, loading: Load } = useFetch(url, { content: "ABC" });

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>Not in Stock</button>
            </div>
            <div className={Load ? "position-fixed w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center" : "d-none"}>
                <div className="spinner-border text-danger"></div>
            </div>
            {Products && Products.map((product) => (
                <div className='card' key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name px-3'>{product.name}</p>
                    <p className='info px-3'>
                        <span>${product.price}</span><br />
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Not in Stock"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}
