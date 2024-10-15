# Sleepify: A Sleep Disorder Detector as Web-based Application

## Overview

Sleepify is a web application that utilizes a Decision Tree machine learning model to detect potential sleep disorders. By analyzing user-provided input, such as age, gender, occupation, sleep duration, and other relevant factors, the application predicts the likelihood of a sleep disorder. The backend, built with Flask, processes the data and generates predictions, while the React-based frontend ensures a smooth and intuitive user experience.

## Technologies Used
- **Machine Learning (Decision Tree)**: Employs a supervised learning algorithm to predict the likelihood of sleep disorders based on user inputs
- **Pickle (.pkl files)**: Used to store and manage the machine learning model and its predictions

### **Frontend**
- **React**: A JavaScript library for building user interfaces
- **Vite**: A build tool that provides a fast development server
- **Axios**: A promise-based HTTP client for making requests to the Flask backend

### **Backend**
- **Flask**: A micro web framework for Python
- **Flask-CORS**: A Flask extension for handling Cross-Origin Resource Sharing (CORS)
- **Scikit-learn**: A machine learning library for Python, used for building the prediction model

## Prerequisites
- Node.js
- npm (Node Package Manager)
- Python