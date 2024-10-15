'use client';

import React from 'react';
import ThemeSwitcher from '@/Components/ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { urlList } from '@/app/urlList';

const searchPageName = (url: string) => {
    const page = urlList.find((it) => it.url === url);

    return page && page.name;
};

const Header = () => {
    const path = usePathname();
    const currModule = searchPageName(path);

    return (
        <div className={ 'z-50' }>
            <div
                className={ 'h-16 fixed backdrop-blur w-full z-50 transition-colors border-b-[1px] border-neutral-200 dark:border-neutral-700' }
            >
                <div className={ 'p-3 px-5' }>
                    <div className={ 'grid grid-cols-2 md:grid-cols-3 items-center justify-between' }>
                        <Link
                            className={ 'font-bold text-2xl' }
                            href={ '/' }
                        >
                            LMTLab
                        </Link>
                        <p className={ 'hidden md:block text-2xl text-weak justify-self-center' }>
                            { currModule }
                        </p>
                        <div className={ 'justify-self-end' }>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Header;
