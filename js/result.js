document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const resultBox = document.getElementById("result-box");
    const resultList = document.getElementById("result-list");
    const backBtn = document.getElementById("back-btn");

    // Hardcoded results
    const results = [
        { "Heart Attack Risk": "High", "Stroke Risk": "High", "Diabetic Complications Risk": "High", "Hypertension Crisis Risk": "High" },
        { "Heart Attack Risk": "Moderate", "Stroke Risk": "Low", "Diabetic Complications Risk": "Moderate", "Hypertension Crisis Risk": "High" },
        { "Heart Attack Risk": "Low", "Stroke Risk": "Moderate", "Diabetic Complications Risk": "Low", "Hypertension Crisis Risk": "Moderate" },
        { "Heart Attack Risk": "High", "Stroke Risk": "Moderate", "Diabetic Complications Risk": "High", "Hypertension Crisis Risk": "Moderate" },
        { "Heart Attack Risk": "Moderate", "Stroke Risk": "Moderate", "Diabetic Complications Risk": "High", "Hypertension Crisis Risk": "Low" }
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
    }, 4000);

    // Back button functionality
    backBtn.addEventListener("click", function () {
        window.location.href = "further-details.html"; // Redirect back
    });
});
