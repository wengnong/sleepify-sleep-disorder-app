import pickle

with open('Sleepify/backend/Occupation_label_encoder.pkl', 'rb') as file:
    data = pickle.load(file)

print(data)