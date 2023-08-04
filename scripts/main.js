import { students } from "../data/students.js";
import { houses } from "../data/houses.js";
import { voldArmy } from "../data/vold.js";
import { renderToDom } from "../utils/renderToDom.js";

// ***** SORTING HAT WELCOME MESSAGE ***** //
const welcomeMessage = () => {
  const domString = `
    <div class="card" id="sortHat">
      <div class="card-body">
        <button id="welcome-btn" class=" btn-primary sort-btn">
          <img class="sorting-hat" src="../assets/images/sorting-hat.png" alt="The Sorting Hat from Harry Potter">
        </button>
        <h2 class="card-title">Sorting Hat</h2>
        <p class="card-text">"There's nothing hidden in your head the Sorting Hat can't see, so click me and I will tell you where you ought to be."</p>
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
      <input type="text" required="required" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Enter a name">
    </div>
    <button type="submit" class="btn sort-btn-2" id="submit-btn">Sort</button>
    </div>
  `;

  renderToDom("#form", domString);
};

// ***** STUDENT CARDS ***** //
const studentCard = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `
      <div class="card mb-3" id="student" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${student.crest} class="img-fluid" alt="The house crest of ${student.house}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <button type="click" class="btn sort-btn" id="expel--${student.id}">Expel</button>
            </div>
          </div>
        </div>
      </div>
      `;
  }
  renderToDom("#studentCards", domString);
};

const deathEater = (array) => {
  let domString ="";
  for (const student of array) {
    domString += `
      <div class="card mb-3" id="student" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../assets/images/voldermort.png" class="img-fluid" id="voldermort" alt="Image of Voldermort and his Death Eaters">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">Death Eaters</p>
            </div>
          </div>
        </div>
      </div>
      `;
  }
   renderToDom("#deathEaters", domString);
};

// ***** FILTER BUTTONS ***** //
const filterBtn = () => {
  const domString = `
  <div id="filterContainer">
    <button type="button" class="house btn all-btn">All</button>
    <button type="button" class="house btn" id="gryff">Gryffindor</button>
    <button type="button" class="house btn" id="raven">Ravenclaw</button>
    <button type="button" class="house btn" id="huff">Hufflepuff</button>
    <button type="button" class="house btn" id="sly">Slytherin</button>
  </div> 
  `;

  renderToDom("#buttons", domString);
};

// ***** FILTER FUNCTIONALITY ***** //
const filterHouse = (name) => {
  const filteredHouses = students.filter((student) => student.house === name);
  studentCard(filteredHouses);
};

// ***** NEW STUDENT & SORT ***** //
const sort = (e) => {
  e.preventDefault();

  let randomHouse = Math.floor(Math.random() * houses.length);

  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("input").value,
    house: houses[randomHouse].id,
    crest: houses[randomHouse].imageUrl,
  };

  students.push(newStudent);
  document.querySelector("form").reset();
  filterBtn();
  studentCard(students);
};

// ***** EVENT LISTENERS ***** //
const eventListeners = () => {
  document.querySelector("#welcome-btn").addEventListener("click", () => {
    form();
  });

  document.querySelector("form").addEventListener("submit", sort);

  document.querySelector("#buttons").addEventListener("click", (e) => {
    switch (e.target.id) {
      case "gryff":
        filterHouse("Gryffindor");
        break;
      case "raven":
        filterHouse("Ravenclaw");
        break;
      case "huff":
        filterHouse("Hufflepuff");
        break;
      case "sly":
        filterHouse("Slytherin");
        break;
      default:
        studentCard(students);
        break;
    }
  });

  document.querySelector("#sorting").addEventListener("click", (e) => {
    if (e.target.id.includes("expel")) {
      const [, int] = e.target.id.split("--");
      const index = students.findIndex((student) => student.id === Number(int));
      let expelledStudent = students.splice(index, 1)[0];
      voldArmy.push(expelledStudent);
      studentCard(students);
      deathEater(voldArmy);
    }
  });
};

const startApp = () => {
  welcomeMessage();
  eventListeners();
};

startApp();
