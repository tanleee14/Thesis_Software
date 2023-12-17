document.addEventListener("DOMContentLoaded", function () {
    // Initial counts
    let paperCount = 0;
    let plasticCount = 0;
    let metalCount = 0;
    let hazardousCount = 0;

    // Initialize the chart
    const ctx = document.getElementById("chart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Paper", "Plastic", "Metal", "Hazardous"],
            datasets: [{
                label: "Count",
                data: [paperCount, plasticCount, metalCount, hazardousCount],
                backgroundColor: ["#66c0f4", "#6fd94d", "#f4c542", "#e74c3c"],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: false,
            maintainAspectRatio: false,
            aspectRatio: 2, // Adjust the aspect ratio as needed
        }
    });

    // Function to update counts and the chart
    function updateCounts() {
        document.getElementById("paperCount").textContent = paperCount;
        document.getElementById("plasticCount").textContent = plasticCount;
        document.getElementById("metalCount").textContent = metalCount;
        document.getElementById("hazardousCount").textContent = hazardousCount;

        // Update the chart data
        myChart.data.datasets[0].data = [paperCount, plasticCount, metalCount, hazardousCount];
        myChart.update();
    }

    // Increment counts when a card is clicked
    document.querySelectorAll(".card").forEach(function (card) {
        card.addEventListener("click", function () {
            const cardType = card.classList[1]; // Extract the waste type from the class
            switch (cardType) {
                case "paper":
                    paperCount++;
                    break;
                case "plastic":
                    plasticCount++;
                    break;
                case "metal":
                    metalCount++;
                    break;
                case "hazardous":
                    hazardousCount++;
                    break;
                default:
                    break;
            }
            updateCounts();
        });
    });
});
