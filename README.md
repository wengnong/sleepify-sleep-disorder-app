# Sleepify: A Sleep Disorder Detector using Self-Input

## Overview

Sleepify is a web application that utilizes a Decision Tree machine learning model to detect potential sleep disorders. By analyzing user-provided input, such as age, gender, occupation, sleep duration, and other relevant factors, the application predicts the likelihood of a sleep disorder. The backend, built with Flask, processes the data and generates predictions, while the React-based frontend ensures a smooth and intuitive user experience.

### Features

- **Sleep Disorder Detection**: Predicts potential sleep disorders such as No Disorder, Insomnia, and Sleep Apnea based on user input
- **Personalized Insights**: Offers brief information about the detected disorder, along with personalized tips and recommendations for better sleep management
- **User-Friendly Interface**: Designed with a clean and intuitive interface to ensure seamless interaction and ease of use for all users

## Technologies Used

- **Machine Learning (Decision Tree)**: Employs a supervised learning algorithm to predict the likelihood of sleep disorders based on user inputs
- **Pickle (.pkl files)**: Used to store and manage the machine learning model and its predictions
- **React, Axios**: Frontend
- **Flask**: Backend

## Prerequisites

- Node.js and npm
- Python, ensure that pip is installed

### Installation

## Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sleepify.git
   cd sleepify/backend

2. Install Python dependencies:

    ```bash
    pip install -r requirements.txt

3. Start the Flask server:

    ```bash
    python app.py

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend

2. Install dependencies using npm:

    ```bash
    npm install

3. Run the development server:

    ```bash
    npm run dev

The frontend will be available at the localhost of 5173. You can ctrl+click the link from terminal.

## How to Use

1. Launch the backend server
2. Launch the frontend server
3. Open the frontend application in your browser using the provided server URL (usually localhost:5173)
4. Input the required data
5. View the prediction results, along with personalized insights and recommendations.
