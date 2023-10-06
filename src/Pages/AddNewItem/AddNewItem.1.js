import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';

export const AddNewItem = () => {
    // get data using reactHookForm
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(
                'https://doctors-portal-server-pearl-psi.vercel.app/appointmentSpecialty'
            );
            const data = await res.json();
            return data;
        },
    });

    const handleAddNewItem = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url,
                    };
                    // send products information to database
                    fetch(
                        'https://doctors-portal-server-pearl-psi.vercel.app/doctors',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(doctor),
                        }
                    )
                        .then((res) => res.json())
                        .then((result) => {
                            toast.success(
                                `Doctor ${data.name} added successfully`
                            );
                        });
                }
            });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='h-[600px]'>
            <h2 className='text-4xl text-center text-[#253d4e] font-bold my-5'>
                Add a New Product
            </h2>

            <div className='flex justify-center '>
                <div className='w-72 md:w-80 lg:w-96 px-8 rounded-lg bg-white'>
                    <form onSubmit={handleSubmit(handleAddNewItem)}>
                        Name Field
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Name
                                </span>
                            </label>
                            <input
                                type='text'
                                className='input input-bordered outline-none w-full'
                                {...register('name')}
                            />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Price
                                </span>
                            </label>
                            <input
                                type='text'
                                className='input input-bordered w-full'
                                {...register('price')}
                            />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Quantity
                                </span>
                            </label>
                            <input
                                type='text'
                                className='input input-bordered w-full'
                                {...register('quantity')}
                            />
                        </div>
                        <div className='form-control w-full mb-7 max-w-xs'>
                            <input
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '20px',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    borderStyle: 'dashed',
                                    backgroundColor: '#fafafa',
                                    color: '#bdbdbd',
                                    outline: 'none',
                                }}
                                type='file'
                                className='input input-bordered w-full'
                                {...register('image', {
                                    required: 'Please Choose a Photo !',
                                })}
                            />
                            {errors.image && (
                                <p role='alert' className=' text-error my-3'>
                                    {errors.image?.message}
                                </p>
                            )}
                        </div>
                        <input
                            type='submit'
                            value='Add'
                            className='btn btn-accent cap normal-case w-full max-w-xs text-white'
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};
