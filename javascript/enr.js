function sendMail(){
    names = document.getElementById("name").value;
    phnnum = document.getElementById("phnnum").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    classs = document.getElementById("class").value;
    subject = document.getElementById("subject").value;
    phnumlength = String(phnnum).length;
    const bodylet = `Name: ${names} <br> Phone numer: ${phnnum} <br> Gmail: ${email} <br>
                     Address: ${address} <br> Class: ${classs} <br> Subject: ${subject}<br> Thank you.`;

     if (names === ""|| phnnum == ""||address == ""|| classs == ""||subject == ""|| email == ""){
            window.alert("Fill all the required details to register!");
        }
        else{
            if (phnumlength != "10"){
                window.alert("Check your phone number");
            }
            else{
                Email.send({
                Host : "smtp.elasticemail.com",
                Username : "rexiy.biz@gmail.com",
                Password : "A0BDFC187246DF691C95B648081B206B8619",
                To : 'rexiy.biz@gmail.com',
                From : "rexiy.biz@gmail.com",
                Subject : "New Registration!",
                Body : bodylet
                }).then(
                    window.alert("You are registered. Check your whatsapp in 24 hours.")
                );
                }
    }
}
