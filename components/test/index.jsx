import React from 'react';
import {useForm} from 'react-hook-form';

export default function Test() {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    console.log('errors: ', errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', {required: true})} />
            {errors.firstName?.type === 'required' && 'First name is required'}

            <input {...register('lastName', {required: true})} />
            {errors.lastName && <p>Last name is required</p>}

            <input {...register('mail', {required: 'Email Address is required'})} />
            <p>{errors.mail?.message}</p>

            <input type="submit" />
        </form>
    );
}
