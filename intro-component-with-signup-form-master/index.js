


function validateForm() {
    let firstName = document.forms["myForm"]["fname"].value;
    if (firstName.value === '' || firstName.value == null) {
        alert("[Field Name] cannot be empty");
        return false;
    } else {
        alert('Valid name given.');
    }
}


/* function validation() {
    var mail = document.getElementById("floatingInputValue").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.floatingInputValue(mail)) {
        alert("You have provided a valid email id")
        return true
    } else {
        alert("sorry! incorrent email id")
        return false
    }
} */ 