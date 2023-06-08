var test = "Hello world"
document.getElementById("submit").addEventListener('click', function () {
    console.log(test)
})

//document.getElementById("input_nama").addEventListener('input', function () {
    //var nama = document.getElementById("input_nama").
        //value
    //console.log(nama)
//})

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    //console.log(name);
    //console.log(birthDate);
    //console.log(gender);
    //console.log(messages);

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML =gender;
    document.getElementById("sender-messages").innerHTML = messages;
    
    // Example implementation
    //console.log("Name: " + name);
    //console.log("Birth Date: " + birthDate);
    //console.log("Gender: " + gender);
    //console.log("Message: " + messages);

    // You can modify this function to update the UI with the provided values
    // For example, you can set the values in specific elements on the page
    // or perform any other actions based on the form input.
}
