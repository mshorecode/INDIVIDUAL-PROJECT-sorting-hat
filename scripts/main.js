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
        <button id="welcome-btn" class="btn btn-primary sort-btn">Begin</button>
      </div>
    </div>
  `;

  renderToDom('#welcome', domString);
};

// ***** RENDER FORM ***** //
const form = () => {
  let domString = '';
  domString += 
  `
  <div class="col-sm-10">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Student:</label>
    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
  </div>
    <button type="submit" class="btn btn-primary sort-btn">Sort House</button>
  </div>
  `;

  renderToDom('#form', domString)
}

// ***** EVENT LISTENERS ***** //
const eventListeners = () => {
  document.querySelector("#welcome-btn").addEventListener('click', () => {
    form();
  })
}

const startApp = () => {
  welcomeMessage();
  eventListeners();
};

startApp();
