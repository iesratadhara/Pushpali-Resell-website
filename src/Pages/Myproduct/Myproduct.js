import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Myproduct = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/my-products?email=${user.email}`

    const { data: myProducts = [] } = useQuery({
        queryKey: ['my-products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: { 'authoraization': `bearer ${localStorage.getItem('accessToken')}` }
            })
            const data = await res.json()
            return data
        }

    })
    const handleMakeAdmin =()=>{

    }

    console.log(myProducts);
    return (
        <div className='px-6'>
            <h2 className="text-3xl text-primary text-center font-semibold py-6">All Users</h2>
            <div className="overflow-x-auto " >
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Advertrise</th>
                            <th>Avilability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                        <img src= {product.productImg} className='w-24 rounded avatar' alt='' />
                                </td> 
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td> ${product.sellingPrice}</td>
                                
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-error'>Delete</button>}</td>
                                <td><button className='btn btn-primary btn-xs'>Advertrise</button></td>
                                <td><button className='btn btn-warning btn-xs btn-disabled'>unsold</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myproduct;