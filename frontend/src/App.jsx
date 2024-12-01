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
    <>
      
    </>
  );
}

export default App;
