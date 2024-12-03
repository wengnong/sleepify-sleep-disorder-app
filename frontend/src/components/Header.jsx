import { useState, useEffect } from 'react'

export function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isLink, setIsLink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20 && window.scrollY < 400) {
                setIsLink(true);
            } else {
                setIsLink(false);
            }
            
            if (window.scrollY > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`sticky z-30 top-0 mx-auto w-full p-2 sm:p-4 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-700 ${isScrolled ? 'bg-slate-200' : 'bg-[#0f1b25] text-white'} ${isLink ? 'text-white' : ''}`}>
            <span onClick={scrollToTop} className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-[#4b76b8] font-extrabold cursor-pointer'>Sleepify</span>
            <div className='flex items-center justify-between gap-2 sm:gap-4'>
                <span onClick={() =>
                    window.open('https://www.cdc.gov/sleep/about/index.html', '_blank')
                } className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium cursor-pointer hover:underline'>Article</span>
                <span onClick={() =>
                    window.open('https://www.siloamhospitals.com/call-center')
                } className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium cursor-pointer hover:underline'>Contact</span>
                <button className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium bg-[#1b3e72] text-white px-4 py-2 rounded-full hover:bg-slate-800 ease-in-out duration-300'>Sign In</button>
            </div>
        </header>
    )
}