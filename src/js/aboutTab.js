function aboutTab(){
  
  // const h1 = document.createElement('h1');
  // h1.textContent = ''
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');
  aboutDiv.innerHTML = `<h1>Where good food and hospitality become one</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> ` 
  return aboutDiv;
}

export {aboutTab}