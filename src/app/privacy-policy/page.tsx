import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rise Your Health — Learn how we collect, protect, and handle your information.",
  alternates: {
    canonical: "https://riseyourhealthh.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Rise Your Health",
    description: "Learn how Rise Your Health safeguards your personal and health consultation data.",
    url: "https://riseyourhealthh.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F4] text-[#022342] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-32 sm:py-36 md:py-40">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#287417] hover:text-[#216113] transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-[#287417] mb-2">
            Healthier Today. Stronger Tomorrow.
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#022342]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Last Updated: August 24, 2026
          </p>
        </div>

        <div className="space-y-10 text-[#334155] text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              1. Overview & Commitment
            </h2>
            <p>
              At <strong>Rise Your Health</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we deeply respect your personal privacy. We will collect and process your personal data solely for the purposes of organizing your consultation, webinar, or 4-Month PCOS Rebalance Program and providing you with personalized, relevant care.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#475569]">
              <li>Contact details such as your full name, email address, and WhatsApp/phone number.</li>
              <li>Health intake assessments, symptom timelines, and lifestyle background information you voluntarily share during discovery consultations.</li>
              <li>Transaction identifiers and billing receipts securely managed via payment gateway partners.</li>
              <li>Technical website analytics to ensure optimal browsing performance and security.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used strictly to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#475569]">
              <li>Deliver tailored holistic wellness, nutrition, and lifestyle protocols.</li>
              <li>Coordinate 1:1 discovery consultations and schedule live care squad sessions.</li>
              <li>Transmit electronic receipts, appointment reminders, and program workbooks.</li>
              <li>Maintain platform integrity, prevent unauthorized access, and fulfill legal compliance.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              4. Payment Processing (Razorpay)
            </h2>
            <p>
              All online payments on our platform are processed through <strong>Razorpay</strong>. We do not store or process your sensitive credit card numbers or banking PINs on our servers. By making a payment, you acknowledge that payment data is handled in compliance with Razorpay&apos;s privacy policy and security standards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              5. Confidentiality & Non-Disclosure
            </h2>
            <p>
              We maintain strict confidentiality regarding all client discussions, health intakes, and private coaching notes. We implement standard encryption and access safeguards. We never sell, rent, or trade your personal or health data to third-party advertisers.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              6. Your Rights & Contact Information
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data at any time. For questions regarding our privacy practices or to exercise your rights, please reach out to us directly at{" "}
              <a
                href="mailto:admin@riseyourhealthh.com"
                className="font-medium text-[#287417] hover:underline"
              >
                admin@riseyourhealthh.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
