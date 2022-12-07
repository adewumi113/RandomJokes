document.querySelector("button").addEventListener('click', getjokes)

function getjokes(){
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h4').innerText = data.category
      if (data.type === 'twopart'){
        document.querySelector('h2').innerText = data.setup
        document.querySelector('h3').innerText = data.delivery
      }else if(data.type === 'single'){
        document.querySelector('h2').innerText = data.joke
        document.querySelector('h3').innerText = data.delivery
      }
    
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    }); 
}

