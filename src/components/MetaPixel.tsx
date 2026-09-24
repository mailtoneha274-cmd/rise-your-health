"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq?: Window["fbq"];
  }
}

export default function MetaPixel() {
  useEffect(() => {
    // Prevent duplicate Pixel initialization
    if (window.fbq && (window.fbq as any).__metaPixelInitialized) {
      return;
    }

    const f = window;
    const b = document;
    const e = "script";
    const v = "https://connect.facebook.net/en_US/fbevents.js";

    if (!f.fbq) {
      const fbq = (...args: any[]) => {
        if ((fbq as any).callMethod) {
          (fbq as any).callMethod.apply(fbq, args);
        } else {
          (fbq as any).queue.push(args);
        }
      };

      (fbq as any).push = fbq;
      (fbq as any).loaded = true;
      (fbq as any).version = "2.0";
      (fbq as any).queue = [];
      (fbq as any).__metaPixelInitialized = true;

      f.fbq = fbq;
      f._fbq = fbq;

      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;

      const s = b.getElementsByTagName(e)[0];

      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      } else {
        b.head.appendChild(t);
      }
    }

    window.fbq("init", "1648413880066435");
    window.fbq("track", "PageView");
  }, []);

  return null;
}
