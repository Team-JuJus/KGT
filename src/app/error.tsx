"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optional: log to monitoring service
    console.error("App Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#fafafa",
          color: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          ⚠️ Something went wrong
        </h1>

        <p
          style={{
            color: "#555",
            maxWidth: "500px",
            marginBottom: "1.5rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {error.message || "Unknown error occurred."}
        </p>

        <button
          onClick={() => reset()}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#0070f3",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Try Again
        </button>

        {error.digest && (
          <p style={{ color: "#888", fontSize: "0.8rem", marginTop: "2rem" }}>
            Error ID: {error.digest}
          </p>
        )}
      </body>
    </html>
  );
}
