// add the eventListeners for each field which ever it is required

document.getElementById('Name').addEventListener("input",(e)=>{
    validateName(e.target.value);
})

document.getElementById('mailid').addEventListener("input", (e) => {
    validateEmail(e.target.value);
})
document.getElementById('phno').addEventListener("input",(e)=>{
    validatePhno(e.target.value);
})

document.getElementById('panno').addEventListener("input",(e)=>{
    validatePanno(e.target.value);
})

document.getElementById('pw').addEventListener("input",(e)=>{
    validatePw(e.target.value);
})

occup.addEventListener("input",(e)=>{
    if(/^[A-Za-z]+(?: [A-Za-z]+)?$/.test(e.target.value)){
        occup.classList.remove("is-invalid")
        occup.classList.add("is-valid")
    }
    else if (e.target.value.length == 0){
        //console.log("entered")
        occup.classList.remove("is-invalid")
        occup.classList.remove("is-valid")
    } 
    else{
        occup.classList.add("is-invalid")
        occup.classList.remove("is-valid")
    }
})

document.getElementById('uname').addEventListener("input", (e) => {
    if (/^[a-zA-Z0-9_!@#$%^&*() ]{1,20}$/.test(e.target.value)) {
        //console.log("entered")
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
        const data = storedFormData.filter((item) => item.username === e.target.value);
        if (data.length > 0) {
            const exists = document.getElementById('exists');
            // setTimeout(function () {
            //    // alert("Username already exists");
            //     uname.value=''
            //     uname.classList.remove("is-invalid");
            //     uname.classList.remove("is-valid");
            // }, 1000);
            exists.innerHTML = 'Username already exists';
            //uname.value=''
            uname.classList.add("is-invalid");
            uname.classList.remove("is-valid");
            //uname.value=''
        } else {
            uname.classList.remove("is-invalid");
            uname.classList.add("is-valid");
        }
    } else {
        uname.classList.remove("is-invalid");
        uname.classList.remove("is-valid");
    }
});
    
dob.addEventListener("change",(e)=>{
    var dob= document.getElementById('dob')
    var year=new Date(dob.value).getFullYear()
    if(year >1950 && year<=2010){
        dob.classList.remove("is-invalid")
        dob.classList.add("is-valid")
    }
    else if (year>2010 || year<1950){
        dob.classList.add("is-invalid")
        dob.classList.remove("is-valid")
    } 
    else{
        dob.classList.remove("is-invalid")
        dob.classList.remove("is-valid")
    }
    

})

gender.addEventListener("change",(e)=>{
    var gender= document.getElementById('gender')
    if(gender.value){
        gender.classList.remove("is-invalid")
        gender.classList.add("is-valid")
    }
    else if (target.length == 0){
        gender.classList.remove("is-invalid")
        gender.classList.remove("is-valid")
    } 
    else{
        gender.classList.add("is-invalid")
        gender.classList.remove("is-valid")
    }
    

})

edu.addEventListener("change",(e)=>{
    var edu= document.getElementById('edu')
    if(edu.value){
        edu.classList.remove("is-invalid")
        edu.classList.add("is-valid")
    }
    else if (target.length == 0){
        edu.classList.remove("is-invalid")
        edu.classList.remove("is-valid")
    } 
    else{
        edu.classList.add("is-invalid")
        edu.classList.remove("is-valid")
    }

})

function validateEmail(target){
    //console.log("inside");
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target)){
       mailid.classList.remove("is-invalid")
        mailid.classList.add("is-valid")
        //console.log("classsss", u_name.classList);

    }
    else if (target.length == 0){
        mailid.classList.remove("is-invalid")
        mailid.classList.remove("is-valid")
    } 
    else{
        mailid.classList.add("is-invalid")
        mailid.classList.remove("is-valid")
    }
   
}

function validateName(target){
    //console.log("inside");
    if(/^[A-Za-z]+(?: [A-Za-z]+)?$/.test(target)){
        Name.classList.remove("is-invalid")
        Name.classList.add("is-valid")
        //console.log("classsss", u_name.classList);

    }
    else if (target.length == 0){
        Name.classList.remove("is-invalid")
        Name.classList.remove("is-valid")
    } else {
        Name.classList.add("is-invalid")
        Name.classList.remove("is-valid")
    }
   
}
function validatePhno(target){
    //console.log("inside");
    if(/^[6-9]\d{9}$/.test(target)){
       phno.classList.remove("is-invalid")
        phno.classList.add("is-valid")
        //console.log("classsss", u_name.classList);

    }
    else if (target.length == 0){
        phno.classList.remove("is-invalid")
        phno.classList.remove("is-valid")
    } 
    else{
        phno.classList.add("is-invalid")
        phno.classList.remove("is-valid")
    }
   
}
function validatePanno(target){
    //console.log("inside");
    if(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(target)){
       panno.classList.remove("is-invalid")
        panno.classList.add("is-valid")
        //console.log("classsss", u_name.classList);

    }
    else if (target.length == 0){
        panno.classList.remove("is-invalid")
        panno.classList.remove("is-valid")
    } 
    else{
        panno.classList.add("is-invalid")
        panno.classList.remove("is-valid")
    }
   
}

