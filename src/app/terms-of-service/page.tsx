import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rise Your Health — Understanding our terms, conditions, payment, and coaching policies.",
  alternates: {
    canonical: "https://riseyourhealthh.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Rise Your Health",
    description: "Terms and conditions governing the use of Rise Your Health services and website.",
    url: "https://riseyourhealthh.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
            Terms & Conditions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Last Updated: August 24, 2026
          </p>
        </div>

        <div className="space-y-10 text-[#334155] text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <section className="space-y-3">
            <p>
              This website is operated by <strong>Rise Your Health</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Rise Your Health. Rise Your Health offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions, including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>
          </section>

          {/* Section 1: Payment */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              1. Payment
            </h2>
            <p>
              By registering for a consultation, webinar, or any other service provided by Rise Your Health, you agree to pay the stated fee in full before the start of the session or event. Payment can be made securely through the <strong>Razorpay</strong> payment gateway.
            </p>
          </section>

          {/* Section 2: Refunds & Tokens */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              2. Refunds & Booking Tokens
            </h2>
            <p>
              Refunds will only be provided if the session or webinar is cancelled by the organizer. No refunds will be issued if you are unable to attend for any reason. All booking tokens or consultation fees are non-refundable once processed. For further details on our program policies, please refer to our dedicated <Link href="/refund-policy" className="font-medium text-[#287417] hover:underline">Refund Policy</Link>.
            </p>
          </section>

          {/* Section 3: Access */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              3. Access & Technical Requirements
            </h2>
            <p>
              Your registration provides you with access to the live session and any associated materials. You are responsible for ensuring that you have the necessary hardware, software, and stable internet connection to participate in scheduled calls or digital sessions.
            </p>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              4. Intellectual Property
            </h2>
            <p>
              All materials, strategies, workbooks, guides, recipes, and content shared during the consultation, webinar, or on this website are the intellectual property of Rise Your Health and are protected by copyright laws. You are not authorized to reproduce, distribute, record, resell, or use any of the materials without prior written permission from Rise Your Health.
            </p>
          </section>

          {/* Section 5: Medical Disclaimer */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              5. Health & Medical Disclaimer
            </h2>
            <div className="p-4 rounded-2xl bg-[#EAF2EC] border border-[#DCE7DF] text-[#022342]">
              <p className="mb-2">
                <strong>Important Notice:</strong> The organizer makes no guarantees regarding the accuracy, completeness, or individual outcomes resulting from the application of the information provided during consultations, webinars, or programs. The information shared is for educational, lifestyle, and holistic wellness purposes only and is not a substitute for professional medical advice, diagnosis, or prescription.
              </p>
              <p>
                All services focus on evidence-informed, natural, and lifestyle-based approaches and do not replace licensed medical diagnosis or medical treatment. Always consult with your primary healthcare physician or specialist before starting any new diet, supplement, or exercise regimen.
              </p>
            </div>
          </section>

          {/* Section 6: Termination */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              6. Termination & Conduct
            </h2>
            <p>
              Rise Your Health reserves the right to terminate your registration and deny access to services if you violate any of these terms and conditions or engage in disruptive, abusive, or inappropriate behavior during any session or communication channel.
            </p>
          </section>

          {/* Section 7: Privacy */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              7. Privacy & Data Handling
            </h2>
            <p>
              We collect and process your personal data solely for the purposes of organizing the consultation, webinar, or wellness program and providing you with relevant support. All personal health intake notes and contact information are handled strictly in accordance with applicable data protection laws and our <Link href="/privacy-policy" className="font-medium text-[#287417] hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 8: Razorpay Policies */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              8. Razorpay Payment Gateway Policies
            </h2>
            <p>
              By using the Razorpay payment gateway on our platform, you agree to comply with Razorpay&apos;s terms and conditions and privacy policy. You acknowledge that payment processing services are provided by Razorpay, and any technical transaction disputes must be resolved through Razorpay&apos;s dispute resolution process.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              9. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in the jurisdiction where Rise Your Health operates.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#022342]">
              10. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms of Service, consultations, or agreements, please contact us at{" "}
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
