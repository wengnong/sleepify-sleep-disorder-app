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
      <h1>Sleep Disorder Detection</h1>
      
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
      </div>
      <div>
        <label>Gender</label>
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div>
        <label>Occupation</label>
        <select value={occupation} onChange={e => setOccupation(e.target.value)}>
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
      <div>
        <label>BMI Category</label>
        <select value={bmiCategory} onChange={e => setBmiCategory(e.target.value)}>
          <option>Normal</option>
          <option>Overweight</option>
          <option>Obese</option>
        </select>
      </div>
      <div>
        <label>Sleep Duration</label>
        <input type="number" step="0.1" value={sleepDuration} onChange={e => setSleepDuration(Number(e.target.value))} />
      </div>
      <div>
        <label>Quality of Sleep</label>
        <input type="number" value={qualityOfSleep} onChange={e => setQualityOfSleep(Number(e.target.value))} />
      </div>
      <div>
        <label>Physical Activity Level</label>
        <input type="number" value={physicalActivityLevel} onChange={e => setPhysicalActivityLevel(Number(e.target.value))} />
      </div>
      <div>
        <label>Stress Level</label>
        <input type="number" value={stressLevel} onChange={e => setStressLevel(Number(e.target.value))} />
      </div>
      <div>
        <label>Heart Rate</label>
        <input type="number" value={heartRate} onChange={e => setHeartRate(Number(e.target.value))} />
      </div>
      <div>
        <label>Daily Steps</label>
        <input type="number" value={dailySteps} onChange={e => setDailySteps(Number(e.target.value))} />
      </div>
      <div>
        <label>Systolic</label>
        <input type="number" value={systolic} onChange={e => setSystolic(Number(e.target.value))} />
      </div>
      <div>
        <label>Diastolic</label>
        <input type="number" value={diastolic} onChange={e => setDiastolic(Number(e.target.value))} />
      </div>

      <button onClick={handlePredict}>Predict</button>

      {prediction !== null && (
        <div>
          <h2>Prediction: {prediction === 0 ? 'No Disorder' : prediction === 1 ? 'Insomnia' : 'Sleep Apnea'}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
