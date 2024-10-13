import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';

const urlList = [
    {
        name: 'Json Parser',
        desc: 'Parse a Json file, with formatter and syntax highlighting',
        url: '/jsonparser'
    }
];

export default function Home() {

    const listLength = urlList.length;
    const listMaxIdx = listLength - 1;
    const listIsOdd = listLength % 2 !== 0;

    return (
        <div className={ 'flex w-full items-center justify-center' }>
            <div className={ 'p-5 md:p-16 max-w-[1536px] w-full' }>
                <div className={ 'w-full' }>
                    <ul className={ 'grid grid-cols-2 gap-x-6 gap-y-3 ' }>
                        { urlList.map((entry, id) => (
                            <li key={ id }
                                className={ (id === listMaxIdx && listIsOdd) ? 'col-span-2 flex justify-center' : 'col-span-2 md:col-span-1' }
                            >
                                <Card
                                    isPressable
                                    isHoverable
                                    as={ Link }
                                    href={ entry.url }
                                    className={ 'w-full h-full' }
                                >
                                    <CardBody className={ 'p-6 h-full' }>
                                        <div className={ 'flex flex-col h-full' }>
                                            <div className={ 'text-2xl font-bold' }>{ entry.name }</div>
                                            <div className={ '' }>{ entry.desc }</div>
                                            <div className={ 'relative h-full mt-8' }>
                                                <div
                                                    className={ 'text-default-500 dark:text-default-500 absolute bottom-0' }>
                                                    { `https://lab.lmt.moe${ entry.url }` }
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    );
}
