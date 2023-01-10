function check(){
    let user = "rustam";
    let pass = "Rustam@123";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username + password);

    if ( user == username  ||  pass == password){
        window.location.href="index2.html"
    }
    else{
        alert("Error (Plese check your id & password)")
    }
} 





const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function() {
  // Perform logout action (e.g., redirect to login page)
});