import React from 'react';
import type { Metadata } from 'next';
import PolicyLayout from '@/components/policy/PolicyLayout';

export const metadata: Metadata = {
  title: 'Disclaimer | MP Sole Manufacture',
  description: 'Read the MP Sole Manufacture Disclaimer regarding product information, specifications & ETC manufacturing variations and website content.',
  keywords: ['MP Sole Manufacture Disclaimer', 'sole manufacturing disclaimer', 'footwear specifications disclaimer'],
  alternates: {
    canonical: 'https://mpsolemanufacture.com/disclaimer',
  },
};

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mpsolemanufacture.com/disclaimer#webpage",
      "url": "https://mpsolemanufacture.com/disclaimer",
      "name": "Disclaimer | MP Sole Manufacture",
      "description": "Read the MP Sole Manufacture Disclaimer regarding product information, specifications & ETC manufacturing variations and website content.",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/disclaimer#breadcrumb",
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
          "name": "Disclaimer",
          "item": "https://mpsolemanufacture.com/disclaimer"
        }
      ]
    }
  ]
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Disclaimer"
      lastUpdated="October 2, 2026"
      schema={disclaimerSchema}
    >
      <p>
        The information provided on the MP Sole Manufacture website is for general informational and business purposes. While we make reasonable efforts to keep our website accurate and up to date, we do not guarantee that all information will always be complete, current, or error-free.
      </p>
      <p>
        By using this website, you acknowledge and agree to the terms outlined in this Disclaimer.
      </p>

      <h2>1. General Information</h2>
      <p>
        The content available on this website is intended to provide general information about MP Sole Manufacture, our shoe sole products, manufacturing capabilities, and B2B services.
      </p>
      <p>
        Website content should not be considered a final commercial offer or contractual commitment unless specifically confirmed by MP Sole Manufacture.
      </p>

      <h2>2. Product Information</h2>
      <p>
        We aim to present accurate information about our products. However, product details may change due to manufacturing requirements, raw material availability, design improvements, or customer specifications.
      </p>
      <p>Information displayed on the website may include:</p>
      <ul>
        <li>Product types</li>
        <li>Materials</li>
        <li>Designs</li>
        <li>Sizes</li>
        <li>Colors</li>
        <li>Patterns</li>
        <li>Textures</li>
        <li>Manufacturing specifications</li>
        <li>Product applications</li>
      </ul>
      <p>
        Customers should confirm final specifications with our team before placing an order.
      </p>

      <h2>3. Product Images and Colors</h2>
      <p>
        Product photographs and images displayed on our website are provided for reference purposes.
      </p>
      <p>
        Actual product colors, textures, finishes, patterns, dimensions, and appearance may vary due to lighting, photography, screen settings, raw materials, production batches, and manufacturing processes.
      </p>
      <p>
        We recommend confirming important product requirements before production.
      </p>

      <h2>4. Manufacturing Variations</h2>
      <p>
        Shoe sole manufacturing may involve reasonable variations between production batches.
      </p>
      <p>
        Minor differences in shade, texture, dimensions, weight, finish, or other characteristics may occur depending on materials and manufacturing conditions.
      </p>
      <p>
        Such reasonable production variations do not necessarily indicate a manufacturing defect.
      </p>

      <h2>5. Custom Manufacturing</h2>
      <p>
        Custom-made products are manufactured according to specifications provided or approved by the customer.
      </p>
      <p>
        Customers are responsible for reviewing and confirming designs, measurements, materials, colors, samples, quantities, and other specifications before production begins.
      </p>
      <p>
        MP Sole Manufacture is not responsible for issues resulting from incorrect or incomplete specifications supplied or approved by the customer.
      </p>

      <h2>6. B2B Quotations</h2>
      <p>
        Any pricing or quotation provided through the website, email, phone, WhatsApp, or other communication channels may be subject to confirmation.
      </p>
      <p>Final pricing may depend on factors such as:</p>
      <ul>
        <li>Order quantity</li>
        <li>Material</li>
        <li>Design</li>
        <li>Size</li>
        <li>Color</li>
        <li>Customization</li>
        <li>Packaging</li>
        <li>Raw material costs</li>
        <li>Production requirements</li>
        <li>Delivery destination</li>
      </ul>
      <p>
        Submitting a quotation request does not create a confirmed order or contractual obligation.
      </p>

      <h2>7. Availability and Production Capacity</h2>
      <p>
        Product availability and production capacity may change depending on current orders, raw material availability, machinery, production schedules, and other operational factors.
      </p>
      <p>
        MP Sole Manufacture does not guarantee that every product displayed on the website will always be immediately available for production.
      </p>

      <h2>8. Delivery Estimates</h2>
      <p>
        Any production or delivery timeline provided before final order confirmation should be considered an estimate unless specifically agreed otherwise.
      </p>
      <p>
        Delays may occur because of production conditions, material availability, logistics providers, transportation issues, government restrictions, weather conditions, or circumstances outside our reasonable control.
      </p>

      <h2>9. Website Availability</h2>
      <p>
        We aim to keep our website accessible and functioning properly. However, we do not guarantee uninterrupted or error-free access.
      </p>
      <p>
        The website may occasionally become unavailable because of maintenance, technical problems, hosting issues, security updates, or circumstances outside our control.
      </p>

      <h2>10. External Links</h2>
      <p>
        Our website may contain links to third-party websites or services for additional information or convenience.
      </p>
      <p>
        MP Sole Manufacture does not control and is not responsible for the content, availability, security, accuracy, or privacy practices of third-party websites.
      </p>
      <p>
        Visiting external websites is at the user's discretion.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the extent permitted by applicable law, MP Sole Manufacture will not be responsible for indirect, incidental, consequential, or business losses arising solely from reliance on general information published on this website.
      </p>
      <p>
        Terms applicable to confirmed manufacturing orders will be governed by the specific quotation, order confirmation, agreed commercial terms, and applicable law.
      </p>

      <h2>12. Intellectual Property</h2>
      <p>
        Unless otherwise stated, the original content, product photographs, graphics, branding, designs, and other materials published on this website belong to MP Sole Manufacture or are used with appropriate authorization.
      </p>
      <p>
        Unauthorized reproduction, redistribution, or commercial use of website materials is prohibited.
      </p>

      <h2>13. Changes to This Disclaimer</h2>
      <p>
        MP Sole Manufacture may modify or update this Disclaimer whenever necessary.
      </p>
      <p>
        Changes will become effective when the revised Disclaimer is published on this website.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have questions regarding our products, manufacturing specifications, quotations, or this Disclaimer, please contact MP Sole Manufacture through the contact information available on our website.
      </p>
      <p>
        <strong>MP Sole Manufacture</strong><br />
        Shoe Sole Manufacturer<br />
        Pakistan
      </p>
    </PolicyLayout>
  );
}
