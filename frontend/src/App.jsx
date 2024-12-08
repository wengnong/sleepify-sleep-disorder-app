import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { Header } from './components/Header'
import { Jumbotron } from './components/Jumbotron'
import { Details } from './components/Details'
import { InputCard } from './components/InputCard'
import { Predictor } from './components/Predictor'
import { SignIn } from './components/SignIn'


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
      console.log("Response from backend:", response.data);
      setPrediction(response.data.prediction);
    } catch (error) {
        console.error('Error making prediction:', error);
        alert('Error: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <div className='relative text-sm sm:text-base min-h-screen flex flex-col'>
              <Header />
              <Jumbotron />
              <Details />
              <div id='input-card'>
                <InputCard
                  age={age}
                  gender={gender}
                  occupation={occupation}
                  bmiCategory={bmiCategory}
                  sleepDuration={sleepDuration}
                  qualityOfSleep={qualityOfSleep}
                  physicalActivityLevel={physicalActivityLevel}
                  stressLevel={stressLevel}
                  heartRate={heartRate}
                  dailySteps={dailySteps}
                  systolic={systolic}
                  diastolic={diastolic}
                  setAge={setAge}
                  setGender={setGender}
                  setOccupation={setOccupation}
                  setBmiCategory={setBmiCategory}
                  setSleepDuration={setSleepDuration}
                  setQualityOfSleep={setQualityOfSleep}
                  setPhysicalActivityLevel={setPhysicalActivityLevel}
                  setStressLevel={setStressLevel}
                  setHeartRate={setHeartRate}
                  setDailySteps={setDailySteps}
                  setSystolic={setSystolic}
                  setDiastolic={setDiastolic}
                />
              </div>
              <Predictor prediction={prediction} handlePredict={handlePredict} />
              <div className='text-center text-xs m-10 pointer-events-none'>
                <p>©Copyright 2024 of Sleepify. All rights are protected by law.</p>
              </div>
            </div>
          }
        />
        {/* Sign In page */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
