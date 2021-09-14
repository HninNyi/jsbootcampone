//UI
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// Add event listener for toggle
toggle.addEventListener('click',()=>{
    // console.log("hello");
    document.body.classList.toggle('show-nav');
});

open.addEventListener('click' , ()=>{
    // console.log("sign up");
    modal.classList.add("show-modal");
});

close.addEventListener('click',()=>{
    // console.log("close");
    modal.classList.remove("show-modal");
});


// 1st method
// window.addEventListener('click',function(e){
//     // console.log(e.target);
//     if(e.target=== modal){
//         modal.classList.remove("show-modal");
//     }    
// });

// 2nd method
window.addEventListener('click',(e)=>e.target=== modal ? modal.classList.remove('show-modal') : false);

