document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const resultBox = document.getElementById("result-box");
    const resultList = document.getElementById("result-list");
    const backBtn = document.getElementById("back-btn");

    // Hardcoded results
    const results = [
        { 
            "Heart Attack Risk": "High", 
            "Stroke Risk": "Moderate", 
            "Diabetic Complications Risk": "Low", 
            "Hypertension Crisis Risk": "High" 
        },
        { 
            "Heart Attack Risk": "Moderate", 
            "Stroke Risk": "Low", 
            "Diabetic Complications Risk": "High", 
            "Hypertension Crisis Risk": "Moderate" 
        },
        { 
            "Heart Attack Risk": "Low", 
            "Stroke Risk": "High", 
            "Diabetic Complications Risk": "Moderate", 
            "Hypertension Crisis Risk": "Low" 
        },
        { 
            "Heart Attack Risk": "Moderate", 
            "Stroke Risk": "High", 
            "Diabetic Complications Risk": "Moderate", 
            "Hypertension Crisis Risk": "Low" 
        },
        { 
            "Heart Attack Risk": "Low", 
            "Stroke Risk": "Moderate", 
            "Diabetic Complications Risk": "High", 
            "Hypertension Crisis Risk": "High" 
        }
    ];
    

    // Show loader for 4-5 seconds before showing results
    setTimeout(() => {
        loader.classList.add("hidden");
        resultBox.classList.remove("hidden");

        // Pick a random result
        const randomResult = results[Math.floor(Math.random() * results.length)];

        // Display the result
        resultList.innerHTML = "";
        for (let key in randomResult) {
            let listItem = document.createElement("li");
            listItem.textContent = `${key}: ${randomResult[key]}`;
            resultList.appendChild(listItem);
        }

        // Create the bar chart
        const healthRiskData = categorizeRisk(randomResult);

        const ctx = document.getElementById('healthRiskChart').getContext('2d');
        const healthRiskChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(healthRiskData), // Categories: High Risk, Moderate Risk, Low Risk
                datasets: [{
                    label: 'Health Risk Levels',
                    data: Object.values(healthRiskData), // Risk values
                    backgroundColor: '#36A2EB', // Blue color for bars
                    borderColor: '#1E6CB7',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true, // Start the y-axis from 0
                        max: 100, // Max value of 100% for the bar height
                    }
                },
                plugins: {
                    legend: {
                        display: false, // Hides the legend
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Shows percentage in tooltip
                            }
                        }
                    }
                }
            }
        });
    }, 4000);

    // Categorize risk data based on results
    function categorizeRisk(result) {
        let riskData = {
            "High Risk": 0,
            "Moderate Risk": 0,
            "Low Risk": 0
        };

        // Assign points to each category
        for (let key in result) {
            switch (result[key]) {
                case "High":
                    riskData["High Risk"] += 25;
                    break;
                case "Moderate":
                    riskData["Moderate Risk"] += 25;
                    break;
                case "Low":
                    riskData["Low Risk"] += 25;
                    break;
            }
        }

        return riskData;
    }

    // Back button functionality
    backBtn.addEventListener("click", function () {
        window.location.href = "further-details.html"; // Redirect back
    });
});
