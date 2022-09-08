const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
 
fetch('./store.json')
  .then(response => response.json())
 .then(jsondata => console.log(jsondata))
}


