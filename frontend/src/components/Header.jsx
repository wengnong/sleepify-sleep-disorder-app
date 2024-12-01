export function Header() {

    return (
        <header className='sticky top-0 mx-auto w-full p-2 sm:p-4 flex items-center justify-between gap-2 sm:gap-4'>
            <span className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-[#1b3e72] font-extrabold cursor-pointer'>Sleepify</span>
            <div className='flex items-center justify-between gap-2 sm:gap-4'>
                <span onClick={() =>
                    window.open('https://www.cdc.gov/sleep/about/index.html', '_blank')
                } className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium cursor-pointer hover:underline'>Article</span>
                <span onClick={() =>{}} className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium cursor-pointer hover:underline'>Contact</span>
                <button className='text-xs sm:text-sm md:text-sm lg:text-sm font-medium bg-[#1b3e72] text-white px-4 py-2 rounded-full hover:bg-slate-800 ease-in-out duration-300'>Sign In</button>
            </div>
        </header>
    )
}