import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* COLUMNS ONLY */}
        <div className={styles.cols}>

          {/* SERVICES */}
          <div>
            <div className={styles.heading}>Services</div>
            <ul className={styles.list}>
              <li>Web Application</li>
              <li>Landing Page / Company Site</li>
              <li>Dashboard & Internal System</li>
              <li>UX / UI Design</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className={styles.heading}>Contact</div>
            <ul className={styles.list}>
              <li className={styles.emailItem}>
                <FaEnvelope className={styles.emailIcon} />
                <span>welacode.dev@gmail.com</span>
              </li>
              <li>Line / Discord / Telegram</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
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
