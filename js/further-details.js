document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('further-details-form').addEventListener('submit', function (e) {
        e.preventDefault();

        console.log('Form submitted'); // To confirm submission

        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            familyHistory: document.getElementById('family-history').value,
            bpSystolic: document.getElementById('bp-systolic').value,
            bpDiastolic: document.getElementById('bp-diastolic').value,
            bloodSugar: document.getElementById('blood-sugar').value,
            cholesterol: document.getElementById('cholesterol').value,
            bmi: document.getElementById('bmi').value,
            smokingStatus: document.getElementById('smoking-status').value,
            alcoholConsumption: document.getElementById('alcohol-consumption').value,
            exerciseLevel: document.getElementById('exercise-level').value,
            existingConditions: document.getElementById('existing-conditions').value,
            medications: document.getElementById('medications').value,
            heartRate: document.getElementById('heart-rate').value,
            ecgAbnormality: document.getElementById('ecg-abnormality').value,
            recentComplaints: document.getElementById('recent-complaints').value,
            hospitalVisits: document.getElementById('hospital-visits') ? document.getElementById('hospital-visits').value : '', // Make sure to check if this field exists
        };

        console.log('Form data:', formData); // Check the collected data

        // Store data in local storage (or you can send it to the backend)
        localStorage.setItem('furtherDetails', JSON.stringify(formData));

        // Check if localStorage is working
        console.log('Stored data in localStorage:', localStorage.getItem('furtherDetails'));

        alert('Details saved successfully!');
    });
});
