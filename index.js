
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!}`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(arrayOfStringNames, eventName) {
    const arrayOfCards = [];
    for (let i=0; i<arrayOfStringNames.length; i++) {
        arrayOfCards[i] = `Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`;
    }

    return arrayOfCards;

}

function countDown(anyInteger) {
    while (anyInteger>=0) {
        console.log(anyInteger)
    anyInteger--    
    } 
}