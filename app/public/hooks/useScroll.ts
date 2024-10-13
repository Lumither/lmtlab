import { useEffect, useState } from 'react';

const useScroll = () => {
    const [ isScrolledX, setIsScrolledX ] = useState(false);
    const [ isScrolledY, setIsScrolledY ] = useState(false);
    const [ scrollX, setScrollX ] = useState(0);
    const [ scrollY, setScrollY ] = useState(0);

    const handleScroll = () => {
        const x = window.scrollX;
        const y = window.scrollY;

        setScrollX(x);
        setScrollY(y);
        setIsScrolledX(x > 0);
        setIsScrolledY(y > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return [ isScrolledX, isScrolledY, scrollX, scrollY ];
};

export default useScroll;
