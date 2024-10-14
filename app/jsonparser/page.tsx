import React from 'react';
import JsonEditor from '@/app/jsonparser/JsonEditor';

const Page = () => {
    return (
        <>
            <div
                className={ 'p-2 lg:p-20 h-full w-full' }
            >
                <JsonEditor />
            </div>
        </>
    );
};
export default Page;
