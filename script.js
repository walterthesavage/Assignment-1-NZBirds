function birdCardsCreator(){
    let birds = await fetchData();
}

function fetchData() {
	fetch('https://website.com/file.json') // fetch data from API
		.then(response => response.json()) // parse to JSON
		.then(data => console.log(data)) // use the data
		.catch(error => console.error(error)) // error handling
	};