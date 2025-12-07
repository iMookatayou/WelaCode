"use client";

import { useState } from "react";

const COOKIE_NAME = "cookie_consent";

type ConsentStatus = "accepted" | "rejected";

export default function CookieConsent() {
  const [open, setOpen] = useState(() => {
    if (typeof document === "undefined") return false;

    const cookieString = document.cookie || "";
    const hasConsent = cookieString.includes(`${COOKIE_NAME}=`);
    return !hasConsent;
  });

  const updateConsent = (status: ConsentStatus) => {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_NAME}=${status}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 16,
        zIndex: 2147483647,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#F8FAFC", // slate-50
          borderRadius: 16,
          padding: 18,
          border: "1px solid #CBD5E1", // slate-300
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          {/* Blueberry Cookie Icon */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              background: "#E0E7FF", // indigo-100
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "#4338CA",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: 28, height: 28 }}
              aria-hidden="true"
            >
              <path
                d="M12 2a8.9 8.9 0 0 0-6.36 2.64A9 9 0 1 0 20 13.5a1 1 0 0 0-1.24-1A2.5 2.5 0 0 1 15.5 10 2.5 2.5 0 0 1 13 7.5 2.5 2.5 0 0 1 10.5 5 2.5 2.5 0 0 1 11.5 2H12Z"
                fill="#6366F1" // indigo-500
              />
              <circle cx="9" cy="13" r="1" fill="#4338CA" />
              <circle cx="15" cy="15.5" r="1.1" fill="#4338CA" />
              <circle cx="12.5" cy="9.5" r="0.9" fill="#4338CA" />
            </svg>
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#1E293B", // slate-800
                margin: 0,
              }}
            >
              We use cookies
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#475569", // slate-600
                marginTop: 4,
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              We use cookies to improve your experience and analyze how you use
              our website. By clicking{" "}
              <span style={{ fontWeight: 600, color: "#1E293B" }}>
                “Accept all”
              </span>
              , you agree to our cookie policy.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          {/* Reject */}
          <button
            onClick={() => updateConsent("rejected")}
            style={{
              fontSize: 13,
              padding: "7px 16px",
              borderRadius: 8,
              border: "1px solid #CBD5E1",
              background: "#FFFFFF",
              color: "#475569", // slate-600
              cursor: "pointer",
            }}
          >
            Reject
          </button>

          {/* Accept */}
          <button
            onClick={() => updateConsent("accepted")}
            style={{
              fontSize: 13,
              padding: "7px 18px",
              borderRadius: 8,
              border: "none",
              background: "#334155", // slate-700
              color: "#F1F5F9", // slate-100
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
