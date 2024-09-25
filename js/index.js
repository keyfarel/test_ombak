function toggleLed(ledNumber) {
    const ledButton = document.getElementById(`led${ledNumber}`);

    // Toggle individual LED
    if (ledButton.classList.contains('off')) {
        ledButton.classList.remove('off');
        ledButton.classList.add('on');
        document.getElementById('ledStatus').innerText = `Status: LED ${ledNumber} is ON`;
    } else {
        ledButton.classList.remove('on');
        ledButton.classList.add('off');
        document.getElementById('ledStatus').innerText = `Status: LED ${ledNumber} is OFF`;
    }

    // Update the overall status based on all LEDs
    updateOverallStatus();
}

function updateOverallStatus() {
    const allLeds = document.querySelectorAll('.led-button'); // Select all LED buttons
    const allOn = [...allLeds].every(led => led.classList.contains('on')); // Check if all are on
    const allOff = [...allLeds].every(led => led.classList.contains('off')); // Check if all are off

    const overallStatus = document.getElementById('ledStatus');

    if (allOn) {
        overallStatus.innerText = "Status: All LEDs are ON";
    } else if (allOff) {
        overallStatus.innerText = "Status: All LEDs are OFF";
    }
}
