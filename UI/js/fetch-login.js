const login = document.getElementById('login');
login.addEventListener('submit',(e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
const url = "http://127.0.0.1:5000/api/v2/auth/login";
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
.then(function(response){return response.json()})
.then(function(response){
    localStorage.setItem('token',response.token);
    if(response.message === 'invalid')
    {
        document.getElementById('error').innerHTML = response.message;
    }
    else
    localStorage.setItem('token', response,token)
    window.location.assign('login.html')
})
})