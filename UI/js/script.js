let route = "http://127.0.0.1:5000/api/v2";

document.getElementById("loginForm").addEventListener("submit",
function fetchlogin(event){
    event.preventDefault()
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;

    if (username == ""){
        alert("Username field must not be empty");
        document.login.username.focus();
        return false
    }
    else if (password == ""){
        alert("Password can't be empty");
        document.login.username.focus();
        return false
    }
    else{
        let url = route+"/auth/login"
        let data = {username:username, password:password};
        // fetch(url, {
        //     method: "POST",
        //     headers: {  
        //         "Content-Type": "application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        let request = new Request(url, {
            method:'POST',
            body:data,
            mode:'cors',
            headers:{
                'Content-type': 'Application/json'
            },
            body:JSON.stringify(data)
        })
        fetch(request)            
    .then((res)=>res.json())
    .then((data) => {
        if (data["access_token"]) {
            localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
            window.location.assign("landing.html");
        }
        else {
            document.getElementById("loginStatus").innerHTML = data["msg"];
            console.log(data["msg"])
        }
    })
    .catch(error => console.log('error : ', error));
}
});

// const login = document.getElementById('login');
// login.addEventListener('submit',(e) => {
//     e.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
// const url = "http://127.0.0.1:5000/api/v2/auth/login";
// let data = {
//     username:'username',
//     password: 'password'
// }
// let request = new Request(url, {
//     method:'POST',
//     body:'data',
//     mode:'cors',
//     headers:{
//         'Accept': 'Application/json',
//         'Content-type': 'Application/json'
//     },
//     body:JSON.stringify({username:username, password:password})
// })
// fetch(request)
// .then(function(response){return response.json()})
// .then(function(response){
//     localStorage.setItem('token',response.token);
//     if(response.message === 'invalid')
//     {
//         document.getElementById('error').innerHTML = response.message;
//     }
//     else
//     localStorage.setItem('token', response,token)
//     window.location.assign('login.html')
// })
// })