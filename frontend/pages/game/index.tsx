import Link from "next/link";
import styles from "../../styles/Home.module.css";

interface CardData {
    name: string;
    effectText: string;
}


const Game = () => {
    let cardData: CardData = {name:'銅貨', effectText:'効果内容'};

    return(
        <div className={styles.container}>
            <main >
                <Link href="/">
                    &larr; back
                </Link>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>{cardData.name}</h2>
                        <p>{cardData.effectText}</p>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Game;