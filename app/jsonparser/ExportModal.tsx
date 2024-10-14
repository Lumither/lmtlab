'use client';

import React, { useEffect, useState } from 'react';
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea
} from '@nextui-org/react';
import { toast } from 'react-toastify';
import { HiOutlineDownload, HiOutlineDuplicate } from 'react-icons/hi';

const workflows = new Map<string, (json: string) => string>([
    [ 'minify', (json) => {
        try {
            const value = JSON.parse(json);
            return JSON.stringify(value);
        } catch (e) {
            toast.error(`Operation Failed: ${ e }`, { autoClose: 5000 });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return e.toString();
        }
    } ]
]);

type Props = { isOpen: boolean, onOpenChange: () => void, value: string };

const ExportModal = ({ isOpen, onOpenChange, value }: Props) => {
    const [ workflow, setWorkflow ] = useState<string[]>([]);
    const [ editorValue, setEditorValue ] = useState(value);
    useEffect(() => {
        setEditorValue(value);
    }, [ value ]);

    const [ exportValue, setExportValue ] = useState(editorValue);
    useEffect(() => {
        let value = editorValue;
        for (const fn of workflow) {
            const func = workflows.get(fn);
            value = func ? func(value) : value;
        }
        setExportValue(value);
    }, [ workflow, editorValue ]);

    return (
        <Modal
            isOpen={ isOpen }
            onOpenChange={ onOpenChange }
            size={ '4xl' }
            hideCloseButton
        >
            <ModalContent>
                { (onClose) => (
                    <>
                        <ModalHeader className="gap-1">Export</ModalHeader>
                        <ModalBody>
                            <CheckboxGroup
                                label={ 'Config' }
                                color={ 'primary' }
                                value={ workflow }
                                onChange={ setWorkflow }
                            >
                                <Checkbox value={ 'minify' }>Minify</Checkbox>
                            </CheckboxGroup>

                            <Textarea
                                label={ 'Value' }
                                variant={ 'flat' }
                                value={ exportValue }
                                readOnly
                            />

                            <div
                                className={ 'mt-3 flex flex-col md:flex-row gap-1 justify-center' }
                            >
                                <Button
                                    color={ 'primary' }
                                    aria-label={ 'Download' }
                                    startContent={ <HiOutlineDownload size={ 20 } /> }
                                    onClick={ () => {
                                        const blob = new Blob([ exportValue ], { type: 'application/json' });
                                        const url = URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = 'value.json';
                                        document.body.appendChild(a);
                                        a.click();
                                        document.body.removeChild(a);
                                        URL.revokeObjectURL(url);
                                        toast.success('File Downloaded');
                                    } }
                                >
                                    Download
                                </Button>
                                <Button
                                    color={ 'success' }
                                    aria-label={ 'Copy' }
                                    startContent={ <HiOutlineDuplicate size={ 20 } /> }
                                    onClick={ () => {
                                        navigator.clipboard.writeText(exportValue);
                                        toast.success('Copied to Clipboard');
                                    } }
                                >
                                    Copy
                                </Button>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={ onClose }>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                ) }
            </ModalContent>
        </Modal>
    );
};

export default ExportModal;

