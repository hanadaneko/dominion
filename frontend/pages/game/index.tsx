import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";



const make_initial_hand = (prop:any) => {

}




function game() {
    return(
    <div className={styles.container}>
        <main >
            <Link href="/">
                &larr; back
            </Link>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Game &rarr;</h2>
                    <p>ゲームを開始する</p>
                </div>
            </div>
        </main>
    </div>
        )

}

export default game;