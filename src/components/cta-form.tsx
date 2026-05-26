"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./icons";

export function CtaForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || state === "loading") return;

    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <div style={{ fontSize: 17, fontWeight: 500, color: "var(--positive)" }}>
          You're on the list.
        </div>
        <div style={{ fontSize: 13.5, color: "var(--ink-3)", marginTop: 8 }}>
          We'll reach out when your access is ready.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center", background: "var(--surface)", borderRadius: "var(--r-pill)", border: "1px solid var(--line)", padding: "5px 5px 5px 22px", maxWidth: 440 }}>
        <input
          placeholder="you@yourcompany.com"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          required
          style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14.5 }}
        />
        <button className="btn btn-primary" type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending..." : "Request access"}
          {state !== "loading" && <Arrow size={14} />}
        </button>
      </div>
      {state === "error" && (
        <div style={{ fontSize: 12.5, color: "var(--accent)", marginTop: 10 }}>
          Something went wrong. Try again.
        </div>
      )}
    </form>
  );
}
