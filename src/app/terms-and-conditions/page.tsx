import React from 'react';
import type { Metadata } from 'next';
import PolicyLayout from '@/components/policy/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MP Sole Manufacture',
  description: 'Read MP Sole Manufacture Terms & Conditions covering website use, B2B quotations, custom sole manufacturing, orders, payments and delivery terms.',
  keywords: ['MP Sole Manufacture Terms & Conditions', 'shoe sole terms', 'B2B manufacturing terms'],
  alternates: {
    canonical: 'https://mpsolemanufacture.com/terms-and-conditions',
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mpsolemanufacture.com/terms-and-conditions#webpage",
      "url": "https://mpsolemanufacture.com/terms-and-conditions",
      "name": "Terms & Conditions | MP Sole Manufacture",
      "description": "Read MP Sole Manufacture Terms & Conditions covering website use, B2B quotations, custom sole manufacturing, orders, payments and delivery terms.",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/terms-and-conditions#breadcrumb",
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
          "name": "Terms & Conditions",
          "item": "https://mpsolemanufacture.com/terms-and-conditions"
        }
      ]
    }
  ]
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="Terms &amp; Conditions"
      lastUpdated="October 2, 2026"
      schema={termsSchema}
    >
      <p>
        Welcome to MP Sole Manufacture. These Terms &amp; Conditions govern your use of our website and your interactions with us regarding shoe sole manufacturing, product inquiries, quotations, samples, and B2B orders.
      </p>
      <p>
        By accessing our website, submitting an inquiry, or requesting a quotation, you agree to these Terms &amp; Conditions.
      </p>

      <h2>1. About MP Sole Manufacture</h2>
      <p>
        MP Sole Manufacture is a shoe sole manufacturing business providing various types of soles and related manufacturing solutions for businesses, footwear brands, wholesalers, retailers, and other commercial customers.
      </p>
      <p>
        Product availability, specifications, minimum quantities, pricing, production capacity, and delivery schedules may vary depending on customer requirements.
      </p>

      <h2>2. Website Use</h2>
      <p>You may use this website for legitimate purposes, including:</p>
      <ul>
        <li>Viewing our products and manufacturing capabilities</li>
        <li>Learning about our business</li>
        <li>Requesting product information</li>
        <li>Submitting B2B inquiries</li>
        <li>Requesting quotations</li>
        <li>Contacting our team</li>
      </ul>
      <p>
        You must not misuse the website, attempt unauthorized access, introduce malicious software, interfere with website functionality, or use website content unlawfully.
      </p>

      <h2>3. Product Information</h2>
      <p>
        We aim to provide accurate information about our shoe soles and manufacturing services.
      </p>
      <p>
        However, product images, colors, dimensions, materials, patterns, textures, specifications, and other details displayed on the website are for general reference and may vary from the final manufactured product.
      </p>
      <p>
        Customers should confirm required specifications before placing an order.
      </p>

      <h2>4. B2B Quotations</h2>
      <p>Quotations provided by MP Sole Manufacture may depend on factors including:</p>
      <ul>
        <li>Product type</li>
        <li>Material</li>
        <li>Design</li>
        <li>Size</li>
        <li>Quantity</li>
        <li>Color</li>
        <li>Customization requirements</li>
        <li>Packaging</li>
        <li>Production requirements</li>
        <li>Delivery destination</li>
        <li>Current material and production costs</li>
      </ul>
      <p>
        Submitting a quotation request through our website does not create a binding order. A quotation is subject to confirmation by MP Sole Manufacture and may have a limited validity period.
      </p>

      <h2>5. Minimum Order Quantity</h2>
      <p>
        Certain products or custom manufacturing services may require a Minimum Order Quantity (MOQ).
      </p>
      <p>
        The applicable MOQ will be communicated during the quotation or order confirmation process and may vary depending on the product, material, design, or customization requested.
      </p>

      <h2>6. Custom Manufacturing</h2>
      <p>
        For customized shoe soles, customers are responsible for providing accurate requirements, measurements, designs, samples, specifications, colors, and other necessary information.
      </p>
      <p>
        Production may begin only after the required specifications and commercial terms have been confirmed. Once custom production has started, changes or cancellations may not be possible or may involve additional charges.
      </p>

      <h2>7. Samples and Product Variations</h2>
      <p>
        Samples may be provided or produced where agreed between MP Sole Manufacture and the customer.
      </p>
      <p>
        Minor differences may occur between samples, website images, and mass-produced products due to manufacturing processes, materials, lighting, screen displays, production batches, or other technical factors. Reasonable manufacturing variations should not automatically be considered defects.
      </p>

      <h2>8. Orders and Confirmation</h2>
      <p>
        An inquiry, WhatsApp conversation, website form submission, or quotation request does not by itself constitute a confirmed order.
      </p>
      <p>
        An order will be considered confirmed only after the required specifications, quantity, price, payment terms, and other relevant conditions have been agreed upon by MP Sole Manufacture and the customer.
      </p>

      <h2>9. Pricing</h2>
      <p>
        Product prices may vary according to materials, quantities, customization, production requirements, market conditions, and other commercial factors.
      </p>
      <p>
        Prices displayed or discussed during preliminary inquiries may change until an order is formally confirmed. Any applicable taxes, transportation, freight, customs duties, or other charges will be handled according to the agreed quotation or order terms.
      </p>

      <h2>10. Payments</h2>
      <p>
        Payment terms will be communicated during the quotation and order confirmation process.
      </p>
      <p>
        Depending on the order, MP Sole Manufacture may require an advance payment or other agreed payment arrangement before beginning production. Customers are responsible for making payments according to the agreed schedule.
      </p>

      <h2>11. Production Time</h2>
      <p>
        Production timelines are estimates unless specifically agreed otherwise in writing. Production time may depend on:
      </p>
      <ul>
        <li>Order quantity</li>
        <li>Product specifications</li>
        <li>Raw material availability</li>
        <li>Customization requirements</li>
        <li>Production workload</li>
        <li>Customer approval</li>
        <li>Payment confirmation</li>
      </ul>
      <p>
        Unexpected manufacturing, supply chain, transportation, or other circumstances may affect estimated completion dates.
      </p>

      <h2>12. Shipping and Delivery</h2>
      <p>
        Shipping and delivery arrangements will depend on the customer's location and the terms agreed for the order.
      </p>
      <p>
        Estimated delivery dates are not guaranteed unless specifically agreed otherwise. MP Sole Manufacture will make reasonable efforts to fulfill orders according to agreed schedules but cannot guarantee delays caused by courier companies, transport providers, customs authorities, weather conditions, supply disruptions, or circumstances outside our reasonable control.
      </p>

      <h2>13. Inspection and Claims</h2>
      <p>
        Customers should inspect products promptly after receiving their order.
      </p>
      <p>
        If there is a manufacturing issue, incorrect product, shortage, or significant discrepancy from the confirmed specifications, the customer should contact MP Sole Manufacture within the applicable claim period communicated for the order. Supporting photographs, videos, order information, or samples may be required to review a claim.
      </p>

      <h2>14. Returns and Refunds</h2>
      <p>
        Returns, replacements, cancellations, and refunds are subject to the nature of the order and our applicable Return &amp; Refund Policy.
      </p>
      <p>
        Custom-made or specially manufactured products may not be eligible for return or refund unless there is a verified manufacturing defect or another arrangement has been agreed.
      </p>

      <h2>15. Intellectual Property</h2>
      <p>
        Unless otherwise stated, website content including text, graphics, branding, logos, product photographs, layouts, and other original materials belongs to MP Sole Manufacture or is used with appropriate authorization.
      </p>
      <p>
        Website content may not be copied, reproduced, redistributed, or commercially exploited without permission.
      </p>

      <h2>16. Customer Designs and Materials</h2>
      <p>
        Customers submitting designs, trademarks, logos, molds, samples, specifications, or other materials confirm that they have the necessary rights or authorization to use those materials.
      </p>
      <p>
        MP Sole Manufacture is not responsible for disputes resulting from unauthorized materials supplied by a customer.
      </p>

      <h2>17. Limitation of Liability</h2>
      <p>
        To the extent permitted by applicable law, MP Sole Manufacture will not be responsible for indirect, incidental, or consequential losses resulting from website use, business interruption, third-party services, or circumstances outside our reasonable control.
      </p>
      <p>
        Any responsibility relating to a specific manufacturing order will be determined according to the agreed order terms and applicable law.
      </p>

      <h2>18. Third-Party Services</h2>
      <p>
        Our website or business operations may involve third-party services such as hosting providers, communication platforms, payment services, logistics companies, or external websites.
      </p>
      <p>
        MP Sole Manufacture is not responsible for the independent actions, availability, policies, or services of third parties.
      </p>

      <h2>19. Force Majeure</h2>
      <p>
        MP Sole Manufacture will not be responsible for delays or failure to perform obligations caused by circumstances reasonably outside our control, including natural disasters, transportation disruptions, government restrictions, strikes, shortages, power failures, supply chain disruptions, or similar events.
      </p>

      <h2>20. Changes to These Terms</h2>
      <p>
        MP Sole Manufacture may update these Terms &amp; Conditions when necessary. Any revised Terms &amp; Conditions will become effective when published on this website unless otherwise stated.
      </p>

      <h2>21. Governing Law</h2>
      <p>
        These Terms &amp; Conditions will be interpreted according to the applicable laws of Pakistan, subject to any mandatory legal requirements that may apply to a particular transaction.
      </p>

      <h2>22. Contact Us</h2>
      <p>
        If you have questions regarding these Terms &amp; Conditions, quotations, products, or manufacturing orders, please contact us through the contact information available on our website.
      </p>
      <p>
        <strong>MP Sole Manufacture</strong><br />
        Shoe Sole Manufacturer<br />
        Pakistan
      </p>
    </PolicyLayout>
  );
}
