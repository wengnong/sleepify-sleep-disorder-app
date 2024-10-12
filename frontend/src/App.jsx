import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <div className="jumbotron">
        <div className="ctitle">
          <h1 id="title">Sleepify</h1>
          <h2 id="subtitle">A Sleep Disorder Detector</h2>
        </div>
      </div>
      
      <div className="three-container">
        <div className="input-container">
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
        <button class="inputs" onClick={handlePredict}>Predict</button>
      </div>

      {prediction !== null && (
        <div class="predict-container">
          <h2>Prediction: {prediction === 0 ? 'No Disorder' : prediction === 1 ? 'Insomnia' : 'Sleep Apnea'}</h2>
        </div>
      )}
      <div className="bg-img"></div>
    </div>
  );
}

export default App;
