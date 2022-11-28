import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ConformationModal from '../../Common/ConfrimationModal';
import { AuthContext } from '../../Context/AuthProvider';

const Myproduct = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null)
    const url = `http://localhost:5000/my-products?email=${user.email}`

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['my-products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: { 'authoraization': `bearer ${localStorage.getItem('accessToken')}` }
            })
            const data = await res.json()
            return data
        }

    })
    const handleDeleteProduct = (product) => {
        console.log(product);
        const {_id}= product
        fetch(`http://localhost:5000/delete-product/${_id}`, {
            method: 'DELETE',
            headers: {
                'authoraization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product deleted successfully`)
                }
            })
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
                                    <img src={product.productImg} className='w-24 rounded avatar' alt='' />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td> ${product.sellingPrice}</td>

                                 <td> 
                                <label htmlFor="conformation-modal"
                                       onClick={() => setDeletingProduct(product)}
                                        className='btn btn-error btn-xs'>Delete</label>
                                </td>
                                
                                <td><button className='btn btn-primary btn-xs'>Advertrise</button></td>
                                <td><button className='btn btn-warning btn-xs btn-disabled'>unsold</button></td>

                                <ConformationModal
                                    modalTitle={`Are You sure to delete ${product.name} ?`}
                                    modalBody={'if you deleted  this its permanently delete form this wensite '}
                                    action={handleDeleteProduct}
                                    actionText={'Delete'}
                                    actoinData={deletingProduct}

                                ></ConformationModal>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myproduct;