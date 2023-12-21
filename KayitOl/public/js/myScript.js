function gnder() {
    var email = document.getElementById('mailInput').value;
    var pass = document.getElementById('passwordInput').value;

    // eğer email == "xyz@abc.com" ve pass == "123" ise alert ver başarılı
    // değilse alert ver başarısız
    
    if (email == "xyz@abc.com" && pass == "123") {
        alert("Başarılı");
    }
    else {
        alert("Başarısız");
    }

}