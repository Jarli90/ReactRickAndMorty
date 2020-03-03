import React from 'react';

import styles from "../css/DataList.module.css";

function ProfileCard(props) {
    const { character } = props;

    return  <section className={styles.dataList}>
                <ul>
                    <li><h1>{character.name}</h1></li>
                    <li><p>Status: {character.status}</p></li>
                    <li><p>Species: {character.species}</p></li>
                    <li><p>Type: {character.type}</p></li>
                    <li><p>Gender: {character.gender}</p></li>
                    <li><p>Location: {character.location}</p></li>
                    <li><p>Origin: {character.origin}</p></li>
                </ul>
            </section>
}
export default ProfileCard;