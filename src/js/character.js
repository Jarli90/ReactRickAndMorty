
class Character {
    constructor(character) {
        this.id = character.id;
        this.name = character.name;
        this.status = character.status;
        this.species = character.species;
        this.type = character.type;
        this.gender = character.gender;
        this.origin = character.origin.name;
        this.location = character.location.name;
        this.image = character.image;
        this.episodeUrls = character.episode;
        this.episodes = [];
    }
    fetchEpisodes(cb) {
        let promiseArray = this.episodeUrls
            .map(url => 
                fetch(url)
                    .then(response => response.json())
                    .then(episode => this.episodes.push(episode))
                    .then(() => Promise.resolve)
                    
            );
        Promise.all(promiseArray)
            .then(() => cb(this.episodes))
            .catch(err => console.log(err));
    }
}
export default Character;