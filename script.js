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

        //Info to go in conatiner

        let title = document.createElement('h4');
        title.textContent = englishName;

        let sciInfo = document.createElement('p');
        sciInfo.textContent = 'Scientific Name: ' + birdInfo[0];

        let familyInfo = document.createElement('p');
        familyInfo.textContent = 'Family: ' + birdInfo[1];

        let orderInfo = document.createElement('p');
        orderInfo.textContent = 'Order: ' + birdInfo[2];

        let statusInfo = document.createElement('p');
        statusInfo.textContent = 'Status: ' + birdInfo[3];

        let lengthInfo = document.createElement('p');
        lengthInfo.textContent = 'Length: ' + birdInfo[4];

        let widthInfo = document.createElement('p');
        widthInfo.textContent = 'Width: ' + birdInfo[5];

        //Getting the img

        let image = document.createElement('img');
        image.setAttribute('src', imageAddress);
        image.setAttribute('alt', 'picture of ' + primaryName + '.');

        //Maori Name and the Photographer Credit.

        let maoriName = document.createElement('h3');
        maoriName.setAttribute('class', 'maori-position');
        maoriName.textContent = primaryName;

        let credit = document.createElement('p');
        credit.setAttribute('class', 'credit-position');
        credit.textContent = 'Photo By ' + photographer;

        //Card, Container, Img Container and Status Divider
        
        let divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        let divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        let divImg = document.createElement('div');
        divImg.setAttribute('class', 'img-container')

        let colour;

        if (status == 'Not Threatened') {
            colour = 'nt';
        } else if (status == 'Naturally Uncommon' ){
            colour = 'nc';
        } else if (status == 'Relict' ){
            colour = 'r';
        }  else if (status == 'Recovering' ){
            colour = 'recc'
        } else if (status == 'Declining' ){
            colour = 'd';
        } else if (status == 'Nationally Increasing' ){
            colour = 'ni';
        } else if (status == 'Nationally Vulnerable' ){
            colour = 'nv';
        } else if (status == 'Nationally Endangered' ){
            colour = 'ne'
        } else {
            colour = 'ex';
        }

        let statusDivide = document.createElement('hr');
        statusDivide.setAttribute('id', colour);

        //Finiding the section in the HTML

        let section = document.querySelector('section');

        //Appending to the HTML

        divContainer.append(title);

        divContainer.append(sciInfo);
        divContainer.append(familyInfo);
        divContainer.append(orderInfo);
        divContainer.append(statusInfo);
        divContainer.append(lengthInfo);
        divContainer.append(widthInfo);

        divImg.append(maoriName);
        divImg.append(credit);
        divImg.append(image);

        divCard.append(divImg);
        divCard.append(statusDivide);
        divCard.append(divContainer);

        section.append(divCard);
    }
}