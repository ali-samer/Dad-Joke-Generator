const buttonElement = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'bLdiUMVByS/TRxokJqunVg==M4T4QReSmChHLfD4';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

buttonElement.addEventListener('click', async  () => {
    try {
    jokeEl.innerText = 'UPDATING...';
    buttonElement.disabled = true;
    buttonElement.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data =  await response.json();
    buttonElement.disabled = false;
    buttonElement.innerText = "Tell me a joke"
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Error occured. Please try again at a later time...";
        buttonElement.disabled = false;
        buttonElement.innerText = "Tell me a joke"
        console.log(error);
    }

});
