import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund Policy",
  description: "Refund and cancellation policy for Rise Your Health consultations, webinars, and programs.",
  alternates: {
    canonical: "https://riseyourhealthh.com/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Rise Your Health",
    description: "Refund policy, session cancellation, and payment terms for Rise Your Health.",
    url: "https://riseyourhealthh.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
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
            Rise Your Health · Cancellation & Refunds
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#022342]">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Last Updated: August 24, 2026
          </p>
        </div>

        <div className="space-y-10 text-[#334155] text-sm sm:text-base leading-relaxed">
          {/* Section 1: Payment & Registration */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              1. Payment & Registration
            </h2>
            <p>
              By registering for a consultation, webinar, or 4-Month PCOS Rebalance Program provided by Rise Your Health, you agree to pay the stated fee in full before the start of the session or program kickoff. All online payments are securely processed through the <strong>Razorpay</strong> payment gateway.
            </p>
          </section>

          {/* Section 2: Session & Webinar Refunds */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              2. Session & Webinar Cancellations
            </h2>
            <p>
              Refunds will only be provided if the consultation or webinar is cancelled by the organizer (Rise Your Health). No refunds will be issued if you are unable to attend a scheduled session for personal reasons. All booking tokens and consultation seat reservations are non-refundable.
            </p>
          </section>

          {/* Section 3: Lifetime Plan Structure */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              3. Lifetime Plan Structure
            </h2>
            <p>
              Our flagship program works on a single structured payment module where you will never have to renew the same plan in your life once you complete your 4-month enrollment and receive your personalized lifetime Maintenance Blueprint.
            </p>
          </section>

          {/* Section 4: Intellectual Property & Program Terms */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              4. Intellectual Property & Non-Tangible Services
            </h2>
            <p>
              The personalized consulting, diagnostic evaluation, meal plans, habit trackers, and care squad support provided by Rise Your Health represent proprietary, non-tangible intellectual property. Once clinical onboarding and evaluation have begun, the work and customized strategies are permanently delivered to you and cannot be returned.
            </p>
          </section>

          {/* Section 5: Receipts & Invoices */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              5. Receipts & Acknowledgments
            </h2>
            <p>
              Upon successful transaction via our payment gateway (Razorpay), an automated electronic receipt will be generated and sent to your registered email address. You may download or screenshot this receipt for your records. This online receipt serves as complete and sufficient legal acknowledgment of payment.
            </p>
          </section>

          {/* Section 6: Instalments & Service Continuity */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              6. Instalments & Outstanding Balances
            </h2>
            <p>
              In the event that an instalment plan is arranged and an instalment payment is not received by the due date, ongoing coaching, consultations, and care squad access will be paused immediately. In the event of unresolved payment defaults, Rise Your Health reserves the right to pursue appropriate measures to recover outstanding balances in accordance with applicable laws.
            </p>
          </section>

          {/* Section 7: Contact Information */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              7. Contact & Support
            </h2>
            <p>
              If you have any questions or require assistance regarding your payment, receipt, or scheduling, please contact our billing desk at{" "}
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
