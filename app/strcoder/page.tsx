'use client';

import React, { useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { toast } from 'react-toastify';
import { HiOutlineBackspace, HiOutlineDuplicate } from 'react-icons/hi';
import { algorithms } from '@/app/strcoder/algorithms';
import { useTheme } from 'next-themes';

type ButtonColor = 'primary' | 'secondary' | 'success' | 'default' | 'warning' | 'danger' | undefined;

const Page = () => {
    const [ input, setInput ] = useState('');
    const [ output, setOutput ] = useState('');
    const { theme } = useTheme();
    return (
        <>
            <div
                className={ 'p-5 px-10 lg:p-20 h-full w-full' }
            >
                <div className={ 'flex flex-col gap-4 w-full' }>
                    <div
                        className={ 'h-full w-full relative' }
                    >
                        <Textarea
                            variant={ 'faded' }
                            label={ 'Input' }
                            value={ input }
                            onValueChange={ setInput }
                        />
                        <div className={ 'flex flex-row-reverse absolute bottom-4 right-4 z-10' }>
                            <Button
                                variant={ 'light' }
                                isIconOnly
                                aria-label={ 'copy to clipboard' }
                                onClick={ () => {
                                    navigator.clipboard.writeText(input);
                                    toast.success('Copied to Clipboard');
                                } }
                            >
                                <HiOutlineDuplicate size={ 20 } />
                            </Button>
                            <Button
                                variant={ 'light' }
                                isIconOnly
                                aria-label={ 'clear input' }
                                onClick={ () => {
                                    setInput('');
                                    setOutput('');
                                    toast.success('Input Cleared');
                                } }
                            >
                                <HiOutlineBackspace size={ 20 } />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <p className={ 'text-center text-xl font-bold' }>Algorithms</p>
                    </div>


                    <ul className={ 'flex flex-col gap-6 w-full mb-4' }>
                        {
                            Object.entries(algorithms).map(([ category, list ]) => (
                                <li key={ category } className={ 'space-y-2' }>
                                    <p className={ 'font-bold' }>{ category.toUpperCase() }</p>
                                    <ul className={ 'flex flex-row flex-wrap gap-4 w-full' }>
                                        {
                                            Object.entries(list.list).map(([ key, value ]) => (
                                                <li key={ key }>
                                                    <Button
                                                        variant={ theme === 'light' ? 'flat' : 'solid' }
                                                        aria-label={ `${ category } algorithm ${ key }` }
                                                        color={ list.color as ButtonColor }
                                                        onClick={ () => {
                                                            try {
                                                                setOutput((value as (input: string) => string)(input));
                                                                toast.success('Operation Succeed');
                                                            } catch (error) {
                                                                toast.error(`Operation Failed: ${ error }`, {
                                                                    autoClose: 5000
                                                                });
                                                            }
                                                        } }
                                                    >
                                                        { key }
                                                    </Button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>

                    <div
                        className={ 'h-full w-full relative' }
                    >
                        <Textarea
                            readOnly
                            variant={ 'faded' }
                            label={ 'Output' }
                            value={ output }
                        />
                        <div className={ 'flex flex-row-reverse absolute bottom-4 right-4 z-10' }>
                            <Button
                                variant={ 'light' }
                                isIconOnly
                                aria-label={ 'copy to clipboard' }
                                onClick={ () => {
                                    navigator.clipboard.writeText(output);
                                    toast.success('Copied to Clipboard');
                                } }
                            >
                                <HiOutlineDuplicate size={ 20 } />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Page;
