
let ham = document.querySelector('.hambuger');
let details = document.getElementById("nav-menu")

// }); 
//on clicking on hamb-menu it should change it class 
ham.addEventListener("click", () => {
   ham.classList.toggle("down");
console.log("love")
if(details.style.display === 'flex'){
    details.style.display = 'none';
}else{
    details.style.display = 'flex';
    details.className += "responsive"
    };

 })
