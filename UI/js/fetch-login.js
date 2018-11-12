const url = "https://store-manager2-api-heroku.herokuapp.com/api/v2/auth/login";
let data = {
    username:'username',
    password: 'password'
}
let request = new Request(url, {
    method:'POST',
    body:'data',
    headers:new headers(),
    mode:'cors'
})
fetch(request)
.then(function(){

})