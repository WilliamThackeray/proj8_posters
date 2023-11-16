import { films } from "./films.js";

const cards = document.querySelector('#cards')
const displayBtn = document.querySelector('#display')
const icon = document.querySelector('i')


// <!-- grid -->
// <!-- <i class="fa-solid fa-border-all fa-2xl" style="color: #293241;"></i> -->
// <!-- bars -->
// <!-- <i class="fa-solid fa-bars fa-2xl" style="color: #293241;"></i> -->
displayBtn.addEventListener('click', () => {
  if (icon.classList.contains('fa-border-all')) {
    // remove 'fa-border-all' and add 'fa-bars'
    icon.classList.remove('fa-border-all')
    icon.classList.add('fa-bars')
    cards.classList.remove('list')
    cards.classList.add('grid')
  } else if (icon.classList.contains('fa-bars')) {
    // remove 'fa-bars' and add 'fa-border-all'
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-border-all')
    cards.classList.remove('grid')
    cards.classList.add('list')

  }
}) 

for (let film of films) {
  //setup elements
  let fig = document.createElement('figure')
  let h2 = document.createElement('h2')
  let div = document.createElement('div')
  let img = document.createElement('img')
  let figC = document.createElement('figCaption')

  //append elements
  fig.appendChild(h2)
  fig.appendChild(div)
  div.appendChild(img)
  div.appendChild(figC)

  //add content to elements
  h2.innerHTML = film.title
  img.src = `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`
  figC.innerHTML = `
    <span>Director:</span> ${film.director}<br>
    <span>Producer:</span> ${film.producer}<br>
    <span>Released:</span> ${film.release_date}<br>
  `

  //add card to main section
  cards.appendChild(fig)
}