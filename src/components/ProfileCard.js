import React from 'react';

import {useHistory} from "react-router-dom";

// import "./test.css";
import styles from "../css/ProfileCard.module.css";

function ProfileCard(props){
    const history= useHistory();
    const { character } = props;

    function toProfileView(){
        history.push({
            pathname:`/profile`,
            state: {character: character}
        });
    }
    return  <div onClick={toProfileView} id={character.id} className={styles.card} >
                <header>
                    <section className={styles.image}>
                        <img alt="test" src={character.image}></img>
                    </section>
                    <section>
                        <h2 className={styles.name}>{character.name}</h2>
                    </section>
                </header>
                <section className={styles.data}>
                    <ul>
                        <li>
                            <p>Status</p>
                        </li>
                        <li>
                            <p>Species</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>{character.status}</p>
                        </li>
                        <li>
                            <p>{character.species}</p>
                        </li>
                    </ul>
                </section>
                
            </div>
}



export default ProfileCard;