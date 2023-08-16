const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]
drawPerson();


function drawPerson() {
    locations.forEach(location => {
        let peopleAtLocation = people.filter(person => person.location === location);
        let peoplePictures = peopleAtLocation.map(person => person.picture).join(' ');

        console.log(`People at ${location}: ${peoplePictures || 'None'}`);


        document.getElementById(location).innerText += peoplePictures + ', ';
    });
}

function attackBat(location) {
    let peopleAtLocation = people.filter(person => person.location === location);
    people.forEach(picture => {


    });
    if (peopleAtLocation.length === 0) {
        console.log(`No people at location to attack!`);
        return;
    }

    let newPicture = '🦇';
    let firstPerson = peopleAtLocation[0];
    let index = people.indexOf(firstPerson);

    if (index !== -1) {
        people[index].picture = newPicture;
        drawPerson();
    }






}


















