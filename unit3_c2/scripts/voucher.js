

//const url  ="https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function makeApi(){
    try{
        let url  ="https://masai-vouchers-api.herokuapp.com/api/vouchers"
        
        let res = await fetch(url);
        let data = await res.json()
        console.log(data.vouchers)
        appendData(data.vouchers)
    }
    catch(err){
        console.log('err',err)
    }
}

makeApi()

let purchesProduct =[]
//appendData(data)
const appendData = (data) =>{
    data.forEach(function(elem) {

        let div = document.createElement("div")

        let image  = document.createElement("img")
         image.src = elem.image;

         let name  = document.createElement("h3")
          name.innerText = elem.name;

        let price = document.createElement("h3");
        price.innerText = elem.price;

       let  buybtn = document.createElement("button")
       buybtn.setAttribute("class","buy_voucher")
       buybtn.innerText = "Buy";
       buybtn.addEventListener("click", function(){

        purchesProduct.push(elem)
        localStorage.setItem("purchase",JSON.stringify(purchesProduct))

       });
        

        div.append(image,name,price,buybtn)
        document.getElementById("voucher_list").append(div)
    });
}