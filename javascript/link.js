
function checks(){
    let user_id = prompt("userid");
    let password = prompt("password");


    let user_ida = "1";
    let passworda = "2";

    if (user_id === user_ida && password=== passworda){
        window.alert("successfully logged in.");
        window.location.href = "F:/Ace Academy/index.html";
        document.getElementById("addlink").style.display = 'block';
    }
    else{
        window.alert("sorry, only admin is allowed.")
    }
}