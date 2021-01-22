import Link from 'next/link'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from '../../styles.module.css'

export default function ComicDetails(props) {
    let num = props.comic.num;
    let next = num + 1;
    let previous = num - 1;
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{props.comic.title}</h1>
                <div className={styles.mainContent}>
                    <Link href="/comics/[id].js" as={`/comics/${previous}`}>
                        <a className={styles.mainPN}>&#8249;</a>
                    </Link>
                    <img src={props.comic.img} className={styles.mainImg}></img>
                    <Link href="/comics/[id].js" as={`/comics/${next}`}>
                        <a className={styles.mainPN}>&#8250;</a>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    const responce = await fetch('https://xkcd.com/info.0.json')
    const responce1 = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const data = await responce.json();
    const data1 = await responce1.json();
    return { props: { comic: data }, props: { comic: data1 } };
}