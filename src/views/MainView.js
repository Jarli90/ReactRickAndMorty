import React from 'react';

import ProfileCard from "../components/ProfileCard";
import styles from "../css/MainView.module.css";
import fetcher from "../helpers/characterFetcher.js"


class MainView extends React.Component{
    constructor(){
        super();
        this.fullList =  [];
        fetcher.fetchCharacters(
            (characters) => 
            {
                this.fullList = characters;
                this.setState({characters: characters});
            });
        
    }
    state = {
        characters:[]
    }

    search(event){
        let inputText = event.target.value;

        this.setState(
            { characters: inputText?    
                this.fullList.filter((character) => character.name.toLowerCase().includes(inputText.toLowerCase())):
                this.fullList
            });
    }

    render(){
        return  <article>
                    <section className={styles.searchBar}>
                        <input onKeyUp={(e) => this.search(e)} type="text"></input>
                    </section>
                    <section className={styles.cardsWindow}>
                        {this.state.characters.map((character) => <ProfileCard character={character} key={character.id}></ProfileCard>)}
                    </section>
                </article>
    }
}

export default MainView;