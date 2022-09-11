
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

   menu.onclick = () => {     
      menu .classList.toggle("move");
      navbar .classList.toggle("open-menu");
      
   }

   // email js

function validate () {
   let name = document.querySelector(".name");
   let email = document.querySelector(".email");
   let msg = document.querySelector(".message");
   let sendBtn = document.querySelector(".send-btn");

   sendBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
          } else {
            sendmail(name.value, email.value, msg.value);
            success();
         }

   });

}

validate();

function sendmail(name,email,msg) {
   
   emailjs.send("service_3nwbam3","template_p13f3b7",{
      to_name: email,
      from_name: name,
      message: msg,
      });
           
}
function emptyerror() {

   swal({
      title: "Oh No...",
      text: "Form cannot be empty!",
      icon: "error",
    });
}


function success() {
   swal({
      title: "Email sent successfully",
      text: "We will try to reply in 24 hours ",
      icon: "success",
    });
}

// header background change on scroll

let header = document.querySelector('header');

window.addEventListener("scroll", () => {
   header.classList.toggle("header-active", window.scrollY > 0);

});