import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import {ChallengeBox} from '../components/ChallengeBox'

import styles from '../styles/pages/Home.module.css'
import { Countdown } from '../components/Countdown';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
  )
}
