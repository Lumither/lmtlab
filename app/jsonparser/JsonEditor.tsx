'use client';

import React, { useState } from 'react';
import MonacoEditor from '@/app/public/MonacoEditor';
import { Button, useDisclosure } from '@nextui-org/react';
import ExportModal from '@/app/jsonparser/ExportModal';
import { HiOutlineExternalLink } from 'react-icons/hi';

const DEFAULT_EDITOR_VALUE = '{}';

const JsonEditor = () => {
    const [ editorValue, setEditorValue ] = useState<string>(DEFAULT_EDITOR_VALUE);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className={ 'rounded-2xl shadow-2xl overflow-hidden relative' }>
                <MonacoEditor language={ 'json' } defaultValue={ DEFAULT_EDITOR_VALUE } setValue={ setEditorValue } />

                <div className={ 'absolute top-4 right-4 z-10' }>
                    <Button
                        aria-label={ 'export' }
                        variant={ 'light' }
                        isIconOnly
                        onPress={ onOpen }
                        startContent={ <HiOutlineExternalLink size={ 20 } /> } />
                    <ExportModal isOpen={ isOpen } onOpenChange={ onOpenChange } value={ editorValue } />

                </div>
            </div>
        </>
    );
};
export default JsonEditor;
