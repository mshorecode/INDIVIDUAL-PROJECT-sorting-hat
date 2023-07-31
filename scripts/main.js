import { students } from "../data/students.js";
import { houses } from "../data/houses.js";
// import { voldArmy } from '../data/vold.js';
import { renderToDom } from "../utils/renderToDom.js";

// ***** SORTING HAT WELCOME MESSAGE ***** //
const welcomeMessage = () => {
  const domString = `
    <div class="card">
      <div class="card-body">
        <img class="sorting-hat" src="../assets/images/sorting_hat.png" alt="Sorting Hat - Harry Potter Sorting Hat Cartoon@seekpng.com">
        <h2 class="card-title">Sorting Hat</h2>
        <p class="card-text">"There's nothing hidden in your head the Sorting Hat can't see, so click me and I will tell you where you ought to be."</p>
        <button id="welcome-btn" class="btn btn-primary sort-btn">Begin</button>
      </div>
    </div>
  `;

  renderToDom("#welcome", domString);
};

// ***** RENDER FORM ***** //
const form = () => {
  let domString = "";
  domString += `
  <p id="form-label">Student:</p>
  <div class="col-sm-10">
    <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="">
  </div>
    <button type="submit" class="btn btn-primary sort-btn-2" id="submit-btn">Sort House</button>
  </div>
  `;

  renderToDom("#form", domString);
};

// ***** STUDENT CARDS ***** //
const studentCard = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `
      <div class="card" style="width: 18rem;">
        <img src=${student.crest} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <a href="#" class="btn btn-primary">Expel</a>
        </div>
      </div>
      `;
  }
  renderToDom("#studentCards", domString);
};

// ***** NEW STUDENT & SORT ***** //
const sort = (e) => {
  e.preventDefault();

  let randomHouse = Math.floor(Math.random() * houses.length);

  const newStudent = {
    id: students.length + 1,
    name: document.querySelector('input').value,
    house: houses[randomHouse].id,
    crest: houses[randomHouse].imageUrl,
  };

  students.push(newStudent);
  document.querySelector("form").reset();
  studentCard(students);
};

// ***** EVENT LISTENERS ***** //
const eventListeners = () => {
  document.querySelector("#welcome-btn").addEventListener("click", () => {
    form();
  });

  document.querySelector("form").addEventListener("submit", sort);
};

const startApp = () => {
  welcomeMessage();
  studentCard(students);
  eventListeners();
};

startApp();
