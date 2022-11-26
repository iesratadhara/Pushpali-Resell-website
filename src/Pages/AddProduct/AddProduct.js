import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })



    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    })

    const handleAddProduct = (data) => {
        console.log(data);
    }
    return (
        <div className="w-full md:w-2/3 lg:w-1/3 bor h-[800px] m-auto ">
            <h3 className="text-2xl text-center text-primary my-8">Add product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Product Name</span>
                    </label>
                    <input type="text" {...register('productName', { required: 'Name is requird' })} className="input input-bordered w-full input-primary" />
                    {errors.name && <p className="text-error">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-lg">Product Category</span>
                    </label>
                    <select  {...register('category', { required: 'Please select product category' })} className="select select-primary w-full">
                         {
                            categories && categories.map(category=> <option key={category._id}> {category.categoryName}</option>)

                         }
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Product Image</span>
                    </label>
                    <input type="file" {...register('productImg', { required: 'file is requird' })} className="input input-bordered w-full input-primary " />
                    {errors.productImg && <p className="text-error">{errors.productImg?.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Phone Number</span>
                    </label>
                    <input type="tel" {...register('sellerPhn', { required: 'Provide Phone Number' })} className="input input-bordered w-full input-primary" />
                    {errors.sellerPhn && <p className="text-error">{errors.sellerPhn?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Location</span>
                    </label>
                    <input type="text" {...register('sellerLocation', { required: 'Name is requird' })} className="input input-bordered w-full input-primary" />

                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-lg">Product Condition</span>
                    </label>
                    <select  {...register('condition', { required: 'Please select product condition' })} className="select select-primary w-full">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Buying Price </span>
                    </label>
                    <input type="number" {...register('buyingPrice', { required: 'Buying Price is requird' })} className="input input-bordered w-full input-primary" />
                    {errors.buyingPrice && <p className="text-error">{errors.buyingPrice?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Buying Price </span>
                    </label>
                    <input type="number" {...register('sellingPrice', { required: 'SellingPrice is requird' })} className="input input-bordered w-full input-primary" />
                    {errors.selling && <p className="text-error">{errors.selling?.message}</p>}
                </div>


                <input className="btn btn-primary w-full mt-8" type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;