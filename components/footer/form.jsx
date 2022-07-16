import React, {useCallback, forwardRef} from 'react';
import Lock from '../icons/lock';
import {useSelector} from 'react-redux';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';
import Button from '../button/buttonFlat';
import {useRequest} from '../../hooks/useRequest';
import {useSnackbar} from 'react-simple-snackbar';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
const queryParams = {
    method: 'post',
    url: '/api/user',
};

const SubscribeForm = forwardRef(({}, ref) => {
    const {theme} = useSelector(({theme}) => ({theme}));
    const isDark = theme === 'dark';
    const [openSnackbar, closeSnackbar] = useSnackbar();
    const {isLoading, response, errorMsg, load} = useRequest(queryParams);

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const sendForm = useCallback((data) => load(data), []);

    useEffect(() => {
        if (response) {
            openSnackbar('Подписка успешно оформлена', 2000);
        }
    }, [response]);

    return (
        <div>
            <div className="font-medium md:text-lg lg:text-xl pt-7 mb-5 lg:mb-7 md:pt-0">
                Join the Newsletter
            </div>
            <form className="w-full md:w-72" onSubmit={handleSubmit(sendForm)}>
                <input
                    className={`block mb-4 pb-2 outline-0 border-b border-primary/50 bg-transparent w-full dark:border-white ${
                        errors.name && 'border-red-400 dark:border-red-400'
                    }`}
                    placeholder="Name"
                    {...register('name', {required: true})}
                    ref={ref}
                />
                <input
                    className={`block mb-4 pb-2 outline-0 border-b border-primary/50 bg-transparent w-full dark:border-white ${
                        errors.email && 'border-red-400 dark:border-red-400'
                    }`}
                    placeholder="E-mail"
                    {...register('email', {required: true})}
                />
                <div className="flex items-center justify-between">
                    <Button disabled={isLoading} type="submit">
                        Join {isLoading ? '...' : ''}
                    </Button>
                    <div className="flex items-center">
                        <div className="mr-1">
                            <Lock fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                        </div>
                        <span className="text-[10px]">No spam. Only value.</span>
                    </div>
                </div>
            </form>
        </div>
    );
})

SubscribeForm.displayName = 'SubscribeForm';

export default SubscribeForm;
