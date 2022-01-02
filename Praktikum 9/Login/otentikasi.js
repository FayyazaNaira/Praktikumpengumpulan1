function login() {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "fayyazati10" && password == "ti10221242")
    {
        location.replace("success.html");
        alert("Login Berhasil");
    } 
    else {
        alert("Login Gagal");
    }
}