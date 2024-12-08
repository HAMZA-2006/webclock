function updateClock() {
    const timeElement = document.getElementById('time');
    
    // Get current date and time
    const now = new Date();
    
    // Format time with leading zeros
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Set time to the clock element
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();
