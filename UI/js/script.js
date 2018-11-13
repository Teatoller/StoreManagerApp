const url = "http://127.0.0.1:5000/api/v2";
const applogin = document.getElementById("loginForm");
applogin.addEventListener("submit", fetchlogin);
function fetchlogin(event){
    event.preventDefault()
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;
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
        let data = {username:username, password:password};
    }
    let request = new Request(url, {
        method:'POST',
        body: data,
        mode:'cors',
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json,text/plan, */*'
        },
        body:JSON.stringify(data)
    })
    fetch(request)
    .then((res)=>res.json())
    .then((data)=> {
        if (data["access_token"]) {
            localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
            window.location.assign("landing.html")
        }
        else {
            document.getElementById("loginStatus").innerHTML = data["message"];
            console.log(data["message"])
        }
    })
    .catch(error => console.log('error', error));

})

// let route = "http://127.0.0.1:5000/api/v2";
// document.getElementById("loginForm").addEventListener("submit",
// function fetchlogin(event){
//     event.preventDefault()
//     let username = document.forms["login"]["username"].value;
//     let password = document.forms["login"]["password"].value;
//     if (username == ""){
//         alert("Username field cannot be empty");
//         document.login.username.focus();
//         return false
//     }
//     else if (password == ""){
//         alert("Password cannot be empty");
//         document.login.password.focus();
//         return false
//     }
//     else{
//         let url = route+"/auth/login"
//         let data = {username:username, password:password};
//     }
//     let request = new Request(url, {
//         method:'POST',
//         body: data,
//         mode:'cors',
//         headers:{
//             'Content-type': 'Application/json'
//         },
//         body:JSON.stringify(data)
//     })
//     fetch(request)
//     .then((res)=>res.json())
//     .then((data)=> {
//         if (data["access_token"]) {
//             localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
//             window.location.assign("landing.html")
//         }
//         else {
//             document.getElementById("loginStatus").innerHTML = data["message"];
//             console.log(data["message"])
//         }
//     })
//     .catch(error => console.log('error', error));

// })