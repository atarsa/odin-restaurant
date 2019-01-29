function pageLoad(){

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

    // create sidebar 
  const sideDiv = document.createElement('div');
  sideDiv.classList.add('welcome');

  const h1 = document.createElement('h1');
  h1.innerText = "Aga T.";
  const hr = document.createElement('hr');
  const h3 = document.createElement('h3');
  h3.innerText = "Welcome!";
  const p = document.createElement('p');
  p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipicing elit pellentesque. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Eget dolor morbi non arcu risus quis. Pretium quam vulputate dignissim suspendisse in est";

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-info');
  contactDiv.innerHTML = `<hr><p> 3502 Keyser Ridge Road    <br>
      Greensboro, NC 27406
      info@mysite.com <br>
      123 456 6780 <br>
      Open everyday 2pm to 12am
      </p>
      <small>
   Created with Vanilla JS by <a href="https://github.com/atarsa"> A.Tarsa </a>
  </small>`;

  sideDiv.appendChild(h1);
  sideDiv.appendChild(hr);
  sideDiv.appendChild(h3);
  sideDiv.appendChild(p);
 
  sideDiv.appendChild(contactDiv);

  // create navigation menu
  const navUI = document.createElement('nav');
  const ul = document.createElement('ul');
  
  const liAbout = document.createElement('li');
  liAbout.innerText = 'About'
 
  const liMenu = document.createElement('li');
  liMenu.innerText = 'Menu';
  
  const liContact = document.createElement('li');
  liContact.innerText = 'Contact';

  ul.appendChild(liAbout);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);

  // create div for main content
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  navUI.appendChild(ul);

  
  containerDiv.appendChild(sideDiv);
  containerDiv.appendChild(navUI);
  containerDiv.appendChild(mainDiv);

  return containerDiv;
  
}


export { pageLoad };