class Anime {
    constructor(name) {
        this.animeName = name;
    }
    getDisplayName() {
        return this.animeName;
    }
}

class Shonen extends Anime {
    constructor(name, genre) {
        super(name);
        this.genre = genre;
    }
    getGenre() {
        return this.genre;
    }
}

class Shienen extends Anime {
    constructor(name, genre, theme) {
        super(name);
        this.genre = genre
        this.theme = theme
    }
    getTheme() {
        return this.theme;
    }
}

class Shoujo extends Shonen {
    constructor(name, genre, happy_ending) {
        super(name, genre)
        this.happyEnding = happy_ending
    }
    hasHappyEnding() {
        return this.happyEnding
    }
}

const rentAGirl = new Shoujo('Rent a Girlfriend', 'romance', false);
console.log(rentAGirl.hasHappyEnding())
console.log('no copy', rentAGirl.getGenre === Shonen.prototype.getGenre)
console.log('no copy', rentAGirl.getDisplayName === Shonen.prototype.getDisplayName)