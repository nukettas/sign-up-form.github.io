
function validateForm() {
    let firstName = document.forms["myForm"]["floatingInput"].value;
    if (firstName === '' || firstName == null) {
        alert("[Field Name] cannot be empty");
        return false;
    } 
}

function validate() {
    let email = document.forms["emailForm"]["floatingInputValue"].value;
    if (email === '' || email === null) {
        alert("[Field Email] cannot be empty");
        return false;
    }
}