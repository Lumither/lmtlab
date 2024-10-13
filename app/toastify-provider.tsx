'use client';

import 'react-toastify/dist/ReactToastify.css';
// import '../../app/globals.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {

    return (
        <>
            { children }
            <ToastContainer
                position="bottom-right"
                autoClose={ 2000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}