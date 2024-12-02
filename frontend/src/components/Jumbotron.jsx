import { Link } from 'react-scroll'

export function Jumbotron() {

    return (
        <div className='jumbotron z-20 flex flex-col w-full mx-auto gap-2 md:gap-6 p-20 sm:py-20 md:py-24 lg:py-32 justify-center'>
            <h1 className='font-extrabold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center'>Sleepify</h1>
            <h2 className='font-medium text-white text-base sm:text-lg md:text-lg lg:text-lg text-center'>A Sleep Disorder Detector</h2>
            <Link to='input-card' duration={1000} offset={-50} className='max-w-[300px] mx-auto text-md sm:text-md md:text-lg lg:text-lg font-bold bg-[#152947] text-white px-4 py-2 rounded-full hover:bg-slate-800 ease-in-out duration-300'>
                <button>Start Prediction</button>
            </Link>
        </div>
    )
}