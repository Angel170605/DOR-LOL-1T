export default class Champion{
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.blurb = data.blurb;
        this.attack = data.info.attack;
        this.defense = data.info.defense;
        this.magic = data.info.magic;
        this.difficulty = data.info.difficulty
        this.full = data.image.full
    }
}