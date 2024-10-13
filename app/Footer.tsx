import React from 'react';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className={ 'min-w-full flex justify-center' }>
            <div className={ 'w-full md:w-[80%]' }>
                <div className={ `p-5 mb-4` }>
                    <div className={ `h-1 w-20 bg-zinc-500 dark:bg-zinc-400 mb-3` }></div>
                    <p>
                        © 2024-{ new Date().getFullYear() } Lumither Tao
                    </p>
                    <p>
                        Powered by Next.js, built with passion and love
                    </p>
                    <Link
                        href={ `https://github.com/Lumither/` }
                        aria-label={ `repo link` }
                    >
                        <IoLogoGithub className={ `mt-1` } />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