function validatePw(target){
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/.test(target)){
        console.log("entered")
        //console.log(pw);
        pw.classList.remove("is-invalid")
        pw.classList.add("is-valid")
        document.getElementsByClassName("validation").innerText = "Please do enter";
         //console.log("classsss", u_name.classList);
 
     }
     else if (target.length == 0){
        pw.classList.remove("is-invalid")
        pw.classList.remove("is-valid")
    } 
     else{
         pw.classList.add("is-invalid")
         pw.classList.remove("is-valid")
     }
    
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('pw');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    }

FileValidation = () => {
    const fi = document.getElementById('pic');
    
    // Check if any file is selected.
    if (fi.files.length > 0) {
        const fsize = fi.files[0].size; // Get the size of the file.
        const file = Math.round(fsize / 1024); // Convert to KB.
        //console.log(file)
        // The size of the file.
        if (file <= 2048) {
            // alert("File too Big, please select a file less than 2MB");
         pic.classList.remove("is-invalid")
         pic.classList.add("is-valid")

        }
        else {
           pic.classList.add("is-invalid")
           pic.classList.remove("is-valid")
        } 
        
    }
    else {
        pic.classList.remove("is-invalid")
        pic.classList.remove("is-valid")
    }

}

// Stroring in the local Storage if the form get submitted.

document.getElementById("myForm").addEventListener("submit", function (event) {
    // event.preventDefault();
    // Getting the form data
    var formData = new FormData(event.target);
    if (!validateForm(formData)) {
        // If any field is empty, prevent form submission
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
        return;
    }
    alert("Your Details are successfully stored in the localStorage");
    // Convert FormData to object
    var formObject = {};
    formData.forEach(function (value, key) {
        formObject[key] = value;
    });
    // Handle image separately
    var imageFile = formData.get('picture');
    var imageUrl = ''; // This will store the image URL or Base64 representation

    if (imageFile) {
        var reader = new FileReader();
        reader.onloadend = function () {
            imageUrl = reader.result;

            // Now, you can store form data, image URL, and image size in LocalStorage
            saveFormData(formObject, imageUrl, imageFile.size+" bytes",imageFile.type,imageFile.name);
        };

        reader.readAsDataURL(imageFile);
    } else {
        // If no image is provided, save only the form data
        saveFormData(formObject, imageUrl, 0); // Image size is 0 when no image is provided
    }
});

function validateForm(formData) {
    // Check if all required fields are filled
    var requiredFields = ['name','mailid','dob','gender','education','cntctno','password','pan-no','username','picture']; // Add the names of your required fields
    for (var i = 0; i < requiredFields.length; i++) {
        if (!formData.get(requiredFields[i])) {
            return ; // Field is empty
        }
    }
    return true; // All required fields are filled
}
    // save the details into the localstorage

function saveFormData(formObject, imageUrl, imageSize, imageType,imageName) {
    console.log(formObject)
    // Retrieve existing data from local storage
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log(storedData)
    // Add new form data, image URL, and image size to the array
    storedData.push({ ...formObject, imageUrl, imageSize,imageType,imageName });

    // Store updated array in local storage
    localStorage.setItem("formData", JSON.stringify(storedData));
}

//Serching User and disply results

