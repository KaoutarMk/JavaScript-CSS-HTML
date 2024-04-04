function displayDateTime(){

    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;

    let currentDateTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("datetime").innerHTML = currentDateTime;
}
setInterval(displayDateTime, 1000);

function FindDogCatSubmit(event) {
    event.preventDefault();

    const animal = document.querySelector('input[name="animal1"]:checked');
    const breed = document.getElementById('breed1');
    const age = document.getElementById('age1');
    const gender = document.getElementById('gender1');
    const compatibility = document.querySelectorAll('input[name="compatibility1"]:checked');

    if (!animal || !breed.value || !age.value || !gender.value || compatibility.length == 0) {
        alert("Please fill in all fields before submitting.");
        return;
    }
    else{
        alert("Form submitted successfully!");
        document.getElementById("form").submit();
    }
}
function submitForm() {
    const form = document.getElementById('form');
    form.addEventListener('submit', FindDogCatSubmit); 
}
document.addEventListener('DOMContentLoaded', submitForm);

function havePetSubmit(event) {
    event.preventDefault(); 

    var animal = document.querySelector('input[name="animal"]:checked');
    var breed = document.getElementById('breed').value.trim();
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var compatibilityDogs = document.querySelector('input[name="compatibility_dogs"]:checked');
    var compatibilityCats = document.querySelector('input[name="compatibility_cats"]:checked');
    var compatibilityChildren = document.querySelector('input[name="compatibility_children"]:checked');
    var comments = document.getElementById('comments').value.trim();
    var ownerName = document.getElementById('owner_name').value.trim();
    var ownerEmail = document.getElementById('owner_email').value.trim();
    
    if (!animal || !breed || !age || !gender || !compatibilityDogs || !compatibilityCats || !compatibilityChildren || !ownerName ) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(ownerEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }
    alert("Form submitted successfully!");
    document.getElementById("form2").submit();
}