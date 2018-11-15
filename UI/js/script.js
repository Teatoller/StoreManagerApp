// const route = "http://127.0.0.1:5000/api/v2";
const route = "https://store-manager2-api-heroku.herokuapp.com/api/v2"
const applogin = document.getElementById("loginForm");
applogin.addEventListener("submit",
function fetchlogin(event){
    event.preventDefault()
    let username = applogin["username"].value;
    let password = applogin["password"].value;
    if (username == ""){
        alert("Username field cannot be empty");
        document.login.username.focus();
        return false
    }
    else if (password == ""){
        alert("Password cannot be empty");
        document.login.password.focus();
        return false
    }
    else{        
        let url = route+"/auth/login"
        let data = {
            'username': username,
            'password': password
        };        
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*'
            },
            mode:'cors',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())        
        .then((data)=> {
            if (data["access_token"]) {
                localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
                window.location.assign("landing.html")
            }
            else {
                document.getElementById("loginStatus").innerHTML = data["msg"];
                console.log(data["msg"]);
            }
        })
        .catch(err => console.log(err));
    }
});