const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1:

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.className = "subheading";

// Question 5:

let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((e) => {
  e.style.color = "red";
});

// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7:

function logTheNames(list) {
  list.forEach((e) => {
    console.log(e.name);
  });
}

logTheNames(cats);

// Question 8:

function createCats(cats) {
  let htmlToReturn = "";
  cats.forEach((e) => {
    let age = e.age;
    if (!age) {
      age = "Age unknown";
    }
    htmlToReturn += `<div>
    <h5>${e.name}</h5>
    <p>${age}</p>`;
  });
  return htmlToReturn;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
