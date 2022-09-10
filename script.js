const jokeEl = document.getElementById('joke')
const jokeText = document.getElementById('joketext')
const jokeBtn = document.getElementById('jokeBtn')
let jokeBank = {}

jokeBtn.addEventListener('click', generateJoke)

function generateJokeBank() {
  fetch('./store.json')
  .then(response => response.json())
  .then(jsondata => save_jokes(jsondata))
}

generateJokeBank()

function generateJoke() {
  let _jokes = jokeBank.Jokes
  let max_index = _jokes.length
  let _joke = _jokes[Math.floor(Math.random() * _jokes.length)]
  console.log(_joke.joke)
  jokeText.innerHTML = _joke.joke
}

function save_jokes(_joke) {
  jokeBank = _joke
  console.log(jokeBank)
}

