export function InputCard({age, gender, occupation, bmiCategory, sleepDuration, qualityOfSleep, physicalActivityLevel, stressLevel, heartRate, dailySteps, systolic, diastolic, setAge, setGender, setOccupation, setBmiCategory, setSleepDuration, setQualityOfSleep, setPhysicalActivityLevel, setStressLevel, setHeartRate, setDailySteps, setSystolic, setDiastolic}) {

    return(
        <div className='flex flex-col mx-auto'>
            <h1 className='text-4xl text-[#0f1b25] mt-10 text-center font-extrabold pointer-events-none'>Start Predicting!</h1>
            <div className='flex flex-wrap mx-auto justify-center'>
                <div className='max-w-72 m-12 p-10 rounded-xl bg-[#0f1b25] text-white flex flex-col gap-4'>
                    <h3 className='font-bold text-center text-2xl pointer-events-none'>INPUT</h3>
                    <hr />
                    <div>
                        <div className='flex flex-col mx-auto'>
                            <label className='font-medium'>Age</label>
                            <input class="text-black pl-2 font-medium rounded" type="number" min="15" max="100" value={age} onChange={e => setAge(Number(e.target.value))} />
                        </div>
                        <span className='text-sm text-slate-400'>The age of the individual in years</span>
                    </div>

                    <div>
                        <div className='flex flex-col mx-auto'>
                            <label className='font-medium'>Gender</label>
                            <select class="text-black pl-1 font-medium rounded" value={gender} onChange={e => setGender(e.target.value)}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <span className='text-sm text-slate-400'>The gender of the individual</span>
                    </div>

                    <div>
                        <div className='flex flex-col mx-auto'>
                            <label className='font-medium'>Occupation</label>
                            <select class="text-black pl-1 font-medium rounded" value={occupation} onChange={e => setOccupation(e.target.value)}>
                                <option>Doctor</option>
                                <option>Teacher</option>
                                <option>Nurse</option>
                                <option>Engineer</option>
                                <option>Accountant</option>
                                <option>Lawyer</option>
                                <option>Salesperson</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <span className='text-sm text-slate-400'>The occupation of the individual</span>
                    </div>
                    
                    <div>
                        <div className='flex flex-col mx-auto'>
                            <label className='font-medium'>BMI Category</label>
                            <select class="text-black pl-1 font-medium rounded" value={bmiCategory} onChange={e => setBmiCategory(e.target.value)}>
                                <option>Normal</option>
                                <option>Overweight</option>
                                <option>Obese</option>
                            </select>
                        </div>
                        <span className='text-sm text-slate-400'>The BMI classification of the individual</span>
                    </div>
                </div>

                <div className='max-w-72 m-12 p-10 rounded-xl bg-[#0f1b25] text-white flex flex-col gap-4'>
                    <h3 className='font-bold text-center text-2xl pointer-events-none'>SLEEP</h3>
                    <hr />
                    <div className='flex flex-col mx-auto'>
                        <label className='font-medium'>Sleep Duration</label>
                        <div className='relative flex flex-row justify-between gap-4'>
                            <input class="w-3/4" type="range" min="1" max="24" step="0.1" value={sleepDuration} onChange={e => setSleepDuration(Number(e.target.value))} />
                            <span className='absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 font-medium'>{sleepDuration}</span>
                        </div>
                        <span className='text-sm text-slate-400'>The number of hours the individual sleeps per night</span>
                    </div>

                    <div className='flex flex-col mx-auto'>
                        <label className='font-medium'>Quality of Sleep</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" min="0" max="10" step="1" value={qualityOfSleep} onChange={e => setQualityOfSleep(Number(e.target.value))} />
                        <span className='text-sm text-slate-400'>A self-assessed rating of sleep quality on a scale of 0 to 10</span>
                    </div>

                    <div className='flex flex-col mx-auto'>
                        <label className='font-medium'>Physical Activity Level</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={physicalActivityLevel} onChange={e => setPhysicalActivityLevel(Number(e.target.value))} />
                        <span className='text-sm text-slate-400 mt-1'>
                            <ul className='flex flex-col gap-2'>
                                <li><span className='font-semibold'>0-33</span>: Low (Little or no physical activity)</li>
                                <li><span className='font-semibold'>34-66</span>: Moderate (Some physical activity such as walking, light exercise)</li>
                                <li><span className='font-semibold'>67-100</span>: High (Regular or intense physical activity such as gym workouts, running)</li>
                            </ul>
                        </span>
                    </div>
                </div>

                <div className='max-w-72 m-12 p-10 rounded-xl bg-[#0f1b25] text-white flex flex-col gap-4'>
                    <h3 className='font-bold text-center text-2xl pointer-events-none'>HEALTH</h3>
                    <hr />
                    <div>
                        <label className='font-medium'>Stress Level</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={stressLevel} onChange={e => setStressLevel(Number(e.target.value))} />
                        <span className='text-sm text-slate-400 mt-1'>
                            <ul>
                                <li><span className='font-semibold'>0</span>: No stress</li>
                                <li><span className='font-semibold'>1-3</span>: Low stress</li>
                                <li><span className='font-semibold'>4-6</span>: Moderate stress</li>
                                <li><span className='font-semibold'>7-9</span>: High stress</li>
                                <li><span className='font-semibold'>10</span>: Extremely high stress</li>
                            </ul>
                        </span>
                    </div>

                    <div>
                        <label className='font-medium'>Heart Rate</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={heartRate} onChange={e => setHeartRate(Number(e.target.value))} />
                        <span className='text-sm text-slate-400'>The resting heart rate of the individual in beats per minute</span>
                    </div>

                    <div>
                        <label className='font-medium'>Daily Steps</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={dailySteps} onChange={e => setDailySteps(Number(e.target.value))} />
                        <span className='text-sm text-slate-400'>The average number of steps the individual takes per day</span>
                    </div>

                    <div>
                        <label className='font-medium'>Systolic</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={systolic} onChange={e => setSystolic(Number(e.target.value))} />
                        <span className='text-sm text-slate-400'>The systolic blood pressure of the individual in mmHg</span>
                    </div>

                    <div>
                        <label className='font-medium'>Diastolic</label>
                        <input class="text-black pl-2 font-medium rounded" type="number" value={diastolic} onChange={e => setDiastolic(Number(e.target.value))} />
                        <span className='text-sm text-slate-400'>The diastolic blood pressure of the individual in mmHg</span>
                    </div>
                </div>
            </div>
        </div>
    )
}