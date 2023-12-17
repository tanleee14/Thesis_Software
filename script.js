// Check for browser support
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Display the live camera feed in the video element
            var video = document.getElementById('live-camera');
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });
} else {
    console.error('getUserMedia not supported in this browser');
}

// Update waste quantities
var plasticQuantity = 0;
var paperQuantity = 0;
var metalQuantity = 0;
var hazardousQuantity = 0;

// Update quantities as needed, for example, when certain conditions are met
// For demonstration purposes, quantities are updated every 5 seconds in this example
setInterval(function () {
    plasticQuantity += 5;
    paperQuantity += 3;
    metalQuantity += 2;
    hazardousQuantity += 1;

    // Update the table cells with new quantities
    document.getElementById('plastic-quantity').innerText = plasticQuantity;
    document.getElementById('paper-quantity').innerText = paperQuantity;
    document.getElementById('metal-quantity').innerText = metalQuantity;
    document.getElementById('hazardous-quantity').innerText = hazardousQuantity;
}, 5000);
