const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = html;
}

// ***** SORTING HAT WELCOME MESSAGE ***** //
const welcomeMessage = () => {
  const domString = 
  `
    <div class="card">
      <div class="card-body">
        <img class="sorting-hat" src="../assets/images/sorting_hat.png" alt="Sorting Hat - Harry Potter Sorting Hat Cartoon@seekpng.com">
        <h2 class="card-title">Sorting Hat</h2>
        <p class="card-text">"There's nothing hidden in your head the Sorting Hat can't see, so click me and I will tell you where you ought to be."</p>
        <a href="#" class="btn btn-primary sort-btn">Begin</a>
      </div>
    </div>
  `;

  renderToDom('#welcome', domString);
};

const startApp = () => {
  welcomeMessage();
};

startApp();
