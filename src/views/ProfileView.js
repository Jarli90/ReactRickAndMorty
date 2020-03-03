import React from 'react';
import { Link } from "react-router-dom";

import DataList from "../components/DataList.js";
import EpisodeList from "../components/EpisodeList.js";

import styles from "../css/ProfileView.module.css";

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
        if("undefined" !== typeof(props.location.state)){
            this.character = props.location.state.character;
            this.fetchEpisodes();
        }
        else{
            props.history.push('/');
        }
    }
    fetchEpisodes() {
        this.character.fetchEpisodes(
            (episodes) => {
                if(this._mounted)
                    this.setState({ episodes: episodes });
            });
    }
    state = {
        episodes: []
    }
    componentDidMount(){
        this._mounted = true;
    }
    componentWillUnmount(){
        this._mounted = false;
    }
    render() {
        // this.props.history.push('/');
        return <article className={styles.article}>
            <button>
                <Link style={{ textDecoration: 'none' }} className={styles.link} to={"/"}>
                    Back to character list
                </Link>
            </button>

            <DataList character={this.character}></DataList>
            <section className={styles.image}>
                <img alt="test" src={this.character.image}></img>
            </section>
            <EpisodeList episodes={this.state.episodes}></EpisodeList>
        </article>
    }

}

export default ProfileView;