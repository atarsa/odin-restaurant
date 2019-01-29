function menuTab(){
  
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  menuDiv.innerHTML = `<h2> Our favourites </h2>
                      <div class="course">
                        <h3>Roast daikon</h3>
                        <p>Roast daikon served with tender vegetables</p>
                        <div class="ingredients">daikon | potatoes | parsnips | carrots | cabbage | cauliflower | swede | vegan stuffing | vegan yorkshire pudding</div>
                      </div>
                      
                      <div class="course">
                        <h3>Pineapple and pepper curry</h3>
                        <p>
                        Mild curry made with fresh pineapple and green pepper</p>
                        <div class="ingredients">onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | pineapple | pepper</div>
                       </div>
                    
                      <div class="course">
                        <h3> Spinach and coconut curry</h3>
                        <p>Mild curry made with fresh spinach and coconut</p>
                        <div class="ingredients">onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | spinach | coconut</div>
                     </div>
                        
                      <div class="course">
                        <h3>Tofu and cauliflower curry</h3>
                        <p>Mild curry made with marinaded tofu and fresh cauliflower</p>
                        <div class="ingredients">onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | tofu | cauliflower</div>
                      </div>
                      
                      <div class="course">
                        <h3>Chilli oil and plumcot salad</h3>
                        <p>Hot chilli oil and fresh plumcot served on a bed of lettuce</p>
                        <div class="ingredients">lettuce | chilli oil | plumcot</div>
                     </div>
                     `;

  
  return menuDiv;
}

export { menuTab }