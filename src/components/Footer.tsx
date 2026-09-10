"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Footer() {
  const { openBookingModal } = useBookingModal();
  return (
    <footer className="relative w-full bg-[#F4F7F4] text-[#022342] pt-24 pb-12 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#DCE7DF]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Logo / Emblem */}
        <ScrollReveal delay={100} duration={800} distance={18}>
          <div className="mb-8 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo-color.png"
              alt="Rise Your Health"
              width={220}
              height={82}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </ScrollReveal>

        {/* Large Headline */}
        <ScrollReveal delay={200} duration={800} distance={24}>
          <h2 className="text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.08] tracking-tight text-[#022342] max-w-2xl">
            You deserve to feel like
            <br />
            <span className="font-serif italic text-[#287417]">yourself</span> again.
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={300} duration={800} distance={20}>
          <p className="mt-4 text-center text-[#475569] text-sm sm:text-base md:text-[1.05rem] font-light leading-relaxed max-w-md">
            Book a free discovery call and let&apos;s talk
            <br className="hidden sm:inline" /> about your personal wellness goals.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={400} duration={800} distance={18}>
          <div className="mt-8">
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#287417] hover:bg-[#216113] text-white font-sans text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Begin Your Journey
            </button>
          </div>
        </ScrollReveal>

        {/* Links Navigation Grid */}
        <ScrollReveal delay={250} duration={800} distance={20} className="w-full mt-24 sm:mt-28 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 max-w-3xl self-start md:self-center">
          {/* Column 1: Navigate */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-sans text-sm sm:text-[15px] font-semibold text-[#022342] tracking-tight mb-1">
              Navigate
            </h3>
            <Link
              href="/#home"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#signs"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Signs
            </Link>
            <Link
              href="/#services"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              4 Foundations
            </Link>
            <Link
              href="/#roadmap"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              16-Week Roadmap
            </Link>
            <Link
              href="/#testimonials"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/#faq"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Column 2: Connect */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-sans text-sm sm:text-[15px] font-semibold text-[#022342] tracking-tight mb-1">
              Connect
            </h3>
            <a
              href="mailto:admin@riseyourhealthh.com"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              admin@riseyourhealthh.com
            </a>
            <button
              type="button"
              onClick={openBookingModal}
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors text-left cursor-pointer"
            >
              Book a Call
            </button>
            <a
              href="https://www.instagram.com/riseyourhealthh/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/rise-your-healthh/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-sans text-sm sm:text-[15px] font-semibold text-[#022342] tracking-tight mb-1">
              Legal
            </h3>
            <Link
              href="/privacy-policy"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund-policy"
              className="font-sans text-sm text-[#475569] hover:text-[#287417] transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </ScrollReveal>

        {/* Bottom Copyright & Credit Bar */}
        <div className="w-full mt-20 pt-8 border-t border-[#DCE7DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-sans">
          <div>© 2026 Rise Your Health. All rights reserved.</div>
          <div>Holistic Wellness & Hormone Care</div>
        </div>
      </div>
    </footer>
  );
}
