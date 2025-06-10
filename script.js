// Toggle hamberger menu 
function toggleHam(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById("myMenu");
    
    if(myMenu.className === "menu"){
        myMenu.className += " menu-active"
    }else{
        myMenu.className = "menu";
    }
}

// Check form validate
const form = document.getElementById("form");
const name = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(fname.value === ""){
        showerror(fname,"กรุณาป้อนข้อมูลใหม่")
    }else{
        showsuccess(fname)
        console.log("Success")
    }

    if(email.value === ""){
        showerror(email,"กรุณาป้อนข้อมูลใหม่")
    }else if(!validateEmail(email.value)){
        showerror(email,"อีเมลไม่ถูกต้อง")
    }
    else{
        showsuccess(email)
        console.log("Success")
    }

    if(phone.value === ""){
        showerror(phone,"กรุณาป้อนข้อมูลใหม่")
    }else if(!validatePhone(phone.value)){
        showerror(phone,"เบอร์โทรไม่ถูกต้อง")
    }else{
        showsuccess(phone)
        console.log("Success")
    }

    if(subject.value === ""){
        showerror(subject,"กรุณาป้อนข้อมูลใหม่")
    }else{
        showsuccess(subject)
        console.log("Success")
    }

    if(message.value === ""){
        showerror(message,"กรุณาป้อนข้อมูลใหม่")
    }else{
        showsuccess(message)
        console.log("Success")
    }
})

function showerror(input,message){
    const fgroup = input.parentElement;
    fgroup.className = "fgroup error";
    const small = fgroup.querySelector("small");
    small.innerText = message;
}

function showsuccess(input){
    const fgroup = input.parentElement;
    fgroup.className = "fgroup success";
}

function validateEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLocaleLowerCase());
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Button scroll go to top 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

myBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

// Click Nav-bar menu go to section
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-menu');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target; 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });
});