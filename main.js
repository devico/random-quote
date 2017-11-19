let fetch = require('node-fetch')

let getRandomQuote = () => {
  return (
	  fetch('https://talaikis.com/api/quotes/')
		  .then(response => {
		    return response.json()
		  })
		  .then(data => {
		    console.log(data[Math.floor(Math.random() * data.length)].quote)
		  })
		  .catch(ex => {
		    console.log('parsing failed', ex)
		  })
	)
}