function searchUser() {
    var searchInput = document.getElementById("search").value;
    //var parsedInput = parseInt(searchInput);
    var sizeMultiplier = 1; 
    if (/^\d+$/.test(searchInput)) {
        const searchInputInYears = Math.floor(parseInt(searchInput));
        var storedData = JSON.parse(localStorage.getItem("formData")) || [];
        var searchResults = storedData.filter(function (user) {
            var userBirthDate = new Date(user.dob);
            var birthyear = userBirthDate.getFullYear();
            let birthMonth = userBirthDate.getMonth();
            let currentMonth = new Date().getMonth();
            var currentyear = new Date().getFullYear();
    
            var days;
    
            if (currentMonth < birthMonth) {
                days = (currentyear - birthyear - 1) * 365;
                days += (12 + currentMonth - birthMonth) * 30;
            } else {
                days = (currentyear - birthyear) * 365;
                days += (currentMonth - birthMonth) *30;
            }
    
            return days <= searchInputInYears;
        });
    }
    
    // if (/^\d+$/.test(searchInput)){
    //     const searchInputInYears = Math.floor(parseInt(searchInput));
    //     //console.log(searchInputInYears);
    //     var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    //     //console.log(storedData)
    //     var searchResults = storedData.filter(function (user) {
    //         //console.log(searchResults);
    //         var userBirthDate = new Date(user.dob);
    //         var birthyear=userBirthDate.getFullYear()
    //         let birthMonth= userBirthDate.getMonth()
    //         let currentmonth = new Date.getMonth();
    //         var currentyear = new Date().getFullYear() 
    //         if(currentMonth<birthmonth){
    //             var days=(currentyear-birthyear-1)*365;
    //             days+=(12+currentMonth-birthmonth)*30;
    //         }
    //         else{
    //              var days=(currentyear-birthyear)*365;
    //              days+=(currentMonth-birthmonth)+30;

    //         }
    //         // var age = new Date().getFullYear() - userBirthDate.getFullYear();
    //         // //console.log(age);
    //         return days<=searchInputInYears;
    //     });
    // }

    else if(/^[a-zA-Z]+( [a-zA-Z]+)?$/.test(searchInput)){
        var storedData = JSON.parse(localStorage.getItem("formData")) || [];
        //console.log(storedData)

        var searchResults = storedData.filter(function (user) {
        return user.name.toLowerCase().includes(searchInput);
        });
    }

    // Check if the searchInput contains KB or MB and change the multiplier
    else if(/^(?:\d+(?:\.\d+)?|\.\d+)\s*KB$/i.test(searchInput)) {
    sizeMultiplier = 1024; // KB to bytes
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    var searchResults = storedData.filter(function (user) {
    // Assuming user.picture contains the size information directly
    const picSize = parseFloat(user.imageSize);

    if (picSize && typeof picSize === 'number') {
        return picSize <= parseFloat(searchInput) * sizeMultiplier;
    }
   
});

    } 
    else if (/^(?:\d+(?:\.\d+)?|\.\d+)\s*MB$/i
    .test(searchInput)) {
    sizeMultiplier = 1024 * 1024; // MB to bytes
    var storedData = JSON.parse(localStorage.getItem("formData")) || [];
    var searchResults = storedData.filter(function (user) {
    // Assuming user.picture contains the size information directly
    const picSize = parseFloat(user.imageSize);

    if (picSize && typeof picSize === 'number') {
        return picSize <= parseFloat(searchInput) * sizeMultiplier;
    }
});
}
if(searchInput==""){
    return displaySearchResults("nothing");
}

//call the displySearchResults 

displaySearchResults(searchResults);
}
    
function displaySearchResults(results) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
    if(results=="nothing"){
        resultsContainer.innerHTML = "";
        return;
    }
    if (results.length === 0) {
        resultsContainer.innerHTML = "No matching users found.";
        return;
    }       

    results.forEach(function (user) {
        var userDetails = document.createElement("div");
        userDetails.innerHTML = "<strong>Name:</strong> " + user.name + 
        "<br><strong>Email:</strong> " + user.mailid + 
        "<br><strong>Contact Number:</strong> " + user.cntctno + 
        "<br><strong>Date Of Birth:</strong> " +user.dob+ 
        "<br><strong>Gender:</strong> " + user.gender +
        "<br><strong>Education:</strong> " + user.education +
        "<br><strong>Occupation:</strong> " + user.occupation+
        "<br><strong>File Size:</strong> " + user.imageSize+
        "<br><strong>Profile Picture:</strong> "

        // Check if user.picture is a valid URL

        if (isValidURL(user.imageUrl)) {
            var imgElement = document.createElement("img");
            imgElement.src = user.imageUrl;
            imgElement.alt = "User Image";
            imgElement.style.maxWidth = "20%";
            imgElement.style.maxHeight = "20%"; // Optional: Limit the image width
            userDetails.appendChild(document.createElement("br")); // Add a line break
            userDetails.appendChild(imgElement);
        }

        userDetails.appendChild(document.createElement("br")); // Add a line break
        userDetails.appendChild(document.createElement("br")); // Add another line break
        userDetails.appendChild(document.createElement("br"));
        resultsContainer.appendChild(userDetails);
    });
}

// Function to check if a string is a valid URL

function isValidURL(url) {
try {
new URL(url);
return true;
} 
catch (error) {
return false;
}
}


    
    
    

