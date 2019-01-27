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

  sideDiv.appendChild(h1);
  sideDiv.appendChild(hr);
  sideDiv.appendChild(h3);
  sideDiv.appendChild(p);

  // create navigation menu
  const navUI = document.createElement('nav');
  const ul = document.createElement('ul');
  const liMenu = document.createElement('li');
  liMenu.innerText = 'Menu';
  const liLocation = document.createElement('li');
  liLocation.innerText = 'Location';
  const liContact = document.createElement('li');
  liContact.innerText = 'Contact';

  ul.appendChild(liMenu);
  ul.appendChild(liLocation);
  ul.appendChild(liContact);

  navUI.appendChild(ul);

  
  containerDiv.appendChild(sideDiv);
  containerDiv.appendChild(navUI);

  return containerDiv;
  
}

export { pageLoad };