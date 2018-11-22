let token = localStorage.getItem('access_token');
let access_token = 'Bearer ' + token;
// const route = "http://127.0.0.1:5000/api/v2";
const route = "https://store-manager2-api-heroku.herokuapp.com/api/v2";
const appcreateproduct = document.getElementById("productForm");
appcreateproduct.addEventListener("submit",appCreateprod);
function appCreateprod(event){
    event.preventDefault();
    let name = appcreateproduct["name"].value;
    let price = appcreateproduct["price"].value;
    let quantity = appcreateproduct["quantity"].value;
    let category = appcreateproduct["category"].value;    
    if (name == ""){
        alert("Product field cannot be empty");
        document.inputproduct.name.focus();
        return false
    }
    else if (price == ""){
        alert("Price cannot be empty");
        document.inputproduct.price.focus();
        return false
    }
    else if (quantity == ""){
        alert("Quantity field cannot be empty");
        document.inputproduct.quantity.focus();
        return false
    }
    else if (category == ""){
        alert("Category cannot be empty");
        document.inputproduct.category.focus();
        return false
    }    
    else{        
        let url = route+"/products"
        let data = {
            'name': name,
            'price': price,
            'quantity': quantity,
            'category': category           
        };                
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*' ,
            'Authorization' : access_token           
            },
            mode:'cors',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())            
        .then((data)=> {
            if (data.message) {                
                console.log(data.message);
                window.location.assign("rwAdminProdct.html")
            }
            else {
                document.getElementById("productStatus").innerHTML = data.msg;
                console.log(data.msg);
            }
        })
        .catch(err => console.log(err));
    }
}