// Function to fetch the visitor count from the Azure Function API
function updateVisitorCount() {
    // *** 1. Define the CORRECT URL for your deployed Azure Function API ***
    const api_url = "/api/visitor";

    // 2. Use the fetch API to make a GET request to your backend
    fetch(api_url)
        .then(response => {
            // Check if the response was successful (HTTP status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(data => {
            // 3. Extract the 'count' from the JSON data
            const visitorCount = data.count;

            // 4. Update the HTML element with the new count
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerHTML = visitorCount;
            }
        })
        .catch(error => {
            // 5. Handle any errors during the fetch
            console.error("Error fetching visitor count:", error);
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerHTML = "Error loading count";
            }
        });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", updateVisitorCount);
