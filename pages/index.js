import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home(props) {
  let comicsNums = [];
  let num = props.comics.num;
  for (let i = 0; i < 10; i++) {
    comicsNums.push(num - i)
  }
  let next = num + 1;
  let previous = num - 1;
  return (
    <div >
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{props.comics.safe_title}</h1>
        <div className={styles.mainContent}>
          <Link href="/comics/[id].js" as={`/comics/${previous}`}>
            <a className={styles.mainPN}>&#8249;</a>
          </Link>
          <img src={props.comics.img} className={styles.mainImg} />
          {/* <Link href="/comics/[id].js" as={`/comics/${next}`}>
            <a className={styles.mainPN}>&#8250;</a>
          </Link> */}
        </div>
        <nav>
          <h2 className={styles.mainPrev}>Previous 10 comics</h2>
          <ul className={styles.mainPrevList}>
            {comicsNums.map((comic) =>
              <Link key={comic} href="/comics/[id].js" as={`/comics/${comic}`}>
                <a className={styles.mainPrevLinks}>#{comic}</a>
              </Link>
            )}
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const responce = await fetch('https://xkcd.com/info.0.json')
  const data = await responce.json();
  return { props: { comics: data } };
}