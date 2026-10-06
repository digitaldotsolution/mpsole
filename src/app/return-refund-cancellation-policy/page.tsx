import React from 'react';
import type { Metadata } from 'next';
import PolicyLayout from '@/components/policy/PolicyLayout';

export const metadata: Metadata = {
  title: 'Return, Refund & Cancellation Policy | MP Sole Manufacture',
  description: "Read MP Sole Manufacture's return, refund and cancellation policy for B2B orders, custom-manufactured shoe soles, defects and order cancellations.",
  keywords: ['MP Sole Return Refund Cancellation Policy', 'shoe sole refund policy', 'custom sole cancellation'],
  alternates: {
    canonical: 'https://mpsolemanufacture.com/return-refund-cancellation-policy',
  },
};

const refundSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mpsolemanufacture.com/return-refund-cancellation-policy#webpage",
      "url": "https://mpsolemanufacture.com/return-refund-cancellation-policy",
      "name": "Return, Refund & Cancellation Policy | MP Sole Manufacture",
      "description": "Read MP Sole Manufacture's return, refund and cancellation policy for B2B orders, custom-manufactured shoe soles, defects and order cancellations.",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/return-refund-cancellation-policy#breadcrumb",
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
          "name": "Return, Refund & Cancellation Policy",
          "item": "https://mpsolemanufacture.com/return-refund-cancellation-policy"
        }
      ]
    }
  ]
};

