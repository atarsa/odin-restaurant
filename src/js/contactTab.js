function contactTab(){
  
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  contactDiv.innerHTML = `<h3>Drop us a line!</h3>
      <form >
        <input type="text" placeholder="Name*">
        <input type="email" placeholder="Email*">
        <input type="text" placeholder="Subject">
        <textarea rows=8 placeholder="Message"></textarea>
        <button>Send</button>
      
      </form>`;

  return contactDiv;

  
}

export {contactTab}