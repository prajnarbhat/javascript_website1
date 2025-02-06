addButton = document.getElementById("addbtn");
addButton.addEventListener("click", addData);

var arr = [];

// Function to add data to localStorage and update the table
function addData(event) {
    event.preventDefault(); // Prevent form submission
    getData();
    
    var name = document.getElementById("username").value;
    var workouttype = document.getElementById("workouttype").value;
    var workoutmin = document.getElementById("workoutmin").value;

    // Check if the user already exists in the array
    var existingEntry = arr.find(entry => entry.name === name);

    if (existingEntry) {
        // If the user already has workouts, update the workout minutes and types
        existingEntry.workoutmin = parseInt(existingEntry.workoutmin) + parseInt(workoutmin); // Adding minutes

        // Ensure workout types are unique and add the new type if it's not already present
        if (!existingEntry.workouttypes.includes(workouttype)) {
            existingEntry.workouttypes.push(workouttype);
        }

        // Update the total number of workouts
        existingEntry.totalWorkouts++;
    } else {
        // If the user doesn't exist, create a new entry with an array for workout types
        arr.push({
            name, 
            workouttypes: [workouttype], // Array to hold multiple workout types
            workoutmin,
            totalWorkouts: 1 // New workout added for this user
        });
    }

    // Save updated array to localStorage
    localStorage.setItem("localData", JSON.stringify(arr));

    // Update the table
    updateTable();
}

// Function to retrieve data from localStorage
function getData() {
    var str = localStorage.getItem("localData");
    if (str != null) {
        arr = JSON.parse(str);
    }
}

// Function to clear localStorage data and update the table
function DeleteData() {
    localStorage.clear();
    updateTable(); // Re-render the table to reflect changes
}

// Function to update the table with data from localStorage
function updateTable() {
    // Retrieve workout data from localStorage
    getData();

    var tb1 = document.getElementById('animal');
    tb1.innerHTML = '';  // Clear the table before re-rendering

    // Add header row for the table
    var headerRow = tb1.insertRow();
    headerRow.insertCell().innerHTML = "Name";
    headerRow.insertCell().innerHTML = "Workout Types";
    headerRow.insertCell().innerHTML = "Number of Workouts";
    headerRow.insertCell().innerHTML = "Workout Minutes";

    // Count the number of workouts for each user and group workout types
    var workoutCount = {};
    arr.forEach(function (entry) {
        if (!workoutCount[entry.name]) {
            workoutCount[entry.name] = { count: 0, workoutmin: 0, workouttypes: [] };
        }
        workoutCount[entry.name].count += entry.totalWorkouts; // Add total workouts for each user
        workoutCount[entry.name].workoutmin += parseInt(entry.workoutmin);
        workoutCount[entry.name].workouttypes = [...new Set(workoutCount[entry.name].workouttypes.concat(entry.workouttypes))];
    });

    // Populate the table with data
    Object.keys(workoutCount).forEach(function (userName) {
        var r = tb1.insertRow();

        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        var cell4 = r.insertCell();

        // Join the workout types array with commas
        cell1.innerHTML = userName;
        cell2.innerHTML = workoutCount[userName].workouttypes.join(", "); // Display all unique workout types for the user
        cell3.innerHTML = workoutCount[userName].count; // Display total workout count for this user
        cell4.innerHTML = workoutCount[userName].workoutmin; // Total workout minutes for this user
    });

    // Clear input fields after submitting the data
    document.getElementById("username").value = "";
    document.getElementById("workouttype").value = ""; // Reset default value
    document.getElementById("workoutmin").value = "";
}

window.onload = function() {
    updateTable(); // Update the table when the page is loaded
    updateChart(); // Update the chart when the page is loaded
};

// Function to update the chart based on localStorage data
function updateChart() {
    var str = localStorage.getItem("localData");

    if (!str) {
        return;
    }

    var arr = JSON.parse(str);

    // Initialize an object to track the number of workouts for each workout minute
    var workoutMinutes = {};

    // Loop through each entry and count the number of workouts for each workout minute
    arr.forEach(entry => {
        var workoutmin = parseInt(entry.workoutmin);

        if (workoutMinutes[workoutmin]) {
            workoutMinutes[workoutmin] += entry.totalWorkouts;
        } else {
            workoutMinutes[workoutmin] = entry.totalWorkouts;
        }
    });

    // Convert the workoutMinutes object into arrays for the chart
    var workoutMinutesArray = Object.keys(workoutMinutes).map(min => parseInt(min));
    var numWorkoutsArray = Object.keys(workoutMinutes).map(min => workoutMinutes[min]);

    // Create the chart data from the processed data
    const data = {
        labels: workoutMinutesArray,  // X-axis: Workout minutes
        datasets: [{
            label: 'Number of Workouts',
            data: numWorkoutsArray,  // Y-axis: Number of workouts for each minute
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Chart.js config
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Workout Minutes'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Workouts'
                    },
                    beginAtZero: true
                }
            }
        }
    };

    // Render the chart
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
