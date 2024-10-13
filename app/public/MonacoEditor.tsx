'use client';

import React, { useState } from 'react';

import { Editor as Monaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { toast } from 'react-toastify';

type Props = {
    language: string,
    defaultValue: string
}

const MonacoEditor = (props: Props) => {
    const { theme } = useTheme();
    const [ editorValue, setEditorValue ] = useState(props.defaultValue);
    console.log(editorValue);
    return (
        <div className={ 'rounded-2xl overflow-hidden shadow-2xl relative' }>
            <Monaco
                height="75vh"
                defaultLanguage={ props.language }
                theme={ theme === 'light' ? 'light' : 'vs-dark' }
                defaultValue={ props.defaultValue }
                onChange={ (val) => setEditorValue(val as string) }
            />
            <div className={ 'absolute bottom-4 right-4 z-10' }>
                <Button
                    variant={ 'light' }
                    isIconOnly
                    onClick={ () => {
                        navigator.clipboard.writeText(editorValue);
                        toast.success('Copied to Clipboard');
                    } }
                >
                    <HiOutlineClipboardDocumentList size={ 20 } />
                </Button>
            </div>
        </div>
    );
};
export default MonacoEditor;
