document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('further-details-form').addEventListener('submit', function (e) {
        e.preventDefault();

        console.log('Form submitted'); // Debugging

        // Collect form data
        const formData = {
            firstName: document.getElementById('first-name').value.trim(),
            lastName: document.getElementById('last-name').value.trim(),
            age: document.getElementById('age').value.trim(),
            gender: document.getElementById('gender').value,
            familyHistory: document.getElementById('family-history').value.trim(),
            bpSystolic: document.getElementById('bp-systolic').value.trim(),
            bpDiastolic: document.getElementById('bp-diastolic').value.trim(),
            bloodSugar: document.getElementById('blood-sugar').value.trim(),
            cholesterol: document.getElementById('cholesterol').value.trim(),
            bmi: document.getElementById('bmi').value.trim(),
            smokingStatus: document.getElementById('smoking-status').value,
            alcoholConsumption: document.getElementById('alcohol-consumption').value,
            exerciseLevel: document.getElementById('exercise-level').value,
            existingConditions: document.getElementById('existing-conditions').value,
            medications: document.getElementById('medications').value,
            heartRate: document.getElementById('heart-rate').value.trim(),
            ecgAbnormality: document.getElementById('ecg-abnormality').value.trim(),
            recentComplaints: document.getElementById('recent-complaints').value,
            otherComplaints: document.getElementById('other-complaints').value.trim(),
        };

        console.log('Collected Form Data:', formData); // Debugging

        // Check for required fields
        if (!formData.firstName || !formData.lastName || !formData.age || !formData.gender) {
            alert('Please fill in all required fields.');
            return;
        }

        // Store form data in localStorage
        localStorage.setItem('furtherDetails', JSON.stringify(formData));
        console.log('Stored Data:', localStorage.getItem('furtherDetails')); 
        alert('Details saved successfully! Redirecting to results page.');

        // Redirect to results page
        window.location.href = 'result.html';
    });
});
