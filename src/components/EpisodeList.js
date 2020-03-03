import React from 'react';
import styles from "../css/EpisodeList.module.css";

function ProfileCard(props) {
    const { episodes } = props;

    return  <section className={styles.episodes}>
                <h3>In episodes:</h3>
                <section id="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Episode</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {episodes.map(
                                (episode) =>  
                                <tr key={episode.id}>
                                    <td><p>{episode.episode}</p></td>
                                    <td><p>{episode.name}</p></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </section>
}



export default ProfileCard;