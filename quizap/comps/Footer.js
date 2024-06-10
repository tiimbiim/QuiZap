import styles from "@/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footerStyle}>
            <div className={styles.footerLinksSection}>
                <div className={styles.footerColumn}>
                    <h2>About</h2>
                    <ul className={styles.listStyle}>
                        <li className={styles.textStyle}><Link href="/info/howItWorks" target="_blank">How QuiZap works</Link></li>
                        <li className={styles.textStyle}><Link href="/info/aboutUs" target="_blank">Meet the team</Link></li>
                        <li className={styles.textStyle}><Link href="/info/contactUs" target="_blank">Contact us</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h2>Help Center</h2>
                    <ul className={styles.listStyle}>
                        <li className={styles.textStyle}><Link href="/info/FAQ" target="_blank">FAQ</Link></li>
                        {/* <li className={styles.textStyle}><Link href="/info/communityForums" target="_blank">Community Forums</Link></li> */}
                        <li className={styles.textStyle}><Link href="/info/reportIssues" target="_blank">Report Issues</Link></li>
                        <li className={styles.textStyle}><Link href="/info/legalAndPrivacy" target="_blank">Legal & Privacy</Link></li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2024 QuiZap</p>
        </footer>
     );
}
 
export default Footer;