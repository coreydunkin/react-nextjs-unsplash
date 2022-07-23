import styles from './Welcome.module.scss'
import Image from "next/image";

export const Welcome = () => (
    <main className={styles.Welcome}>
        <img src="/upgrowth.svg" alt="Upgrowth" width='300px' className={styles.logo}/>
        <h1>Welcome to Upgrowth!</h1>
        <p>Your assignment is in the README.md file.</p>
        <p>Delete this component and get started!</p>
    </main>
)
