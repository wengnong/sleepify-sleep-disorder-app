import './App.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Header } from './components/Header'
import { Jumbotron } from './components/Jumbotron'
import { Details } from './components/Details'

function App() {
  const [age, setAge] = useState(27);
  const [gender, setGender] = useState('Male');
  const [occupation, setOccupation] = useState('Doctor');
  const [bmiCategory, setBmiCategory] = useState('Normal');
  const [sleepDuration, setSleepDuration] = useState(4.0);
  const [qualityOfSleep, setQualityOfSleep] = useState(5);
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState(50);
  const [stressLevel, setStressLevel] = useState(5);
  const [heartRate, setHeartRate] = useState(70);
  const [dailySteps, setDailySteps] = useState(5000);
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    const data = {
      age,
      gender,
      occupation,
      bmi_category: bmiCategory,
      sleep_duration: sleepDuration,
      quality_of_sleep: qualityOfSleep,
      physical_activity_level: physicalActivityLevel,
      stress_level: stressLevel,
      heart_rate: heartRate,
      daily_steps: dailySteps,
      systolic,
      diastolic,
    };

    try {
      const response = await axios.post('http://localhost:5000/predict', data);
      console.log("Response from backend:", response.data); // Log the response data
      setPrediction(response.data.prediction);
    } catch (error) {
        console.error('Error making prediction:', error);
        alert('Error: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <>
      <div className='relative text-sm sm:text-base min-h-screen flex flex-col'>
        {/* <div class='absolute inset-0 bg-img z-[-1] opacity-100'></div> */}
        <Header />
        <Jumbotron />
        {/* <Details /> */}

        {/* <div className="flex flex-row">
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
        
        <div className="predict-button">
          <button class="inputs" id="buttonid" onClick={handlePredict}>Predict</button>
        </div>

        {prediction !== null && (
          <div class="predict-container">
            <h2 class="h2-prediction">Prediction: {prediction === 0 ? 'No Disorder' : prediction === 1 ? 'Insomnia' : 'Sleep Apnea'}</h2>
          </div>
        )}

        <div className="bot-container">
          {prediction === 0 && (
            <div className="nodisorder-container">
              <h3>No Disorder</h3>
              <p>A person with no disorder (normal sleep) has no significant issues falling asleep, staying asleep, or waking up feeling refreshed.</p>
              <h4>Causes</h4>
              <ul>
                <li>Healthy sleep hygiene and habits.</li>
                <li>Balanced lifestyle with minimal stress and proper time management.</li>
              </ul>
              <h4>How to Manage</h4>
              <ul>
                <li>Maintain a regular sleep schedule: Go to bed and wake up at the same time daily.</li>
                <li>Create a comfortable sleep environment: Keep your room cool, dark, and quiet.</li>
                <li>Limit caffeine and alcohol: Avoid them, especially later in the day.</li>
                <li>Exercise regularly: Engage in physical activity, but not close to bedtime.</li>
                <li>Minimize screen time before bed: Reduce exposure to blue light from devices.</li>
                <li>Practice relaxation techniques: Try meditation or deep breathing before bed.</li>
              </ul>
            </div>
          )}

          {prediction === 1 && (
            <div className="insomnia-container">
              <h3>Insomnia</h3>
              <p>A person with insomnia involves difficulty falling or staying asleep, or waking up too early and not being able to go back to sleep.</p>
              <h4>Causes</h4>
              <ul>
                <li>Stress and anxiety: Worry about work, school, health, or life events can keep your mind active at night.</li>
                <li>Poor sleep habits: Irregular bedtimes, excessive screen time, or frequent naps.</li>
                <li>Medical conditions: Pain, asthma, or heart problems can interfere with sleep.</li>
                <li>Medications: Some drugs (e.g., antidepressants, heart medications) can affect sleep.</li>
                <li>Stimulants: Caffeine, nicotine, or large meals before bed.</li>
              </ul>
              <h4>How to Manage</h4>
              <ul>
                <li>Establish a healthy sleep routine: Keep a consistent sleep schedule and make your bedroom a sleep sanctuary.</li>
                <li>Manage stress and anxiety: Practice mindfulness, deep breathing, and progressive muscle relaxation.</li>
                <li>Avoid naps or limit their duration: Keep naps short (20-30 minutes) and avoid them late in the day.</li>
                <li>Get out of bed if you can't sleep: After 20 minutes of lying awake, do something relaxing.</li>
                <li>Reduce stimulants: Limit caffeine, alcohol, and nicotine, especially in the evening.</li>
                <li>Cognitive Behavioral Therapy for Insomnia (CBT-I): A specialized therapy that targets negative sleep habits and thoughts to improve sleep.</li>
              </ul>
            </div>
          )}

          {prediction === 2 && (
            <div className="sleep-apnea-container">
              <h3>Sleep Apnea</h3>
              <p>A person with sleep apnea has a serious sleep disorder where breathing repeatedly stops and starts, leading to fragmented sleep and poor oxygenation.</p>
              <h4>Causes</h4>
              <ul>
                <li>Obstructive Sleep Apnea (OSA): Caused by a blockage of the airway, usually when the soft tissue in the back of the throat collapses during sleep.</li>
                <li>Central Sleep Apnea: Caused by the brain failing to send proper signals to the muscles that control breathing.</li>
                <li>Risk factors: Obesity, enlarged tonsils, genetics, aging, alcohol, smoking, or sedative use.</li>
              </ul>
              <h4>How to Manage</h4>
              <ul>
                <li>Weight management: Losing excess weight can significantly improve or even eliminate symptoms.</li>
                <li>Change sleeping positions: Sleeping on your side can prevent airway collapse and reduce apnea episodes.</li>
                <li>Use a CPAP machine: Continuous Positive Airway Pressure (CPAP) delivers constant airflow to keep the airway open.</li>
                <li>Avoid alcohol and sedatives: These substances relax throat muscles and worsen sleep apnea.</li>
                <li>Perform throat exercises: Strengthening the muscles of the throat may help keep the airway open.</li>
                <li>Treat related health issues: Conditions like hypothyroidism or nasal congestion can exacerbate sleep apnea, so treating them can help improve symptoms.</li>
              </ul>
            </div>
          )}
        </div> */}

      </div>
    </>
  );
}

export default App;
