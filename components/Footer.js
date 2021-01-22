import styles from '../styles.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerImgLink}>
                    <Link href="/">
                        <a>
                            <img src="https://www.userlogos.org/files/logos/signify/xkcd.png" className={styles.footerImg} />
                        </a>
                    </Link>
                </div>
                <div className={styles.footerDiv}></div>
                <nav className={styles.footerNav}>
                    <Link href="/">
                        <a className={styles.footerLink}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.footerLink}>About</a>
                    </Link>
                </nav>
                <div className={styles.footerLinks}>
                    {/* <Link href="www.facebook.com">
                        <a className={styles.footerSLink}><img src="https://webstockreview.net/images/facebook-clipart-circular-1.png" className={styles.footerIcon} /></a>
                    </Link> */}
                    <Link href="https://twitter.com/">
                        <a className={styles.footerSLink} target="_blank"><img src="https://iconape.com/wp-content/files/ep/353239/png/twitter-icon-circle-black-logo.png" className={styles.footerIcon} /></a>
                    </Link>
                    <Link href="https://instagram.com">
                        <a className={styles.footerSLink} target="_blank"><img src="https://img.pngio.com/instagram-logo-transparent-hd-verified-badge-of-instagram-hd-instagram-icon-circle-png-980_980.png" className={styles.footerIcon} /></a>
                    </Link>
                    <Link href="https://youtube.com">
                        <a className={styles.footerSLink} target="_blank"><img src="https://cdn.onlinewebfonts.com/svg/img_460043.png" className={styles.footerIcon} /></a>
                    </Link>
                </div>
            </div>
            <hr />
            <p className={styles.footerPara}>XKCD &sdot; All copyrights are reserved &copy; 2020</p>
        </footer>
    )
}