import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../context/AuthProvider';

const ManageInventory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await axiosSecure(`/myitems?email=${user?.email}`);
                return res.data;
            } catch (error) {}
        },
    });
    const handleDelete = (id, name) => {
        Swal.fire({
            title: 'Are You Sure, You Want To Delete This Product ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: ' #3085d6',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/inventory/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted Successfully',
                                `${name} has been deleted.`,
                                'success'
                            );
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error('Axios Error:', error);
                    });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-10'>
            <h2 className='text-3xl text-[#253d4e] font-bold mb-6'>
                Manage Inventory
            </h2>
            <div className='overflow-x-auto rounded-lg'>
                <table className='table w-full'>
                    <thead className='bg-[#E6E6E6] text-[#253d4e] uppercase'>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Sold</th>
                            <th>SupplierName</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {products?.map((product, i) => (
                            <tr
                                key={product._id}
                                className='hover transition-all duration-200'
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className='avatar'>
                                        <div className='w-32 rounded-full'>
                                            <img
                                                src={product.img}
                                                alt='product'
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold'>
                                    {product.name}
                                </td>
                                <td className='font-semibold'>
                                    {product.quantity}
                                </td>
                                <td className='font-semibold'>
                                    {product.sold}
                                </td>
                                <td className='font-semibold'>
                                    {product.supplierName}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                product._id,
                                                product.name
                                            )
                                        }
                                        className='btn btn-error btn-sm text-white'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageInventory;