export default function ReturnRefundCancellationPolicyPage() {
  return (
    <PolicyLayout
      title="Return, Refund &amp; Cancellation Policy"
      lastUpdated="October 2, 2026"
      schema={refundSchema}
    >
      <p>
        At MP Sole Manufacture, we manufacture and supply shoe soles primarily for B2B customers. Many of our products may be manufactured according to specific customer requirements, including design, size, material, color, quantity, and other specifications.
      </p>
      <p>
        This Return, Refund &amp; Cancellation Policy explains the conditions applicable to orders placed with MP Sole Manufacture.
      </p>

      <h2>1. General Policy</h2>
      <p>
        We aim to manufacture products according to the specifications confirmed with our customers.
      </p>
      <p>
        Because many B2B and custom manufacturing orders are produced specifically for individual customers, returns, refunds, and cancellations are subject to the conditions outlined below and any specific terms agreed at the time of order.
      </p>

      <h2>2. Custom-Manufactured Products</h2>
      <p>
        Products manufactured specifically according to a customer's approved design, mold, size, material, color, branding, quantity, or other custom requirements are generally not eligible for return or refund simply because the customer changes their mind after production has started.
      </p>
      <p>
        Customers should carefully review and approve all relevant specifications before confirming an order.
      </p>

      <h2>3. Order Cancellation</h2>
      <p>
        Customers should contact MP Sole Manufacture as soon as possible if they wish to cancel an order.
      </p>
      <p>
        An order may be eligible for cancellation if production has not yet started and raw materials or other order-specific costs have not already been committed.
      </p>
      <p>
        Once production has started, cancellation may not be possible. If materials, molds, samples, packaging, labor, or other costs have already been incurred, these costs may be deducted from any amount eligible for refund.
      </p>

      <h2>4. Advance Payments</h2>
      <p>
        Advance payments may be required for certain B2B or custom manufacturing orders.
      </p>
      <p>
        If an order is cancelled before production begins, any refund of the advance payment will depend on costs already incurred specifically for that order.
      </p>
      <p>
        Once custom production has started, advance payments may become non-refundable to the extent they cover materials, labor, tooling, molds, development, or other committed production costs.
      </p>
      <p>
        Any order-specific payment and cancellation terms communicated in an approved quotation or order confirmation will also apply.
      </p>

      <h2>5. Returns</h2>
      <p>Returns may be considered where products:</p>
      <ul>
        <li>Have a verified manufacturing defect</li>
        <li>Are materially different from the confirmed specifications</li>
        <li>Are supplied in an incorrect product, size, or quantity due to an error attributable to MP Sole Manufacture</li>
        <li>Arrive with an issue for which MP Sole Manufacture is responsible under the agreed order terms</li>
      </ul>
      <p>
        A return will not automatically be accepted without review and authorization from our team.
      </p>

      <h2>6. Reporting an Issue</h2>
      <p>
        Customers should inspect products promptly after receiving their order.
      </p>
      <p>
        Any manufacturing defect, incorrect item, shortage, or significant specification issue should be reported to MP Sole Manufacture as soon as reasonably possible after delivery.
      </p>
      <p>When submitting a claim, customers may be required to provide:</p>
      <ul>
        <li>Order or invoice information</li>
        <li>Product details</li>
        <li>Description of the issue</li>
        <li>Clear photographs</li>
        <li>Video evidence where appropriate</li>
        <li>Quantity of affected products</li>
        <li>Packaging information</li>
        <li>Samples where necessary for technical inspection</li>
      </ul>
      <p>This information helps our team evaluate the issue accurately.</p>

      <h2>7. Manufacturing Variations</h2>
      <p>
        Shoe sole manufacturing may involve minor variations between samples and production batches.
      </p>
      <p>Reasonable variations may occur in:</p>
      <ul>
        <li>Color or shade</li>
        <li>Texture</li>
        <li>Finish</li>
        <li>Weight</li>
        <li>Dimensions</li>
        <li>Material appearance</li>
        <li>Pattern positioning</li>
      </ul>
      <p>
        Minor variations that fall within normal manufacturing tolerances and do not materially affect the agreed use or specifications will generally not qualify as defects.
      </p>

      <h2>8. Approved Samples</h2>
      <p>
        Where a sample has been produced and approved before bulk manufacturing, the approved sample or agreed specifications may be used as a reference when evaluating a product claim.
      </p>
      <p>
        Minor differences caused by normal manufacturing processes or material characteristics may still occur.
      </p>

      <h2>9. Incorrect Customer Specifications</h2>
      <p>
        MP Sole Manufacture will not generally provide a refund or replacement where products were manufactured according to specifications approved or supplied by the customer but those specifications were incorrect.
      </p>
      <p>This may include incorrect:</p>
      <ul>
        <li>Measurements</li>
        <li>Sizes</li>
        <li>Designs</li>
        <li>Colors</li>
        <li>Materials</li>
        <li>Quantities</li>
        <li>Branding details</li>
        <li>Mold specifications</li>
      </ul>
      <p>
        Customers are responsible for carefully reviewing their requirements before production approval.
      </p>

      <h2>10. Refunds</h2>
      <p>
        If MP Sole Manufacture approves a refund after reviewing a claim, the amount and method of refund will depend on the circumstances of the order.
      </p>
      <p>Depending on the issue, an appropriate resolution may include:</p>
      <ul>
        <li>Replacement of affected products</li>
        <li>Reproduction of defective products</li>
        <li>Partial refund</li>
        <li>Full refund for eligible affected products</li>
        <li>Another mutually agreed commercial solution</li>
      </ul>
      <p>
        Shipping, tooling, mold, development, or other costs may be handled according to the specific circumstances and agreed order terms.
      </p>

      <h2>11. Replacement of Defective Products</h2>
      <p>
        Where a manufacturing defect attributable to MP Sole Manufacture is verified, we may offer replacement or reproduction of the affected products instead of a monetary refund where appropriate.
      </p>
      <p>The resolution will depend on the nature and extent of the issue.</p>

      <h2>12. Shipping and Return Costs</h2>
      <p>
        Responsibility for return shipping, transportation, or related costs will depend on the reason for the return.
      </p>
      <p>
        Where an approved return results from a verified error attributable to MP Sole Manufacture, applicable transportation arrangements will be discussed with the customer.
      </p>
      <p>
        Customers should not return products without first receiving instructions or authorization from MP Sole Manufacture.
      </p>

      <h2>13. Damage During Transportation</h2>
      <p>
        Where shipping or transportation is handled by an independent logistics provider, claims for damage occurring during transportation may also be subject to the carrier's terms and insurance arrangements.
      </p>
      <p>
        Customers should photograph damaged packaging and products upon receipt and notify the relevant parties promptly.
      </p>

      <h2>14. Non-Returnable Products</h2>
      <p>
        Unless there is a verified manufacturing defect or error attributable to MP Sole Manufacture, the following products may not be eligible for return:
      </p>
      <ul>
        <li>Custom-manufactured products</li>
        <li>Customer-specific designs</li>
        <li>Special colors or materials</li>
        <li>Products manufactured using customer-approved specifications</li>
        <li>Custom branded products</li>
        <li>Products that have been used, modified, processed, or damaged after delivery</li>
        <li>Products returned without authorization</li>
      </ul>

      <h2>15. Changes to an Order</h2>
      <p>Requests to change an order should be made before production begins.</p>
      <p>
        Changes requested after production has started may result in additional costs, revised production schedules, or may not be possible. MP Sole Manufacture will inform the customer where a requested change affects pricing, production, or delivery.
      </p>

      <h2>16. Order-Specific Agreements</h2>
      <p>
        For B2B manufacturing orders, specific terms included in an approved quotation, purchase order, invoice, written agreement, or order confirmation may supplement this Policy.
      </p>
      <p>
        Where specific commercial terms have been mutually agreed for an individual order, those terms will apply to that transaction subject to applicable law.
      </p>

      <h2>17. Policy Updates</h2>
      <p>
        MP Sole Manufacture may update this Return, Refund &amp; Cancellation Policy when necessary to reflect changes in our manufacturing processes, business practices, or applicable requirements.
      </p>
      <p>The latest version will be published on our website.</p>

      <h2>18. Contact Us</h2>
      <p>
        For return, refund, cancellation, or manufacturing-related concerns, please contact us through the contact information available on our website.
      </p>
      <p>
        Please provide your order details and relevant supporting information so our team can review your request.
      </p>
      <p>
        <strong>MP Sole Manufacture</strong><br />
        Shoe Sole Manufacturer<br />
        Pakistan
      </p>
    </PolicyLayout>
  );
}
