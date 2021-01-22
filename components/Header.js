import styles from '../styles.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogoLink}>
                    <Link href="/">
                        <a>
                            <img src="https://www.userlogos.org/files/logos/signify/xkcd.png" className={styles.headerLogo} />
                        </a>
                    </Link>
                </div>
                <nav className={styles.headerNav}>
                    <Link href="/">
                        <a className={styles.headerLink}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.headerLink}>About</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}