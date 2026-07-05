
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
}
function updateDashboard() {

    let soilMoisture = Math.floor(Math.random() * 100);
    let temperature = Math.floor(Math.random() * 15) + 20;
    let humidity = Math.floor(Math.random() * 40) + 50;
    let waterLevel = Math.floor(Math.random() * 100);

    document.getElementById("soil").innerHTML = soilMoisture + "%";
    document.getElementById("temp").innerHTML = temperature + " °C";
    document.getElementById("humidity").innerHTML = humidity + "%";
    document.getElementById("water").innerHTML = waterLevel + "%";

    if (soilMoisture < 40) {
        document.getElementById("status").innerHTML = "Irrigation ON";
        document.getElementById("status").style.color = "green";
    } else {
        document.getElementById("status").innerHTML = "Irrigation OFF";
        document.getElementById("status").style.color = "red";
    }
}


function irrigationOn() {
    document.getElementById("status").innerHTML = "Irrigation ON";
    document.getElementById("status").style.color = "green";
    alert("Water Pump Started");
}


function irrigationOff() {
    document.getElementById("status").innerHTML = "Irrigation OFF";
    document.getElementById("status").style.color = "red";
    alert("Water Pump Stopped");
}

setInterval(updateDashboard, 5000);

window.onload = updateDashboard;
