import React from 'react';
import {useHistory} from "react-router-dom";
import styles from "../css/ProfileView.module.css";

function ProfileView(props){
    const history = useHistory();

    const character = props.location.state.character;
    
    function toMainView() {
        history.push("/");
    }
    return <article className={styles.article}>
                <section className={styles.dataList}>
                    <ul>
                        <li>
                            <h1>{character.name}</h1>
                        </li>
                        <li>
                            <p>Status: {character.status}</p>
                        </li>
                        <li>
                            <p>Species: {character.species}</p>
                        </li>
                        <li>
                            <p>Type: {character.type}</p>
                        </li>
                        <li>
                            <p>Gender: {character.gender}</p>
                        </li>
                    </ul>
                </section>
                
                <section className={styles.image}>
                    <img alt="test" src={character.image}></img>
                </section>
                <button onClick={toMainView}>to Main View!</button>
            </article>
}

export default ProfileView;