class Fetcher {

    constructor(){
        this._reset();
    } 
    /**
     * Private method used to initialize and reset Object
     */
    _reset(){
        this.characters = [];
        this.initUrl = "https://rickandmortyapi.com/api/character";
        this.nextPageUrl = this.initUrl;
    }

    /**
     * This callback handles the returned characters
     * @callback charactersCallback
     * @param {Character[]} characters returned from request
     */

    /**
     * Fetches all characters from all pages. Calls itself recursively until 
     * @param {charactersCallback} cb Callback that handles the retrieved characters
     */
    fetchCharacters(cb){
        fetch(this.nextPageUrl)
            .then((response) => response.json())
            .then((data) => {
                this.characters = this.characters.concat(data.results);
                this.nextPageUrl = data.info.next;
                cb(this.characters);

                if(this.nextPageUrl)
                    this.fetchCharacters(cb);
                else
                    this._reset();
            })
            .catch((err) => console.log(err));
    }

}

export default new Fetcher();