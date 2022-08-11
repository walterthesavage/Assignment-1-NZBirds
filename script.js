const BIRDS_JSON = 'nzbird.json';

let body = document.querySelector('body');
body.onload = fetchData();

async function fetchData() {
    let response = await fetch(BIRDS_JSON);
    if (!response.ok) {
        console.error(response.status); // error handling
    }
    let data = await response.text();

    let birdsData = JSON.parse(data);

    console.log(birdsData[0].primary_name);

    console.log('Leaving');

    birdCardsCreator(birdsData);

}

function birdCardsCreator(birds) {

    for (let i = 0; i < birds.length; i++) {

        const imageAddress = birds[i].photo.source;

        const primaryName = birds[i].primary_name;
        const photographer = birds[i].photo.credit;

        const englishName = birds[i].english_name;

        const sciName = birds[i].scientific_name;
        const family = birds[i].family;
        const order = birds[i].order;
        const status = birds[i].status;

        const length = birds[i].size.length.value + birds[i].size.length.units;

        const weight = birds[i].size.weight.value + birds[i].size.weight.units;

        const birdInfo = [sciName, family, order, status, length, weight];

        // Adding cards to HTML

        let section = document.querySelector('section');

        let image = document.createElement('img');
        image.setAttribute('src', imageAddress);
        image.setAttribute('alt', 'picture of ' + primaryName + '.');

        let divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        let divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        let title = document.createElement('h4');
        title.textContent = englishName;

        divCard.append(image);
        divCard.append(divContainer);

        divContainer.append(title);

        section.append(divCard);



        // let pInfo = document.createElement('p')

    }

    // const primaryName = birds[0].primary_name;

    // let pInfo = document.createElement('p');
    // pInfo.textContent = primaryName;

    // let section = document.querySelector('section');


    // section.append(pInfo);

}