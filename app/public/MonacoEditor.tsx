'use client';

import React, { useRef, useState } from 'react';

import { Editor as Monaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { Button, Spinner } from '@nextui-org/react';
import { toast } from 'react-toastify';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { MdFormatShapes } from 'react-icons/md';

type Props = {
    language: string,
    defaultValue: string
    height?: string
    setValue?: (value: string) => void
}

const MonacoEditor = ({ language, defaultValue, height = '75vh', setValue }: Props) => {
    const { theme } = useTheme();
    const [ editorValue, setEditorValue ] = useState(defaultValue);

    const editorRef = useRef(null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };
    const formatCode = () => {
        if (editorRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            editorRef.current.getAction('editor.action.formatDocument').run();
        }
    };

    return (
        <div className={ 'relative' }>
            <Monaco
                height={ height }
                defaultLanguage={ language }
                theme={ theme === 'light' ? 'light' : 'vs-dark' }
                defaultValue={ defaultValue }
                loading={ <Spinner size={ 'lg' } /> }
                onMount={ handleEditorDidMount }
                onChange={ (val) => {
                    setEditorValue(val as string);
                    if (setValue) {
                        setValue(val as string);
                    }
                } }
            />
            <div className={ 'flex flex-row-reverse absolute bottom-4 right-4 z-10' }>
                <Button
                    variant={ 'light' }
                    isIconOnly
                    aria-label={ 'copy to clipboard' }
                    onClick={ () => {
                        navigator.clipboard.writeText(editorValue);
                        toast.success('Copied to Clipboard');
                    } }
                >
                    <HiOutlineDuplicate size={ 20 } />
                </Button>
                <Button
                    variant={ 'light' }
                    isIconOnly
                    aria-label={ 'copy to clipboard' }
                    onClick={ () => {
                        formatCode();
                        toast.success('Formatted');
                    } }
                >
                    <MdFormatShapes size={ 20 } />
                </Button>
            </div>
        </div>
    );
};
export default MonacoEditor;
