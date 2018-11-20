const route = "https://store-manager2-api-heroku.herokuapp.com/api/v2"
const appcreateproduct = document.getElementById("productForm");
appcreateproduct.addEventListener("submit",appCreateprod);
function appCreateprod(event){
    event.preventDefault();
    let product = appcreateproduct["product"].value;
    let price = appcreateproduct["price"].value;
    let quantity = appcreateproduct["quantity"].value;
    let category = appcreateproduct["category"].value;    
    if (product == ""){
        alert("Product field cannot be empty");
        document.inputproduct.product.focus();
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
            'product': product,
            'price': price,
            'quantity': quantity,
            'category': category,            
        };        
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*' ,
            'Authorization' : "Bearer "+ localStorage.access_token           
            },
            mode:'cors',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())            
        .then((data)=> {
            if (data["access_token"]) {
                localStorage.setItem("access_token", JSON.stringify(data["access_token"]));
                window.location.assign("sAttendntCreation.html")
            }
            else {
                document.getElementById("productStatus").innerHTML = data["msg"];
                console.log(data["msg"]);
            }
        })
        .catch(err => console.log(err));
    }
}