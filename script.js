function updateVisitorCount() {
    const api_url = "https://gonzalofloresresumefunction-enave3c6akg5d7dg.centralus-01.azurewebsites.net/api/HttpVisitor";

    fetch(api_url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const visitorCount = data.count;
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerHTML = visitorCount;
            }
        })
        .catch(error => {
            console.error("Error fetching visitor count:", error);
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerHTML = "Error loading count";
            }
        });
}

document.addEventListener("DOMContentLoaded", updateVisitorCount);
