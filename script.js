const navBar = document.getElementById("navbar");
const bar = document.getElementsByClassName(".-fa-bars");
const removeElement = document.getElementById("remove");
const cartButtons = document.querySelectorAll(".cart-btn");
const product = document.getElementById("pimage");
const pName = document.getElementById("pname");
const price = document.getElementById("price");
const cartTable = document.getElementById("cart-table");
console.log(removeElement, product, pName, price); // Ensure these elements exist

function openNav(){

    navBar.style.right = 0;

}
function closeNav(){
    navBar.style.right = -3000 + "px";
}

removeElement.addEventListener("click",()=>{

    removeElement.parentNode.remove();

})



