import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://infinite-river-22082.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added!')
                }
            })
    };
    return (
        <div className='container'>
            <h2 className='title text-center mt-4'>Add A Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='m-3' placeholder='Name' {...register("name")} />
                <br />
                <input className='m-3' placeholder='Image URL' {...register("img")} />
                <br />
                <input className='m-3' placeholder='Price' type="number" {...register("price")} />
                <br />
                <input className='m-3' placeholder='Description' {...register("description")} />
                <input style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px' }} type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;