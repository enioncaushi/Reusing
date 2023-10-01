import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const UpdateProduct = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const updateExistingProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <ProductForm 
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
                onSubmitProp={updateExistingProduct}
            />
            <DeleteButton productId={id} successCallback={() => window.location.href="/products"} />
        </div>
    );
}

export default UpdateProduct;
