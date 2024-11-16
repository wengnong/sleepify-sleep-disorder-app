from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the model and encoders
model = joblib.load(os.path.join('Sleepify/backend', 'best_model_decision_tree.pkl'))
gender_encoder = joblib.load(os.path.join('Sleepify/backend', 'Gender_label_encoder.pkl'))
occupation_encoder = joblib.load(os.path.join('Sleepify/backend', 'Occupation_label_encoder.pkl'))
bmi_encoder = joblib.load(os.path.join('Sleepify/backend', 'BMI Category_label_encoder.pkl'))
scaler = joblib.load(os.path.join('Sleepify/backend', 'minmax_scaler_split.pkl'))

# testing
# testing3
# testing4
# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Extract features from request
        age = data['age']
        gender = data['gender']
        occupation = data['occupation']
        bmi_category = data['bmi_category']
        sleep_duration = data['sleep_duration']
        quality_of_sleep = data['quality_of_sleep']
        physical_activity_level = data['physical_activity_level']
        stress_level = data['stress_level']
        heart_rate = data['heart_rate']
        daily_steps = data['daily_steps']
        systolic = data['systolic']
        diastolic = data['diastolic']
        
        # Encode categorical variables
        gender_num = gender_encoder.transform([gender])[0]
        occupation_num = occupation_encoder.transform([occupation])[0]
        bmi_category_num = bmi_encoder.transform([bmi_category])[0]

        # Prepare numerical features
        numerical_features = [age, sleep_duration, quality_of_sleep, physical_activity_level, stress_level, heart_rate, daily_steps, systolic, diastolic]
        complete_features = np.zeros((1, 12))
        complete_features[0, :9] = numerical_features

        # Scale features
        scaled_features = scaler.transform(complete_features).flatten()

        # Combine features for prediction
        features = np.array([
            gender_num,
            scaled_features[0],  # age_scaled
            occupation_num,
            scaled_features[1],  # sleep_duration_scaled
            scaled_features[2],  # quality_of_sleep_scaled
            scaled_features[3],  # physical_activity_level_scaled
            scaled_features[4],  # stress_level_scaled
            bmi_category_num,
            scaled_features[5],  # heart_rate_scaled
            scaled_features[6],  # daily_steps_scaled
            scaled_features[7],  # systolic_scaled
            scaled_features[8]   # diastolic_scaled
        ])

        # Make prediction
        prediction = model.predict(features.reshape(1, -1))[0]
        return jsonify({'prediction': int(prediction)})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)