import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Footer from '@/app/Footer';
import Header from '@/app/Header';
import { ThemeProvider } from '@/app/theme-provider';
import NextUiProvider from '@/app/nextui-provider';
import ToastProvider from '@/app/toastify-provider';

export const metadata: Metadata = {
    title: 'LMTLab',
    description: 'A little toy box'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={ `antialiased` }
        >
        <ThemeProvider
            attribute={ 'class' }
            defaultTheme={ 'system' }
        >
            <NextUiProvider>
                <ToastProvider>
                    <div className={ 'min-h-screen relative' }>
                        <Header />
                        <div className={ 'pt-16 h-full w-full' }>
                            { children }
                        </div>
                    </div>
                    <Footer />
                </ToastProvider>
            </NextUiProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
