import React from 'react';
import type { Metadata } from 'next';
import PolicyLayout from '@/components/policy/PolicyLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | MP Sole Manufacture',
  description: 'Read the MP Sole Manufacture Privacy Policy to learn how we collect, use, protect and manage personal information submitted through our website.',
  keywords: ['MP Sole Manufacture Privacy Policy', 'shoe sole privacy policy', 'B2B footwear privacy'],
  alternates: {
    canonical: 'https://mpsolemanufacture.com/privacy-policy',
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mpsolemanufacture.com/privacy-policy#webpage",
      "url": "https://mpsolemanufacture.com/privacy-policy",
      "name": "Privacy Policy | MP Sole Manufacture",
      "description": "Read the MP Sole Manufacture Privacy Policy to learn how we collect, use, protect and manage personal information submitted through our website.",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/privacy-policy#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mpsolemanufacture.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://mpsolemanufacture.com/privacy-policy"
        }
      ]
    }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="October 2, 2026"
      schema={privacySchema}
    >
      <p>
        At MP Sole Manufacture, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or contact us regarding our shoe sole manufacturing products and services.
      </p>
      <p>
        By using the MP Sole Manufacture website, you acknowledge the practices described in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information when you contact us, submit an inquiry, request a B2B quotation, or otherwise communicate with MP Sole Manufacture.
      </p>
      <p>This information may include:</p>
      <ul>
        <li>Full name</li>
        <li>Business or company name</li>
        <li>Email address</li>
        <li>Phone or WhatsApp number</li>
        <li>Country or location</li>
        <li>Product requirements</li>
        <li>Order or quotation details</li>
        <li>Information included in messages or inquiry forms</li>
      </ul>
      <p>
        We only request information that is reasonably necessary to respond to your inquiry or provide our services.
      </p>

      <h2>2. Information Collected Automatically</h2>
      <p>
        When you visit our website, certain technical information may be collected automatically through cookies, analytics tools, server logs, or similar technologies.
      </p>
      <p>This may include:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Referral source</li>
        <li>Date and time of visits</li>
        <li>General website interaction data</li>
      </ul>
      <p>
        This information helps us understand website performance and improve the user experience.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>MP Sole Manufacture may use collected information to:</p>
      <ul>
        <li>Respond to inquiries and quotation requests</li>
        <li>Communicate about our products and manufacturing services</li>
        <li>Process and manage B2B requests</li>
        <li>Understand customer requirements</li>
        <li>Provide customer support</li>
        <li>Improve our website, products, and services</li>
        <li>Analyze website traffic and performance</li>
        <li>Maintain website security and prevent misuse</li>
        <li>Comply with applicable legal requirements</li>
      </ul>
      <p>
        We do not use personal information for purposes unrelated to our business without an appropriate reason or permission where required.
      </p>

      <h2>4. B2B Quote and Contact Forms</h2>
      <p>
        When you submit a B2B quote request or contact form through our website, the information you provide may be used by our team to understand your requirements and contact you regarding products, pricing, quantities, manufacturing specifications, or related services.
      </p>
      <p>
        Submitting an inquiry does not automatically create a purchase agreement or guarantee product availability, pricing, production capacity, or delivery dates.
      </p>

      <h2>5. Cookies and Analytics</h2>
      <p>
        Our website may use cookies and similar technologies to improve functionality, understand visitor activity, measure website performance, and enhance the browsing experience.
      </p>
      <p>
        Cookies may store limited information on your device. Depending on your browser, you may be able to block or delete cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.
      </p>

      <h2>6. How We Share Information</h2>
      <p>
        MP Sole Manufacture does not sell or rent personal information to third parties.
      </p>
      <p>
        We may share limited information with trusted service providers where reasonably necessary to operate our website or business, such as:
      </p>
      <ul>
        <li>Website hosting providers</li>
        <li>Email and communication services</li>
        <li>Analytics providers</li>
        <li>IT and security service providers</li>
        <li>Logistics or business service providers when relevant to an order</li>
      </ul>
      <p>
        These parties may only receive information necessary to perform their respective services. We may also disclose information when required by applicable law, regulation, legal process, or lawful government request.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We take reasonable administrative and technical measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
      </p>
      <p>
        However, no website, internet transmission, or electronic storage system can be guaranteed to be completely secure. Users should therefore take appropriate precautions when sharing information online.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We may retain personal information for as long as reasonably necessary to respond to inquiries, maintain business records, provide services, resolve disputes, comply with legal obligations, or protect legitimate business interests.
      </p>
      <p>
        Information that is no longer required may be deleted or anonymized where appropriate.
      </p>

      <h2>9. Third-Party Websites</h2>
      <p>
        Our website may contain links to third-party websites or services.
      </p>
      <p>
        MP Sole Manufacture is not responsible for the privacy practices, security, or content of third-party websites. We recommend reviewing the privacy policy of any external website before providing personal information.
      </p>

      <h2>10. Your Privacy Choices</h2>
      <p>
        Depending on applicable law and circumstances, you may contact us to request:
      </p>
      <ul>
        <li>Access to personal information you have provided</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of certain personal information</li>
        <li>Withdrawal from certain communications</li>
      </ul>
      <p>
        Some information may need to be retained where required for legitimate business, contractual, security, or legal purposes.
      </p>

      <h2>11. Children's Privacy</h2>
      <p>
        Our website and B2B manufacturing services are not specifically directed toward children. We do not knowingly seek to collect personal information from children through our business inquiry services.
      </p>

      <h2>12. Changes to This Privacy Policy</h2>
      <p>
        MP Sole Manufacture may update this Privacy Policy from time to time to reflect changes to our website, services, technologies, or legal requirements.
      </p>
      <p>
        Any revised version will be published on this page with an updated revision date.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how MP Sole Manufacture handles information, please contact us through the contact details or inquiry form available on our website.
      </p>
      <p>
        <strong>MP Sole Manufacture</strong><br />
        Shoe Sole Manufacturer<br />
        Pakistan
      </p>
    </PolicyLayout>
  );
}
