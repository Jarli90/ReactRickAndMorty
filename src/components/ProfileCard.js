import React from 'react';
import { Link } from "react-router-dom";

import styles from "../css/ProfileCard.module.css";

function ProfileCard(props) {
    const { character } = props;

    return <div className={styles.card} >
        <Link style={{ textDecoration: 'none' }}
            to={{
                pathname: `/profile`,
                state: { character: character }
            }}
            className={styles.link}>
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
                    <li><p>Status</p></li>
                    <li><p>Species</p></li>
                </ul>
                <ul>
                    <li><p>{character.status}</p></li>
                    <li><p>{character.species}</p></li>
                </ul>
            </section>
        </Link>
    </div>
}

export default ProfileCard;