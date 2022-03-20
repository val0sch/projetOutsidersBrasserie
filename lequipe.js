const cards = document.querySelector(".cards");

const staff = [
  {
    picture: "photos/anthony.jpeg",
    name: "Anthony",
    job: "Propriétaire du restaurant",
    text: "J'aime le jeu d'échec, et par dessus tout : les émojis",
  },

  {
    picture: "photos/jenna.jpg",
    name: "Jenna",
    job: "Cheffe cuisinère",
    text: "Le gras c'est la vie, mais le sport aussi",
  },

  {
    picture: "photos/chris.jpg",
    name: "Chris",
    job: "Cuisinier",
    text: "J'aime faire plaisir aux gens. Vegan les jours impairs de la semaine",
  },

  {
    picture: "photos/andrea.jpg",
    name: "Andrea",
    job: "Service en salle",
    text: "Toujours de bonne humeur!",
  },

  {
    picture: "photos/tom.jpg",
    name: "Tom",
    job: "Service en salle",
    text: "Les frites maison sont à tomber!",
  },
];

function createCard(photo, nom, profession, texte) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${photo})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = `${nom}`;
  cardBody.appendChild(cardTitle);

  const cardJob = document.createElement("p");
  cardJob.classList.add("card-job");
  cardJob.innerHTML = `${profession}`;
  cardBody.appendChild(cardJob);

  cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = `${texte}`;
  cardBody.appendChild(cardText);
}

for (let i = 1; i < staff.length; i++) {
  createCard(staff[i].picture, staff[i].name, staff[i].job, staff[i].text);
}
