import { pageLoad } from './js/pageload'
import { aboutTab } from './js/aboutTab'
import { menuTab } from './js/menuTab'
import { contactTab} from './js/contactTab'
import style from "./_scss/main.scss";


// append homepage view
const content = document.getElementById('content');
content.appendChild(pageLoad());

const mainDiv = document.querySelector('.main');
mainDiv.appendChild(aboutTab());

// add Event Listener to navigation
const nav = document.querySelector('nav');
nav.addEventListener('click', function(e){
  // clear previous 
  mainDiv.innerHTML = '';
  console.log(e.target.innerText)
  if(e.target.innerText == 'About'){
      mainDiv.appendChild(aboutTab());
      
  } 
  else if (e.target.innerText == 'Menu'){
      mainDiv.appendChild(menuTab());
      
  } 
  else if (e.target.innerText == 'Contact'){
      mainDiv.appendChild(contactTab());
      
  }
  e.target.classList.toggle('active');
})
