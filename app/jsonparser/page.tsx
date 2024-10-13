import React from 'react';
import MonacoEditor from '@/app/public/MonacoEditor';

const Page = () => {
    return (
        <>
            <div
                className={ 'p-2 lg:p-20 h-full w-full' }
            >
                <MonacoEditor defaultValue={ '{}' } language={ 'json' } />
            </div>
        </>
    );
};
export default Page;
