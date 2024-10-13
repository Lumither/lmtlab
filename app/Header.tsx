'use client';

import React from 'react';
import ThemeSwitcher from '@/Components/ThemeSwitcher';

const Header = () => {

    return (
        <div>
            <div
                className={ 'h-16 fixed backdrop-blur w-full z-50 transition-colors border-b-[1px] border-neutral-200 dark:border-neutral-700' }
            >

                <div className={ 'p-3 px-5' }>
                    <div className={ 'flex flex-row items-center justify-between align-baseline' }>
                        <div className={ 'font-bold text-2xl' }>
                            LMTLab
                        </div>
                        <ThemeSwitcher />
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Header;
