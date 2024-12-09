export function Details() {

    return (
        <div className='flex flex-wrap mx-auto gap-8 items-center justify-center'>
            <div className='flex flex-wrap w-3/4 justify-center mx-auto m-8'>
                <div className='background-img w-[300px] h-[300px] border-4 rounded-2xl m-6 shadow-lg'></div>
                <div className='flex flex-col w-1/2 justify-center gap-2 m-4'>
                    <h2 className='text-3xl font-extrabold text-[#1b3e72] pointer-events-none'>Background</h2>
                    <hr className='border-2 border-[#72a2c9] w-1/2 rounded-full'/>
                    <p className='text-justify'><b className='text-[#1b3e72]'>Sleepify</b> is your ultimate companion for understanding and improving sleep health. You can input your personal sleep data and explore tailored predictions that identify potential sleep disorders. Choose from a variety of prediction options and receive detailed insights, along with practical recommendations to enhance your sleep quality. Stay healthy!</p>
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center items-center mx-auto m-8'>
                <div className='flex flex-col w-1/2'>
                    <h2 className='text-3xl font-extrabold text-[#1b3e72] text-center lg:text-right md:text-right mr-4 mb-2 pointer-events-none'>Benefits</h2>
                    <hr className='border-2 border-[#72a2c9] w-1/2 rounded-full mx-auto mr-4'/>
                    <div className='flex flex-wrap justify-center m-4 gap-4 lg:justify-end md:justify-end'>
                        <p className='w-[200px] h-[180px] bg-[#284964] flex justify-center items-center p-4 text-white rounded-lg font-medium text-right'>Helps identify the type of sleep disorder a user may have.</p>
                        <p className='w-[200px] h-[180px] bg-[#284964] flex justify-center items-center p-4 text-white rounded-lg font-medium text-right'>Provides essential information like effective handling tips.</p>
                        <p className='w-[200px] h-[180px] bg-[#284964] flex justify-center items-center p-4 text-white rounded-lg font-medium text-right'>Allows users to create an optimal sleep schedule.</p>
                        <p className='w-[200px] h-[180px] bg-[#284964] flex justify-center items-center p-4 text-white rounded-lg font-medium text-right'>Encourages further action if the sleep disorder reaches a serious level.</p>
                    </div>
                </div>
                <div className='benefit-img w-[300px] h-[300px] border-4 rounded-2xl m-6 shadow-lg'></div>
            </div>
        </div>
    )
}