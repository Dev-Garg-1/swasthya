import pickle
import pandas as pd

# Load the fake model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Simulated patient input (complete fields)
patient_data = pd.DataFrame([{
    'Age': 55,
    'Gender': 1,  # Assume 'Male' encoded as 1
    'Family_History': 1,  # 'Yes' encoded as 1
    'BP_Systolic': 160,
    'BP_Diastolic': 95,
    'Blood_Sugar': 180,
    'Cholesterol': 250,
    'BMI': 28,
    'Smoking_Status': 2,  # 'Heavy Smoker' encoded as 2
    'Alcohol_Consumption': 1,  # 'Occasional' encoded as 1
    'Exercise_Level': 2,  # 'Regular' encoded as 2
    'Existing_Conditions': 1,  # 'Hypertension' encoded as 1
    'Medications': 1,  # 'BP Meds' encoded as 1
    'Heart_Rate': 90,
    'ECG_Abnormality': 1,  # 'Yes' encoded as 1
    'Recent_Complaints': 2,  # 'Chest Pain' encoded as 2
    'Hospital_Visits': 0  # Assume 0 for this example
}])

# Risk categories
risks = ['Heart_Attack_Risk', 'Stroke_Risk', 'Diabetic_Complications_Risk', 'Hypertension_Crisis_Risk']

# Fake prediction (randomly generated results)
predictions = model.predict(patient_data)  

# Print fake predictions
for risk, prediction in zip(risks, predictions):
    print(f"{risk}: {prediction}")
