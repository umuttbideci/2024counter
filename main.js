function calculateRemainingSplitSeconds() {
    // Current date and time
    var now = new Date();

    // Target date for 2023
    var targetDate = new Date("2025-01-01T00:00:00");

    // Calculate remaining split seconds (1 split second = 1/60 seconds)
    var remainingMilliseconds =  targetDate.getTime() - now.getTime();
    var remainingSplitSeconds = Math.ceil((remainingMilliseconds / 1000) * 60);

    // Display remaining split seconds in the HTML element
    document.getElementById("remainingSeconds").innerHTML =  remainingSplitSeconds;
  }

  // Call the function every split second (1 split second = 1000 milliseconds / 60)
  setInterval(calculateRemainingSplitSeconds, 1000 / 60);

  // Call the function initially to show the remaining split seconds when the page loads
  calculateRemainingSplitSeconds();