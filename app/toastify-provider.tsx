'use client';

import 'react-toastify/dist/ReactToastify.css';
// import '../../app/globals.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { useTheme } from 'next-themes';

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
    const { theme } = useTheme();

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
                theme={ theme }
            />
        </>
    );
}
