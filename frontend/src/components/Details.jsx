export function Details() {

    return (
        <div>
            <div className='flex flex-row w-1/2 mx-auto p-12 sm:py-12 md:py-16 lg:py-12 bg-gray-200 gap-10'>
                <div className='background-img w-1/2 h-auto'></div>
                <div className='w-1/2'>
                    <h2>Background</h2>
                    <p><b>Sleepify</b> is a web application designed to help users identify potential sleep disorders. The app allows users to input personal information, which is then analyzed to predict their sleep health. Users can choose specific prediction options and receive detailed insights and recommendations based on the results.</p>
                </div>
            </div>
            <div className='benefit'>
                <div className='benefit-img min-h-screen w-1/2'></div>
                <div>
                    <h2>Benefit</h2>
                    <p>Helps identify the type of sleep disorder a user may have.</p>
                    <p>Provides essential information like effective handling tips.</p>
                    <p>Allows users to create an optimal sleep schedule.</p>
                    <p>Encourages further action if the sleep disorder reaches a serious level.</p>
                </div>
            </div>
        </div>
    )
}