import { useContext } from 'react';
//import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  //const { level } = useContext(ChallengesContext);
  const level = 1;
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/chap0lin.png" alt="Thais Silveira"/>
      <div>
        <strong>Carlos Rocha</strong>
        
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}