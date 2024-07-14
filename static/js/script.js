   // CART SLIDER
const  cart_btn  = document.querySelector('.cart')
const cartslider = document.querySelector('.cart-slider')
const exitbtn =document.querySelector('.exit')

cart_btn.addEventListener('click',()=>{
    cartslider.classList.add('cart-active')
    setTimeout(()=>{
    backdrop.classList.add('show')
    },300)
})

exitbtn.addEventListener('click',()=>{
    cartslider.classList.remove('cart-active')
    backdrop.classList.remove('show')
})


// backdrop4

const backdrop =document.querySelector('.backdrop')

backdrop.addEventListener('click',()=>{
    backdrop.classList.remove('show')
    cartslider.classList.remove('cart-active')
})



// SEARCH SLIDER
const searchbtn = document.querySelector('.search')
const searchslider =document.querySelector('.search-slider')
const input = document.querySelector('.search-input')
input.addEventListener('keyup',(e)=>{
    console.log(e.target.value.toLowerCase().trim())
})
searchbtn.addEventListener('click',()=>{
    searchslider.classList.add('search-active')
})



// location dropdown

const location_btn =document.querySelector('.location-div')
const location_dropdown = location_btn.querySelector('.location-dropdown-options')
const dropdown_options = location_btn.querySelectorAll('.dropdown-option')
const location_text = location_btn.querySelector('.location-selector span')

location_btn.addEventListener('click',()=>{
    location_dropdown.classList.toggle('location-active')
})

dropdown_options.forEach(opt=>{
    opt.addEventListener('click',()=>{
        let location_data = opt.querySelector('.dropdown-option span').innerText;
        location_text.innerText=location_data
    })
})


// ADD product to the cart // cart slider

const addcartbtn = document.querySelectorAll(".add-cart-btn")
// console.log(addcartbtn)
addcartbtn.forEach((opt)=>{
    opt.addEventListener('click',addcart
        // opt.classList.add('invisible')
        
    )
})

let list=[]
function addcart(){
   let food = this.parentElement
   let prod_title = food.querySelector('.product-name').innerHTML;
   let prod_price  = food.querySelector('.product-price').innerHTML;
   let prod_img = food.querySelector('.product-img').src;

   let new_prod ={prod_title,prod_price,prod_img}

//   condition check if the product alreadt exixts in cart
    if(list.find((el)=>el.prod_title==new_prod.prod_title)){
        alert("Item Already Exist In Cart")
        return;
        }   
        else{
                list.push(new_prod)
            }
   let callfunc = Creatcartelement(prod_title,prod_price,prod_img);
   let element = document.createElement('div');
   element.innerHTML = callfunc;
   
   let cart_holder = document.querySelector(".cart-content");
   cart_holder.append(element)
   loadcontent();
}

function Creatcartelement(prod_title,prod_price,prod_img){
    return ` 
    <div class="cart-item">
    <img src="${prod_img}" alt="" class="cart-img">
    <div class="item-detail">
        <div class="item-title">${prod_title}</div>
        <div class="item-qnt">250g</div>
        <div class="item-price">${prod_price}</div>
    </div>
    <div class="add-qnt">
      <i class="fa-solid fa-minus " ></i>
      <span>1</span>
      <i class="fa-solid fa-plus "></i>
        </div>
    <div class="del-item">
        <i class="fa fa-trash"></i>
    </div>
</div>`
}


function plusfunction(){ 
let cart_qnt_number = document.querySelector('.add-qnt span')
if(cart_qnt_number.innerHTML<10){
cart_qnt_number.innerHTML++
}  }

function minusfunction(){
    let cart_qnt_number = document.querySelector('.add-qnt span')
if(cart_qnt_number.innerHTML>1){
cart_qnt_number.innerHTML--
}
}

// Delete product from the cart

document.addEventListener('DOMContentLoaded',loadfood())
function loadfood(){
    loadcontent()
}
function loadcontent(){
    // select the item which shoul be remove from the cart
    let del_item =document.querySelectorAll('.del-item')
     
 
    del_item.forEach((btn)=>{
        btn.addEventListener('click',removeitem);

    })
    // remove item  
    function removeitem(){
        alert("Sure you want to delete")
        this.parentElement.remove()
        list.pop()
    }


// cart qnt plus or minus

    
let plusbtn =document.querySelectorAll('.fa-plus')
let minusbtn  = document.querySelectorAll('.fa-minus')
console.log(minusbtn)
console.log(plusbtn)
for(i =0; i<plusbtn.length;i++){
    plusbtn[i].addEventListener('click',function(){
        let increasecount = Number(this.previousElementSibling.textContent)
        // console.log(this.previousElementSibling.textContent)
        increasecount++
        this.previousElementSibling.textContent = increasecount;
    })
    minusbtn[i].addEventListener('click',function(){
        let decreasecount = Number(this.nextElementSibling.textContent);
        if (decreasecount>1){
        decreasecount--}
        this.nextElementSibling.textContent = decreasecount;        

    }) 
}
}