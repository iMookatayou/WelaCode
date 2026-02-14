"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Auth.module.css";

type Mode = "signin" | "signup";

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const isSignIn = mode === "signin";

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div
          className={`${styles.side} ${styles.sideLeft} ${
            isSignIn ? styles.sideActive : ""
          }`}
        >
          <AnimatePresence mode="wait">
            {isSignIn && (
              <motion.div
                key="signin-form"
                className={styles.formInner}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className={styles.title}>Sign In</h2>
                <p className={styles.subtitle}>
                  Welcome back! Please sign in to continue.
                </p>

                <div className={styles.socialRow}>
                  <button className={styles.socialBtn}>G</button>
                  <button className={styles.socialBtn}>f</button>
                  <button className={styles.socialBtn}>in</button>
                </div>

                <p className={styles.smallMuted}>or use your email account</p>

                <form
                  className={styles.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle sign in
                  }}
                >
                  <label className={styles.field}>
                    <span>Email Address</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Password</span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      required
                    />
                  </label>

                  <button type="button" className={styles.linkGhost}>
                    Forgot your password?
                  </button>

                  <button type="submit" className={styles.primaryBtn}>
                    Sign In
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`${styles.side} ${styles.sideRight} ${
            !isSignIn ? styles.sideActive : ""
          }`}
        >
          <AnimatePresence mode="wait">
            {!isSignIn && (
              <motion.div
                key="signup-form"
                className={styles.formInner}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className={styles.title}>Create Account</h2>
                <p className={styles.subtitle}>
                  Join WelaCode Group and start your journey with us.
                </p>

                <div className={styles.socialRow}>
                  <button className={styles.socialBtn}>G</button>
                  <button className={styles.socialBtn}>f</button>
                  <button className={styles.socialBtn}>in</button>
                </div>

                <p className={styles.smallMuted}>
                  or use your email for registration
                </p>

                <form
                  className={styles.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle sign up
                  }}
                >
                  <label className={styles.field}>
                    <span>Full Name</span>
                    <input type="text" placeholder="John Doe" required />
                  </label>

                  <label className={styles.field}>
                    <span>Email Address</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Password</span>
                    <input
                      type="password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      required
                    />
                  </label>

                  <button type="submit" className={styles.primaryBtn}>
                    Sign Up
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className={styles.slider}
          initial={false}
          animate={isSignIn ? { x: "100%" } : { x: "0%" }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <motion.div
            key={mode}
            className={styles.sliderInner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {isSignIn ? (
              <>
                <h3 className={styles.overlayTitle}>Hey There!</h3>
                <p className={styles.overlayText}>
                  Begin your amazing journey by creating an account with us
                  today.
                </p>
                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={() => setMode("signup")}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <h3 className={styles.overlayTitle}>Welcome Back!</h3>
                <p className={styles.overlayText}>
                  Stay connected by logging in with your credentials and
                  continue your experience.
                </p>
                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={() => setMode("signin")}
                >
                  Sign In
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
