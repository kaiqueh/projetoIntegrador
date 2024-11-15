function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;


    if (username && password) {
        alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${remember}`);
    } else {
        alert("Please fill in all fields.");
    }
}
