import { useRef } from 'react'

export function Predictor({prediction, handlePredict}) {
    
    const resRef = useRef(null);

    const handleScrollToRes = () => {
        handlePredict();
        if (resRef.current) {
            resRef.current.scrollIntoView({behavior: 'smooth'})
        }
    };

    return (
        <div className='flex flex-col justify-center mx-auto'>
            <div className='text-center'>
                <button class="mb-12 bg-[#152947] px-12 py-4 text-white font-bold rounded-full text-xl hover:bg-slate-800 ease-in-out duration-300" id="buttonid" onClick={handleScrollToRes}>Predict</button>
            </div>

            {prediction === 0 && (
                <div ref={resRef}>
                    <h2 className='text-center text-2xl font-bold text-[#0f1b25]'>Here is your result:</h2>
                    <div className='bg-[#0f1b25] m-4 px-4 py-6 rounded-lg w-3/4 mx-auto'>
                        <h3 className='text-center p-4 text-3xl font-bold text-white'>NO DISORDER</h3>
                        <hr className='border-2 border-[#bdc8d1]'/>
                        <div className='bg-slate-200 my-4 p-4 rounded-lg mx-auto text-center'>
                            <p className='w-3/4 mx-auto'>A person with <b>no disorder</b> (normal sleep) has no significant issues falling asleep, staying asleep, or waking up feeling refreshed.</p>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>Causes</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Healthy sleep hygiene and habits</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Balanced lifestyle with minimal stress and proper time management</li>
                            </ul>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>How to Manage</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Maintain a regular sleep schedule</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Create a comfortable sleep environment</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Limit caffeine and alcohol</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Exercise regularly</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Minimize screen time before bed</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Practice relaxation techniques</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {prediction === 1 && (
                <div ref={resRef}>
                    <h2 className='text-center text-2xl font-bold text-[#0f1b25]'>Here is your result:</h2>
                    <div className='bg-[#0f1b25] m-4 px-4 py-6 rounded-lg w-3/4 mx-auto'>
                        <h3 className='text-center p-4 text-3xl font-bold text-white'>INSOMNIA</h3>
                        <hr className='border-2 border-[#bdc8d1]'/>
                        <div className='bg-slate-200 my-4 p-4 rounded-lg mx-auto text-center'>
                            <p className='w-3/4 mx-auto'>A person with <b>insomnia</b> involves difficulty falling or staying asleep, or waking up too early and not being able to go back to sleep.</p>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>Causes</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Stress and anxiety</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Poor sleep habits</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Medical conditions</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Medications</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Stimulants</li>
                            </ul>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>How to Manage</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Establish a healthy sleep routine</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Manage stress and anxiety</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Avoid naps or limit their duration</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Get out of bed if you can't sleep</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Reduce stimulants</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Cognitive Behavioral Therapy for Insomnia (CBTI)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {prediction === 2 && (
                <div ref={resRef}>
                    <h2 className='text-center text-2xl font-bold text-[#0f1b25]'>Here is your result:</h2>
                    <div className='bg-[#0f1b25] m-4 px-4 py-6 rounded-lg w-3/4 mx-auto'>
                        <h3 className='text-center p-4 text-3xl font-bold text-white'>SLEEP APNEA</h3>
                        <hr className='border-2 border-[#bdc8d1]'/>
                        <div className='bg-slate-200 my-4 p-4 rounded-lg mx-auto text-center'>
                            <p className='w-3/4 mx-auto'>A person with <b>sleep apnea</b> has a serious sleep disorder where breathing repeatedly stops and starts, leading to fragmented sleep and poor oxygenation.</p>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>Causes</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Obstructive Sleep Apnea (OSA)</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Central Sleep Apnea</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Risk factors</li>
                            </ul>
                            <h4 className='mt-6 text-xl font-semibold text-[#1c3447]'>How to Manage</h4>
                            <ul className='flex flex-wrap justify-center w-3/4 mx-auto m-4 gap-4'>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Weight management</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Change sleeping positions</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Use a Continuous Positive Airway Pressure (CPAP) machine</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Avoid alcohol and sedatives</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Perform throat exercises</li>
                                <li className='w-[260px] h-auto bg-[#0f1b25] flex justify-center items-center p-4 text-white rounded-lg font-medium'>Treat related health issues</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}