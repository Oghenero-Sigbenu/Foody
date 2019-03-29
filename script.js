
let ham = document.querySelector('.hambuger');

// ham.addEventListener('click', () => {
//     ham.classList.toggle("down");
//      console.log(this);
// });

ham.addEventListener('click', function () {
    this.classList.toggle("down");
    //  console.log(this);
}); 

// ham.addEventListener('click', () => {
//     // this.classList.toggle("down");
//      console.log(this);
// }); 