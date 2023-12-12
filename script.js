const buttonElement = document.getElementById('button');
const jokeElement = document.getElementById('joke')

const apiKey = "F2Jv0RrVVQ0VpGyx5TEI9g==c7lx43OEFVDYl607"
const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey
  }
}

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke() {
  try {
    jokeElement.innerHTML = "Updating..."
    buttonElement.disabled = true
    buttonElement.innerHTML = "Loading..."
    const resposne = await fetch(apiUrl, options)
    const data = await resposne.json()
    jokeElement.textContent = data[0].joke
    buttonElement.disabled = false
    buttonElement.innerHTML = "Grab A Joke"
  } catch (error) {
    jokeElement.innerHTML = "An error occured try again later"
    buttonElement.innerHTML = "Grab a joke"
  }

}




buttonElement.addEventListener('click', getJoke);

