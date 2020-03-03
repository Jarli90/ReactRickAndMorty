import React from 'react';

import ProfileCard from "../components/ProfileCard.js";
import styles from "../css/MainView.module.css";
import fetcher from "../js/characterFetcher.js"

class MainView extends React.Component {
    constructor() {
        super();
        this.fullList = [];
        this.fetchCharacters();
    }
    fetchCharacters() {
        fetcher.fetchCharacters(
            (characters) => {
                // If a character response returns while in profile view the character array will not update
                if (this._mounted) {
                    this.fullList = characters;
                    this.setState({ characters: characters });
                }
            });
    }
    state = {
        characters: []
    }
    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    search(inputText) {
        this.setState(
            {
                characters: inputText ?
                    this.fullList.filter((character) => character.name.toLowerCase().includes(inputText.toLowerCase())) :
                    this.fullList
            });
    }

    render() {
        return <article>
            <section className={styles.searchBar}>
                <input onKeyUp={(e) => this.search(e.target.value)} type="text"></input>
            </section>
            <section className={styles.cardsWindow}>
                {this.state.characters.map(
                    (character) =>
                        <ProfileCard character={character} key={character.id}></ProfileCard>)}
            </section>
        </article>
    }
}

export default MainView;