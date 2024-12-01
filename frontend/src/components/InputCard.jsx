export function InputCard({age, gender, occupation, bmiCategory, sleepDuration, qualityOfSleep, physicalActivityLevel, stressLevel, heartRate, dailySteps, systolic, diastolic, setAge, setGender, setOccupation, setBmiCategory, setSleepDuration, setQualityOfSleep, setPhysicalActivityLevel, setStressLevel, setHeartRate, setDailySteps, setSystolic, setDiastolic}) {

    return(
        <div className="flex flex-row">
            <div className="input-container">
            <h3 class="title-ct">INPUT</h3>
            <div>
                <div className="input-1in">
                <label>Age</label>
                <input class="inputs" type="number" min="15" max="100" value={age} onChange={e => setAge(Number(e.target.value))} />
                </div>
                <span>The age of the individual in years</span>
            </div>

            <div>
                <div className="input-1in">
                <label>Gender</label>
                <select class="inputs" value={gender} onChange={e => setGender(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>
                <span>The gender of the individual</span>
            </div>

            <div>
                <div className="input-1in">
                <label>Occupation</label>
                <select class="inputs" value={occupation} onChange={e => setOccupation(e.target.value)}>
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
                <span>The occupation of the individual</span>
            </div>
            
            <div>
                <div className="input-1in">
                <label>BMI Category</label>
                <select class="inputs" value={bmiCategory} onChange={e => setBmiCategory(e.target.value)}>
                    <option>Normal</option>
                    <option>Overweight</option>
                    <option>Obese</option>
                </select>
                </div>
                <span>The BMI classification of the individual</span>
            </div>
            </div>

            <div className="sleep-container">
            <h3 class="title-ct">SLEEP</h3>
            <div>
                <label>Sleep Duration</label>
                <input class="inputs" type="range" min="1" max="24" step="0.1" value={sleepDuration} onChange={e => setSleepDuration(Number(e.target.value))} />
                <span>{sleepDuration}</span>
                <span class="sleep-span"><br />The number of hours the individual sleeps per night</span>
            </div>

            <div>
                <label>Quality of Sleep</label>
                <input class="inputs" type="number" min="0" max="10" step="1" value={qualityOfSleep} onChange={e => setQualityOfSleep(Number(e.target.value))} />
                <span class="sleep-span"><br />A self-assessed rating of sleep quality on a scale of 0 to 10</span>
            </div>

            <div>
                <label>Physical Activity Level</label>
                <input class="inputs" type="number" value={physicalActivityLevel} onChange={e => setPhysicalActivityLevel(Number(e.target.value))} />
                <span class="sleep-span">
                <ul>
                    <li>0-33: Low (Little or no physical activity)</li>
                    <li>34-66: Moderate (Some physical activity such as walking, light exercise)</li>
                    <li>67-100: High (Regular or intense physical activity such as gym workouts, running)</li>
                </ul>
                </span>
            </div>
            </div>

            <div className="health-container">
            <h3 class="title-ct">HEALTH</h3>
            <div>
                <label>Stress Level</label>
                <input class="inputs" type="number" value={stressLevel} onChange={e => setStressLevel(Number(e.target.value))} />
                <span>
                <ul>
                    <li>0: No stress</li>
                    <li>1-3: Low stress</li>
                    <li>4-6: Moderate stress</li>
                    <li>7-9: High stress</li>
                    <li>10: Extremely high stress</li>
                </ul>
                </span>
            </div>

            <div>
                <label>Heart Rate</label>
                <input class="inputs" type="number" value={heartRate} onChange={e => setHeartRate(Number(e.target.value))} />
                <span>The resting heart rate of the individual in beats per minute</span>
            </div>

            <div>
                <label>Daily Steps</label>
                <input class="inputs" type="number" value={dailySteps} onChange={e => setDailySteps(Number(e.target.value))} />
                <span>The average number of steps the individual takes per day</span>
            </div>

            <div>
                <label>Systolic</label>
                <input class="inputs" type="number" value={systolic} onChange={e => setSystolic(Number(e.target.value))} />
                <span>The systolic blood pressure of the individual in mmHg</span>
            </div>

            <div>
                <label>Diastolic</label>
                <input class="inputs" type="number" value={diastolic} onChange={e => setDiastolic(Number(e.target.value))} />
                <span>The diastolic blood pressure of the individual in mmHg</span>
            </div>
            </div>
        </div>
    )
}