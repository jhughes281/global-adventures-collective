// From Global_Adventures_Collective_Website_Policies.docx (draft, Oct 23 2026).
// Bracketed fields the owner has not decided yet (processing days, return window, refund
// timeline, fee rules) are worded to defer to checkout/return instructions instead of
// inventing numbers. Fill them in here once the store's terms are set.

import { SITE } from '../lib/site'

const EMAIL = SITE.email

export type Policy = {
  id: string
  title: string
  intro: string
  sections: { h: string; p: string }[]
}

export const POLICY_STATUS =
  'Our online store has not opened yet. These policies describe how orders will be handled once it does; exact processing times, return windows and refund timelines will be confirmed here before we accept orders.'

export const POLICY_UPDATED = 'October 23, 2026'

export const POLICY_LIST: Policy[] = [
  {
    id: 'shipping',
    title: 'Shipping Policy',
    intro:
      'Thank you for shopping with Global Adventures Collective. We look forward to delivering our children’s books, activity books, creative collections, and travel-inspired products to customers in the United States and around the world.',
    sections: [
      {
        h: 'Shipping destinations',
        p: 'We offer shipping within the United States and internationally to eligible destinations. Available countries and delivery options will be displayed during checkout. Certain products or destinations may be restricted due to carrier rules, local regulations, or other logistical limitations.',
      },
      {
        h: 'Order processing',
        p: 'Orders are prepared for shipment within the processing time shown at checkout, counted in business days after payment confirmation and excluding weekends and holidays. Personalized, preorder, or made-to-order items may require additional time, which will be stated on the relevant product page. Processing time is separate from transit time.',
      },
      {
        h: 'Shipping rates and delivery estimates',
        p: 'Shipping costs are calculated or displayed at checkout based on destination, package details, and selected service. Estimated delivery windows are provided when available but are not guaranteed; customs clearance, carrier disruptions, weather, and holidays can affect transit times.',
      },
      {
        h: 'International orders, duties, and taxes',
        p: 'International shipments may be subject to import duties, taxes, brokerage fees, and customs processing imposed by the destination country. Unless checkout expressly states that these charges are prepaid, the recipient is responsible for applicable import charges. We will provide available customs and shipping information at checkout where feasible.',
      },
      {
        h: 'Tracking and delivery issues',
        p: `Where tracking is offered, shipment details will be sent to the email address used for the order. If a package is delayed, marked delivered but missing, or arrives damaged, please contact us at ${EMAIL} with your order number. We will review the issue and work with the carrier as appropriate; your statutory rights remain unaffected.`,
      },
      {
        h: 'Incorrect addresses and undeliverable parcels',
        p: 'Customers should verify their shipping details before placing an order. If an address needs correction, contact us promptly; changes may not be possible after dispatch. Additional shipping costs resulting from an incorrect or incomplete address may apply, subject to applicable law.',
      },
      {
        h: 'Shipping questions',
        p: `Contact us at ${EMAIL}.`,
      },
    ],
  },
  {
    id: 'returns',
    title: 'Returns & Refunds Policy',
    intro:
      'We want customers to enjoy their purchases from Global Adventures Collective. The following policy explains how to request assistance with eligible returns, exchanges, refunds, and order problems.',
    sections: [
      {
        h: 'Return eligibility',
        p: 'You may request a return within the return window stated at checkout for eligible, unused items in their original condition and packaging, together with proof of purchase. We will confirm eligibility and provide return instructions before you send anything back. This policy does not limit rights that cannot be waived under applicable consumer law.',
      },
      {
        h: 'Items that may not be returnable',
        p: 'Unless required by law or because an item is defective or incorrect, the following may be excluded: personalized or made-to-order products; digital downloads once supplied where permitted by law; used or substantially damaged items; and final-sale items clearly identified before purchase. Any product-specific exceptions will be stated on the product page.',
      },
      {
        h: 'Damaged, defective, or incorrect orders',
        p: `If your order arrives damaged, defective, or different from what you purchased, contact ${EMAIL} as soon as possible after delivery. Include your order number, a description of the issue, and photographs if available. We will review the matter and offer an appropriate remedy, such as replacement, refund, or another solution consistent with applicable law.`,
      },
      {
        h: 'How to start a return',
        p: `Email ${EMAIL} with your order number, item name, and reason for return. If approved, we will provide instructions and the applicable return address. Please do not mail items to an address that has not been confirmed for returns.`,
      },
      {
        h: 'Return shipping costs',
        p: 'For discretionary returns, who pays for return shipping will be stated in your return instructions. If an item is defective, damaged, or incorrect, we will provide the remedy and any required return-shipping arrangements in accordance with applicable law. International return instructions may vary by destination.',
      },
      {
        h: 'Refund processing',
        p: 'Once an eligible return is received and inspected, we will notify you of the outcome. Approved refunds will generally be issued to the original payment method, and we will tell you the expected timing when we approve the refund. Your bank or payment provider may require additional time to post the funds. Whether original shipping fees are refundable will be stated at checkout, except where applicable law requires otherwise.',
      },
      {
        h: 'Exchanges, cancellations, and preorders',
        p: `Exchanges are subject to product availability. To request a cancellation or preorder change, contact us promptly at ${EMAIL}. We will confirm whether the order can be changed or canceled based on its status and applicable law.`,
      },
      {
        h: 'Consumer rights',
        p: 'Customers may have additional cancellation, refund, or warranty rights based on their location, including for international purchases. Where those rights conflict with this policy, applicable law controls.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    intro:
      'Global Adventures Collective (“we,” “us,” or “our”) respects your privacy. This policy describes the personal information we collect through our website, how we use and share it, and the choices available to visitors and customers.',
    sections: [
      {
        h: 'Information we collect',
        p: 'Depending on how you use our website, we may collect: contact details (such as name, email, phone number, and shipping/billing address); order and purchase information; messages submitted through contact or partnership forms; newsletter preferences; and technical information such as device/browser data, IP address, site activity, and cookie identifiers. We do not intend to store full payment card numbers; payment information is processed by our selected payment service providers.',
      },
      {
        h: 'How we use information',
        p: 'We use information to process and deliver orders, provide customer support, respond to wholesale and partnership inquiries, send requested updates, operate and secure the website, prevent fraud, maintain business records, and comply with legal obligations. Marketing emails will be sent based on consent or another lawful basis where applicable, and each marketing email will include an unsubscribe option.',
      },
      {
        h: 'Service providers and disclosures',
        p: 'We may share information as needed with vendors that support website hosting, ecommerce and payment processing, shipping, analytics, email marketing, and customer service. We may also disclose information to comply with law, protect rights and safety, or in connection with a legitimate business transaction. We will name our ecommerce, payment, shipping, and email providers here when our online store opens.',
      },
      {
        h: 'Cookies and analytics',
        p: 'Our website does not currently use analytics or marketing cookies. If we add them, we will update this notice and provide any required consent or opt-out controls.',
      },
      {
        h: 'Children’s privacy',
        p: `Our books and products may appeal to children ages 5–12, but online purchases, newsletter registrations, and contact submissions are intended for parents, guardians, educators, and other adults. We do not knowingly collect personal information directly from children under 13 without appropriate parental consent or another lawful basis. If you believe a child has provided personal information, contact us at ${EMAIL} so we can review and take appropriate action.`,
      },
      {
        h: 'International visitors and transfers',
        p: 'Customers may visit or order from outside the United States. Information may be processed in the United States or other countries where our service providers operate. Where applicable, we will use required safeguards and provide additional disclosures for international data transfers.',
      },
      {
        h: 'Retention and security',
        p: 'We retain personal information only as long as reasonably necessary for the purposes described above, including legal, accounting, security, and customer-service needs. We use reasonable administrative, technical, and organizational safeguards, but no internet transmission or storage method is completely secure.',
      },
      {
        h: 'Your privacy choices and rights',
        p: `You may unsubscribe from promotional emails at any time. Depending on your location and applicable law, you may also have rights to access, correct, delete, or receive a copy of personal information, or to object to or limit certain processing. To make a request, contact ${EMAIL}. We may need to verify your identity and may retain certain records when required or permitted by law.`,
      },
      {
        h: 'Third-party links and policy updates',
        p: 'Our website may link to third-party sites whose privacy practices we do not control. We may update this policy from time to time; the date at the top of this page will reflect the latest revision. Material changes will be communicated as required by law.',
      },
      {
        h: 'Contact information',
        p: `Global Adventures Collective · ${EMAIL}`,
      },
    ],
  },
]
