import React from 'react';
import { Link, Redirect } from "react-router-dom";

import DataList from "../components/DataList.js";
import EpisodeList from "../components/EpisodeList.js";

import Character from "../js/character.js";

import styles from "../css/ProfileView.module.css";

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        if( props.location.state
            && props.location.state.character instanceof Character){
            this.character = props.location.state.character;
            this.fetchEpisodes();
        }
        else
            props.history.push('/');
    }
    fetchEpisodes() {
        this.character.fetchEpisodes(
            (episodes) => {
                if (this._mounted)
                    this.setState({ episodes: episodes });
            });
    }
    state = {
        episodes: []
    }
    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        return !this.character?
        <Redirect to="/"></Redirect>:
        <article className={styles.article}>
            <Link style={{ textDecoration: 'none' }} className={styles.link} to={"/"}>
                <button>Back to character list</button>
            </Link>

            <DataList character={this.character}></DataList>
            <section className={styles.image}>
                <img alt="test" src={this.character.image}></img>
            </section>
            <EpisodeList episodes={this.state.episodes}></EpisodeList>
        </article>   
    }
}

export default ProfileView;