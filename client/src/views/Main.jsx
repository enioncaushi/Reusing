import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => console.error(err));
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm 
                onSubmitProp={createProduct} 
                initialTitle="" 
                initialPrice="" 
                initialDescription=""
            />
            <hr />
            {products.map((product, idx) => {
                return (
                    <div key={idx}>
                        {product.title} | ${product.price} | {product.description}
                        <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                    </div>
                );
            })}
        </div>
    );
}

export default Main;
