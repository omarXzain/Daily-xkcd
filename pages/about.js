import styles from '../styles.module.css'
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>About XKCD</h1>
                <h2 className={styles.aboutContent}>What is XKCD?</h2>
                <p className={styles.aboutContentPara}>It is a webcomic created in 2005 by American author Randall Munroe. The comic's tagline describes it as "A webcomic of romance, sarcasm, math, and language". Munroe states on the comic's website that the name of the comic is not an initialism, but "just a word with no phonetic pronunciation".
                The subject matter of the comic varies from statements on life and love to mathematical, programming, and scientific in-jokes. Some strips feature simple humor or pop-culture references. It has a cast of stick figures, and the comic occasionally features landscapes, graphs, charts, and intricate mathematical patterns such as fractals. New cartoons are added three times a week, on Mondays, Wednesdays, and Fridays.
                Munroe has released four spinoff books from the comic. The first book, chronologically, published in 2010 and entitled xkcd: volume 0 was a series of select comics from his website. His 2014 book What If? is based on his blog of the same name that answers unusual science questions from readers in a light-hearted way that is scientifically grounded. The What If column on the site is updated with new articles from time to time. His 2015 book Thing Explainer explains scientific concepts using only the one thousand most commonly used words in English. A fourth book, How To, which is described as "a profoundly unhelpful self-help book," was released on September 3, 2019.</p>
            </main>
            <Footer />
        </>
    )
}