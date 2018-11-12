const login = document.getElementById('login');
login.addEventListener('submit',(e) => {
    e.preventDefault();
    let username = document.getElementById('username').nodeValue;
    let password = document.getElementById('password').nodeValue;
})


const url = "https://store-manager2-api-heroku.herokuapp.com/api/v2/auth/login";
let data = {
    username:'username',
    password: 'password'
}
let request = new Request(url, {
    method:'POST',
    body:'data',
    mode:'cors',
    headers:{
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
    },
    body:JSON.stringify({username:username, password:password})
})
fetch(request)
.then(function(){
    (request => request.json()).then(response => {
        if (response.token) {localStorage.setItem('token',response.token);
    token = localStorage.getItem('token')}
    })
})