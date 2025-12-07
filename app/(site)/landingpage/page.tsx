"use client";

import Head from "next/head";
import styles from "@/styles/Landing.module.css";
import {
  PanelsTopLeft,
  LayoutDashboard,
  Component as ComponentIcon,
  LayoutList,
  Server,
  Cpu,
  Workflow,
  RefreshCcw,
} from "lucide-react";
import Intro from "@/components/intro/Intro";
import Gridbix from "@/components/Grid";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>WelaCode · Software Studio</title>
        <meta
          name="description"
          content="WelaCode is a small, hands-on studio that designs and builds calm, long-lasting web apps and internal systems for teams who care about clarity and reliability."
        />
      </Head>

      <main className={styles.page}>
        {/* HERO – FULL WIDTH PROMO */}
        <Intro>
          <header className={styles.heroWrapper} id="top">
            <section className={styles.hero}>
              {/* LEFT – MAIN COPY */}
              <div className={styles.heroLeft}>
                {/* HEADLINE */}
                <motion.h1 className={styles.heroTitle}>
                  <motion.span className={styles.heroLine}>
                    WelaCode Group
                  </motion.span>

                  <motion.span className={styles.heroLine}>
                    <span className={styles.heroBadgeSoftware}>Software</span>{" "}
                    for clear focused teams
                  </motion.span>

                {/* บรรทัดสุดท้าย */}
                <motion.span
                  className={`${styles.heroLine} ${styles.heroTiltSmall}`}
                  initial={{ rotate: -1, x: 4, opacity: 0 }}
                  animate={{ rotate: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  built for teams who create with clarity
                </motion.span>

              </motion.h1>

                {/* TAGLINE PILL ใต้หัว */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 6 }}
                  animate={{ opacity: 1, x: 0, y: 6 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.45,
                    type: "spring",
                    stiffness: 140,
                  }}
                  className={styles.heroMeta}
                >
                  <span className={styles.heroMetaItem}>Web apps</span>
                  <span className={styles.heroMetaDot}>•</span>
                  <span className={styles.heroMetaItem}>Internal tools</span>
                  <span className={styles.heroMetaDot}>•</span>
                  <span className={styles.heroMetaItem}>UX &amp; UI</span>
                </motion.div>

                {/* SUBTITLE */}
                <motion.p
                  className={styles.heroSubtitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.45 }}
                >
                  WelaCode is a small hands on studio crafting web apps and
                  internal systems with focus on clarity and reliability
                </motion.p>

                <motion.p
                  className={styles.heroSubtitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.45 }}
                >
                  We help teams turn messy workflows into calm well structured
                  tools from internal dashboards to customer facing products that
                  feel intentional not noisy
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.45 }}
                  className={styles.heroList}
                >
                  <li>Custom web apps and internal systems</li>
                  <li>Long term maintenance for stable reliable tools</li>
                  <li>Design that prioritizes clarity over decoration</li>
                  <li>Small senior team working closely with you</li>
                </motion.ul>

                <motion.p
                  className={styles.heroSubtitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.45 }}
                >
                  Based in Southeast Asia collaborating globally with teams who
                  value thoughtful software sustainable pace and tools people
                  enjoy using every day
                </motion.p>
              </div>

              <div className={styles.heroRight}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -4, y: 40 }}
                  animate={{ opacity: 1, scale: 1.2, rotate: 0, y: -150 }}    
                  whileHover={{ scale: 1.25, rotate: 2, y: -105 }}            
                  transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                >
                  <Gridbix />
                </motion.div>
              </div>
            </section>
          </header>
        </Intro>

        <Intro>
          <section className={styles.section} id="design">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>UX, UI &amp; product feel</p>
              <h2>Product experiences that connect front to back</h2>
              <p>
                From the interface your team touches to the systems behind it,
                we build products that feel natural to use and solid to run
                every day.
              </p>
            </div>

            <div className={styles.valueGrid}>
              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <PanelsTopLeft size={32} strokeWidth={1.7} />
                </div>
                <h3>Frontend that feels familiar on day one</h3>
                <p>
                  Clear interfaces and predictable patterns that help teams
                  onboard fast without heavy training.
                </p>
              </article>

              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <Server size={32} strokeWidth={1.7} />
                </div>
                <h3>Backend that quietly does the heavy lifting</h3>
                <p>
                  Reliable APIs, clean data flows, and scalable foundations that
                  keep your product stable under real-world workloads.
                </p>
              </article>

              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <Workflow size={32} strokeWidth={1.7} />
                </div>
                <h3>Interfaces shaped around real workflows</h3>
                <p>
                  Screens and flows that match how teams actually work, so tools
                  feel intuitive instead of disruptive.
                </p>
              </article>

              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <LayoutList size={32} strokeWidth={1.7} />
                </div>
                <h3>Calm, readable interaction layer</h3>
                <p>
                  Balanced spacing, smooth states, and typography that make
                  daily-use tools feel comfortable for long sessions.
                </p>
              </article>

              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <Cpu size={32} strokeWidth={1.7} />
                </div>
                <h3>Front-to-back performance & reliability</h3>
                <p>
                  Fast response on the surface supported by tuned services,
                  caching, and architecture underneath.
                </p>
              </article>

              <article className={styles.valueCard}>
                <div className={styles.valueIconCentered}>
                  <RefreshCcw size={32} strokeWidth={1.7} />
                </div>
                <h3>Improves with real-world feedback</h3>
                <p>
                  Products evolve through usage patterns and team input, keeping
                  workflows sharp and relevant over time.
                </p>
              </article>
            </div>
          </section>
        </Intro>

        {/* WHY / OFFER SECTION */}
        <Intro>
          <section className={styles.section} id="why">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>
                For teams who want a steady partner
              </p>
              <h2>What it&apos;s like to work with WelaCode</h2>
              <p>
                We&apos;re not a high-volume agency. We take on a small number
                of projects so we can stay close to the details and be
                reachable when you need us.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              <article className={styles.card}>
                <h3>Direct access, no layers</h3>
                <p>
                  You talk directly with the person designing and building your
                  system. No long chains of account managers in between.
                </p>
              </article>

              <article className={styles.card}>
                <h3>Honest scope and pacing</h3>
                <p>
                  We&apos;d rather start with a smaller, realistic version that
                  actually ships – and then grow it with you over time.
                </p>
              </article>

              <article className={styles.card}>
                <h3>Respect for existing systems</h3>
                <p>
                  We work with what you already have, integrating carefully
                  instead of trying to replace everything at once.
                </p>
              </article>
            </div>
          </section>
        </Intro>

        {/* SERVICES */}
        <Intro>
          <section className={styles.section} id="services">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Services</p>
              <h2>What we build for you</h2>
              <p>
                From product landing pages to full internal systems, WelaCode
                takes care of the design language and the engineering
                underneath.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              <article className={styles.card}>
                <h3>Web products &amp; interfaces</h3>
                <p>
                  Bespoke web apps, dashboards and tools with readable,
                  maintainable code and layouts your team can live in all day.
                </p>
                <ul>
                  <li>Product &amp; feature-focused web apps</li>
                  <li>Responsive layouts for all devices</li>
                  <li>Design systems that match your brand</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3>Back office &amp; internal tools</h3>
                <p>
                  Calm, reliable admin panels and internal systems to support
                  day-to-day operations without getting in the way.
                </p>
                <ul>
                  <li>Operational dashboards &amp; control panels</li>
                  <li>Role-based access and clean APIs</li>
                  <li>Integrations with your existing data</li>
                </ul>
              </article>

              <article className={styles.card}>
                <h3>UX, UI &amp; product direction</h3>
                <p>
                  Typography-first interfaces that feel modern but familiar,
                  with guidelines your team can keep using after launch.
                </p>
                <ul>
                  <li>User journeys &amp; wireframes</li>
                  <li>Interface &amp; component design</li>
                  <li>Design guidelines for your team</li>
                </ul>
              </article>
            </div>
          </section>
        </Intro>

        {/* PROCESS */}
        <Intro>
          <section className={styles.section} id="process">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Process</p>
              <h2>A simple, steady way of working</h2>
              <p>
                No chaos, just clear steps – from first conversation to launch,
                with room for your feedback in every phase.
              </p>
            </div>

            <ol className={styles.processList}>
              <li>
                <span className={styles.stepBadge}>1</span>
                <div>
                  <h3>Discovery</h3>
                  <p>
                    We walk through your current workflow and constraints, then
                    outline a realistic scope that fits your team.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepBadge}>2</span>
                <div>
                  <h3>Design &amp; structure</h3>
                  <p>
                    Flows, wireframes and early visual direction focused on
                    typography and spacing that feels calm and trustworthy.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepBadge}>3</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    Frontend and backend are developed in small batches, with
                    demos so you can try things while we refine them.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepBadge}>4</span>
                <div>
                  <h3>Launch &amp; care</h3>
                  <p>
                    We hand over code, docs and support options, and help your
                    team settle into the new tools comfortably.
                  </p>
                </div>
              </li>
            </ol>
          </section>
        </Intro>

        {/* CONTACT */}
        <Intro>
          <section className={styles.section} id="contact">
            <div className={styles.contactCard}>
              <h2>Share your idea over a short note</h2>
              <p>
                Tell us what you&apos;re trying to build, what exists today, and
                what a good outcome would look like. We&apos;ll reply with a
                simple plan and next steps.
              </p>
              <div className={styles.contactActions}>
                <a
                  href="mailto:hello@welacode.dev"
                  className={styles.heroPrimaryBtn}
                >
                  Email the studio
                </a>
                <span className={styles.contactNote}>
                  Attach any rough sketches, screenshots or documents – they all
                  help.
                </span>
              </div>
            </div>
          </section>
        </Intro>
      </main>
    </>
  );
}
