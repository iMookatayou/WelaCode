import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div>
            <div className={styles.heading}>Services</div>
            <ul className={styles.list}>
              <li>Web Application</li>
              <li>Landing Page / Company Site</li>
              <li>Dashboard & Internal System</li>
              <li>UX / UI Design</li>
            </ul>
          </div>
          <div>
            <div className={styles.heading}>Contact</div>
            <ul className={styles.list}>
              <li className={styles.emailItem}>
                <FaEnvelope className={styles.emailIcon} />
                <span>welacode.dev@gmail.com</span>
              </li>
              <li>Line / Discord / Telegram</li>
            </ul>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/welacode.dev/" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {year} All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
