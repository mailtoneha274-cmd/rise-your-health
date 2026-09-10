import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://riseyourhealthh.com/#organization",
    name: "Rise Your Health",
    alternateName: "The PCOS Rebalance Protocol",
    url: "https://riseyourhealthh.com",
    logo: "https://riseyourhealthh.com/logo-color.png",
    image: "https://riseyourhealthh.com/logo-color.png",
    description:
      "Rise Your Health provides The PCOS Rebalance Protocol — a structured 4-month clinical and lifestyle protocol designed for sustainable hormone balance, menstrual cycle regularity, and metabolic health.",
    email: "admin@riseyourhealthh.com",
    priceRange: "$$",
    medicalSpecialty: [
      "Endocrinology",
      "Women's Health",
      "Holistic Health",
      "Dietetics and Clinical Nutrition",
    ],
    sameAs: [
      "https://www.instagram.com/riseyourhealthh/?utm_source=ig_web_button_share_sheet",
      "https://www.linkedin.com/company/rise-your-healthh/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "admin@riseyourhealthh.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://riseyourhealthh.com/#website",
    url: "https://riseyourhealthh.com",
    name: "Rise Your Health",
    description:
      "16 Weeks to Better Hormonal & Metabolic Health through The PCOS Rebalance Protocol.",
    publisher: {
      "@id": "https://riseyourhealthh.com/#organization",
    },
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://riseyourhealthh.com/#service",
    name: "The PCOS Rebalance Protocol (4-Month 1:1 Clinical Program)",
    serviceType: "PCOS & Hormone Health Coaching",
    provider: {
      "@id": "https://riseyourhealthh.com/#organization",
    },
    description:
      "A 16-week multidisciplinary program combining clinical health baseline testing, integrative metabolic nutrition, progressive movement, and psychologist-led mental wellbeing support to resolve PCOS symptoms naturally.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "The 4 Care Foundations",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1. Clinical Assessment & Health Baseline",
            description: "25+ marker intake, medical history, baseline scorecard, and lab reviews.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "2. Integrative Metabolic Nutrition",
            description: "Cycle-synced, pocket-kitchen-friendly whole foods focused on blood sugar balance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3. Progressive Movement & Exercise",
            description: "Strength training, daily walking targets, and insulin-sensitizing mobility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "4. Sleep, Stress & Mental Wellbeing",
            description: "Circadian rhythm alignment, cortisol regulation, and psychologist-led emotional support.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you guarantee PCOS reversal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% money back guarantee in case you follow the protocol diligently and still don’t see any results.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to take medicine or artificial pills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our approach is lifestyle-based, so you won’t rely on pills for weight management or hormonal balance. If you are already prescribed medication by your doctor, our protocol works safely alongside your medical care.",
        },
      },
      {
        "@type": "Question",
        name: "What is PCOS/PCOD and how are they different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PCOD is generally a milder condition where the ovaries release immature eggs, often closely linked to lifestyle and diet. PCOS is a more complex endocrine and metabolic disorder involving elevated androgens, insulin resistance, and cycle irregularities. Both respond exceptionally well to our structured clinical lifestyle interventions.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from just \"dieting\" or restrictive plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We don't focus on restriction, calorie counting, or crash diets. The PCOS Rebalance Protocol is built around pocket-kitchen-friendly, cycle-synced nutrition and sustainable habit shifts that address underlying metabolic drivers like insulin resistance, chronic inflammation, and elevated cortisol.",
        },
      },
      {
        "@type": "Question",
        name: "What if I’ve tried other programs and failed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on underlying metabolic mechanisms, not just surface symptoms. Our science-backed framework which is clinically approved, ensures lasting, real-world results tailored specifically to your unique metabolic profile.",
        },
      },
      {
        "@type": "Question",
        name: "How soon can I expect to see tangible results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many women notice improvements in daily energy, digestion, and skin within 2 to 4 weeks. Menstrual cycle regularity, waist reduction, and metabolic shifts typically show significant measurable progress by months 2 and 3. Consistency matters most.",
        },
      },
      {
        "@type": "Question",
        name: "Is this suitable if I'm already on medication (birth control, metformin, thyroid)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many of our members join while taking prescribed medications. Our lifestyle changes support your body's natural insulin sensitivity and metabolic health harmoniously alongside your physician's guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Will this program help with sustainable weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Definitely. For many women with PCOS/PCOD, stubborn weight and cravings are directly driven by underlying insulin resistance. By stabilizing blood sugar and cortisol levels naturally, healthy weight loss occurs without starvation or exhausting cardio.",
        },
      },
      {
        "@type": "Question",
        name: "Can this program help me get pregnant / support fertility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Restoring ovulatory cycle regularity and reducing chronic inflammation creates an optimal environment for reproductive health. While we are a lifestyle program and not a fertility clinic, balanced hormonal health significantly enhances conception readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a formal diagnosis to join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No formal diagnosis is required. Whether you have an existing diagnosis or are experiencing common symptoms like irregular periods, stubborn belly fat, acne, hair thinning, or chronic fatigue, you can start your reset right away.",
        },
      },
      {
        "@type": "Question",
        name: "Who is on my Care Squad and managing my protocol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every woman is supported by our dedicated Care Squad: our Clinical/Medical team for oversight and lab reviews, a dedicated Nutritionist for whole-food cycle syncing, a Lifestyle Coach for movement and habits, and a Psychologist for mental wellbeing and stress management.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the program structured across 4 full months (16 weeks)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hormone and metabolic pathways require consistent biological time to regulate. Month 1: Stabilize foundations, Month 2: Build metabolic resilience, Month 3: Optimize lingering bottlenecks, and Month 4: Consolidate habits with a personal maintenance plan so you build permanent self-reliance.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after Month 4? Will I be dependent on a coach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our core mission in Month 4 is teaching you self-sufficiency. You receive a personalized lifetime PCOS Maintenance Blueprint containing your non-negotiables, early warning signs, and recovery protocols for stress or travel so you thrive independently for life.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
