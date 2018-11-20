// const route = "http://127.0.0.1:5000/api/v2";
const route = "https://store-manager2-api-heroku.herokuapp.com/api/v2"
const appsignup = document.getElementById("signupForm");
appsignup.addEventListener("submit",appsignup);
function appsignup(event){
    event.preventDefault();
    let firstname = appsignup["firstname"].value;
    let lastname = appsignup["lastname"].value;
    let username = appsignup["username"].value;
    let email = appsignup["email"].value;
    let password = appsignup["password"].value;
    let role = appsignup["role"].value;
    if (firstname == ""){
        alert("Firstname field cannot be empty");
        document.login.firstname.focus();
        return false
    }
    else if (lastname == ""){
        alert("Lastname cannot be empty");
        document.login.lastname.focus();
        return false
    }
    else if (username == ""){
        alert("Username field cannot be empty");
        document.login.username.focus();
        return false
    }
    else if (email == ""){
        alert("Email cannot be empty");
        document.login.email.focus();
        return false
    }
    else if (password == ""){
        alert("Password cannot be empty");
        document.login.password.focus();
        return false
    }
    else if (role == ""){
        alert("Role cannot be empty");
        document.login.role.focus();
        return false
    }
    else{        
        let url = route+"/auth/signup"
        let data = {
            'firstname': firstname,
            'lastname': lastname,
            'username': username,
            'email': email,
            'password': password,
            'role': role
        };        
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*',
            'Authorization': access_token
            },
            mode:'cors',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        console.log(response.json)    
        .then((data)=> {
            if (data["access_token"]) {
                localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
                window.location.assign("sAttendntCreation.html")
            }
            else {
                document.getElementById("signupStatus").innerHTML = data["msg"];
                console.log(data["msg"]);
            }
        })
        .catch(err => console.log(err));
    }
}