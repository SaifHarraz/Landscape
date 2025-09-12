var afterlogo=document.getElementById("afterlogo")
var aftersignup=document.getElementById("aftersignup")
afterlogo.addEventListener("click",function(){
    aftersignup.classList.toggle("d-none")
    afterlogo.classList.toggle("d-none")
})
aftersignup.addEventListener("click",function(){
     aftersignup.classList.toggle("d-none")
    afterlogo.classList.toggle("d-none")
})