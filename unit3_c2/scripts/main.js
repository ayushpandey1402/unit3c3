
let user = JSON.parse(localStorage.getItem("user")) || []
function myfun(e){
    e.preventDefault();
    var obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        amount:document.getElementById("amount").value,

    }

    user.push(obj)
    localStorage.setItem("user".charAt,JSON.stringify(user))
    alert("sinup Successful")
    // window.location.href="purchase.html"


    
}

