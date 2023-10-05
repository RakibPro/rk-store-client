import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import Swal from 'sweetalert2';

const ManageInventory = () => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/inventory');
                const data = await res.json();
                return data;
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
                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted Successfully',
                                `${name} has been deleted.`,
                                'success'
                            );
                            refetch();
                        }
                    });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-10'>
            <h2 className='text-2xl text-black font-bold mb-6'>
                Manage Doctors
            </h2>
            <div className='overflow-x-auto rounded-lg'>
                <table className='table w-full'>
                    <thead className='bg-[#E6E6E6] text-black uppercase'>
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
                            <tr key={product._id} className='hover'>
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
