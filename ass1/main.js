let name = document.querySelector('#name');
let age = document.querySelector('#age');
let spec = document.querySelector('#speciality');

let home = document.querySelector('#home');
let contact = document.querySelector('#contact');

document.addEventListener("DOMContentLoaded", ()=>{
  name.addEventListener("mouseover",()=>{
    name.innerHTML = "<h2>Full name: Tran Ngoc Hien Long</h2>";
  })
  name.addEventListener("mouseout",()=>{
    name.innerHTML = "<h2>Name: Hien Long</h2>";
  })

  age.addEventListener("mouseover",()=>{
    age.innerHTML = "<h2>D.O.B: 08/09/2001</h2>";
  })
  age.addEventListener("mouseout",()=>{
    age.innerHTML = "<h2>Age: 20</h2>";
  })

  spec.addEventListener("mouseover",()=>{
    spec.innerHTML = "<h2>Just kidding :)</h2>";
  })
  spec.addEventListener("mouseout",()=>{
    spec.innerHTML = "<h2>Speciality: Not Web Dev</h2>";
  })

  if(document.URL.includes("index.php")){
    home.style = "background:#75E6DA; color:black";
  }

  if(document.URL.includes("contact.php")){
    contact.style = "background:#75E6DA; color:black";
  }
})
