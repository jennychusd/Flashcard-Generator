var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
        if(!text.includes(cloze)) {
            throw error;
        } else {
            this.partialText = text.replace(cloze, '...');
            console.log(this.partialText);
        }
    }
}

module.exports = ClozeCard;