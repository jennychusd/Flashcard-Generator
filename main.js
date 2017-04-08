var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var cardType = process.argv[2];
var firstArg = process.argv[3];
var secondArg = process.argv[4];

function cardRouter(cardType) {
	switch(cardType) {
		case 'BasicCard':
			var newCard = new BasicCard(firstArg, secondArg);
            console.log(newCard.front);
            console.log(newCard.back);
            return newCard;
			break;
		case 'ClozeCard':
			var newClozeCard = new ClozeCard(firstArg, secondArg);
            console.log(newClozeCard.text);
            console.log(newClozeCard.cloze);
            newClozeCard.partial();
            return newClozeCard;
			break;
		default:
			console.log("choose from valid commands: BasicCard or ClozeCard")
	}
}

cardRouter(cardType);