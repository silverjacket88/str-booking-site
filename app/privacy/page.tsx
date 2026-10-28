import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, including SMS data handling.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-ink-soft">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">Legal</p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-ink">Effective Date: Jan 1st, 2026</p>

      <div className="mt-8 rounded-lg border border-line bg-paper p-6">
        <p className="font-medium text-ink">Important notice regarding text messaging data</p>
        <p className="mt-2">
          {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share
          customer opt-in information, including phone numbers and consent records, with any
          affiliates or third parties for marketing, promotional, or any other purposes unrelated
          to providing our direct services. All text messaging originator opt-in data is kept
          strictly confidential.
        </p>
      </div>

      <h2 className="mt-10 font-display text-2xl text-ink">1. Information We Collect</h2>
      <p className="mt-4">We collect the following types of information:</p>
      <p className="mt-4 font-medium text-ink">Personal Information:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Name, email address, phone number, physical address</li>
        <li>Payment information when you make a purchase or request a quote</li>
        <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
      </ul>
      <p className="mt-4 font-medium text-ink">Non-Personal Information:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>IP address, browser type, device information</li>
        <li>Website usage patterns and analytics</li>
        <li>Cookies and similar technologies</li>
      </ul>
      <p className="mt-4 font-medium text-ink">Customer Communication:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Records of inquiries and service requests</li>
        <li>Appointment details and preferences (e.g., check-in/check-out dates)</li>
        <li>Service history and feedback</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-ink">2. How We Use Your Information</h2>
      <p className="mt-4">We use collected data for:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Providing and improving our services</li>
        <li>Processing transactions and payments</li>
        <li>Communicating with you about your inquiries, reservations, and stay</li>
        <li>Enhancing website functionality and user experience</li>
        <li>Ensuring security and fraud prevention</li>
        <li>Maintaining records of your communication preferences and consent</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-ink">3. SMS Messaging &amp; Compliance</h2>
      <p className="mt-4 font-medium text-ink">Text Message Program Terms &amp; Conditions</p>
      <p className="mt-2">
        By opting into our SMS messaging services, you agree to receive text messages related to
        our services, including booking confirmations, check-in instructions, customer support,
        and important updates.
      </p>

      <p className="mt-4 font-medium text-ink">Opt-In &amp; Consent:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>You will only receive messages if you have explicitly opted in</li>
        <li>We maintain timestamped records of all opt-in actions</li>
        <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Opt-Out Instructions:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
        <li>
          You will receive a final confirmation message, and no further messages will be sent
          unless you re-opt in
        </li>
        <li>All opt-out requests are processed immediately</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Message Frequency &amp; Content:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Message frequency varies based on your interactions with our business</li>
        <li>Messages will be directly related to the services you have requested</li>
        <li>We do not send promotional content without specific consent</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Help &amp; Support:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          Reply &quot;HELP&quot; for assistance or contact us at {siteConfig.supportEmail}
        </li>
        <li>Customer support is available during regular business hours</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Carrier Information:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Standard message and data rates may apply</li>
        <li>Carriers are not liable for delayed or undelivered messages</li>
        <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
      </ul>

      <div className="mt-6 rounded-lg border border-line bg-paper p-6">
        <p className="font-medium text-ink">SMS Data Protection Statement</p>
        <p className="mt-2">
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors in support
          services, such as customer service, is permitted. All other use case categories exclude
          text messaging originator opt-in data and consent; this information will not be shared
          with any third parties.
        </p>
        <p className="mt-2">
          We implement strict data protection measures to safeguard your SMS opt-in information
          and consent records.
        </p>
      </div>

      <h2 className="mt-10 font-display text-2xl text-ink">4. Information Sharing &amp; Disclosure</h2>
      <p className="mt-4">We do not sell, rent, or trade personal information. We may share information with:</p>

      <p className="mt-4 font-medium text-ink">Service Providers:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          Third-party vendors who assist in our operations (e.g., payment processing, booking and
          property management)
        </li>
        <li>SMS aggregators and providers solely for the purpose of delivering messages you&apos;ve consented to receive</li>
        <li>All service providers are contractually obligated to maintain confidentiality and security</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Legal Compliance:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>If required by law, legal process, or to protect our rights</li>
        <li>In response to valid law enforcement requests or court orders</li>
      </ul>

      <p className="mt-4 font-medium text-ink">Business Transfers:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>In case of mergers, acquisitions, or sale of assets</li>
        <li>In such cases, your data remains protected under the terms of this policy</li>
      </ul>

      <p className="mt-4">
        All the above categories exclude text messaging originator opt-in data and consent; this
        information will not be shared with any third parties, excluding aggregators and
        providers of the Text Message services.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">5. Data Security</h2>
      <p className="mt-4">
        We implement and maintain reasonable security measures to protect your personal
        information:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Encryption of sensitive data in transit and at rest</li>
        <li>Secure access controls and authentication mechanisms</li>
        <li>Regular security assessments and updates</li>
        <li>Secure backup systems and disaster recovery procedures</li>
      </ul>
      <p className="mt-4">
        Despite these measures, no method of transmission over the Internet or electronic storage
        is 100% secure. We strive to use commercially acceptable means to protect your personal
        information but cannot guarantee absolute security.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">6. Cookies &amp; Tracking Technologies</h2>
      <p className="mt-4">We use cookies and similar technologies to:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Analyze site traffic and user behavior</li>
        <li>Remember your preferences</li>
        <li>Improve website functionality and user experience</li>
        <li>Measure the effectiveness of our services</li>
      </ul>
      <p className="mt-4">
        You may control cookies through your browser settings. Disabling cookies may limit your
        ability to use certain features of our website.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">7. Your Rights &amp; Choices</h2>
      <p className="mt-4">You have the right to:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Access, update, or delete your personal information</li>
        <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
        <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
        <li>Request information on how we process your data</li>
        <li>Withdraw consent at any time for future communications</li>
        <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
      </ul>
      <p className="mt-4">To exercise these rights, please contact us using the information in Section 10.</p>

      <h2 className="mt-10 font-display text-2xl text-ink">8. Third-Party Links</h2>
      <p className="mt-4">
        Our website may contain links to third-party websites. We are not responsible for their
        privacy practices and encourage you to review their policies. This privacy policy applies
        only to information collected by {siteConfig.name}.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">9. Changes to This Privacy Policy</h2>
      <p className="mt-4">
        We may update this policy periodically. The latest version will always be available on
        our website with the effective date. For significant changes, we will notify you by email
        or through a notice on our website.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">10. Contact Us</h2>
      <p className="mt-4">
        If you have questions about this Privacy Policy or how your information is handled,
        contact us at:
      </p>
      <p className="mt-2 text-ink">
        {siteConfig.name}
        <br />
        Phone: {siteConfig.supportPhoneDisplay}
        <br />
        Email: {siteConfig.supportEmail}
        <br />
        Website: alderfordhomes.com
      </p>

      <p className="mt-8">By using our website and services, you consent to this Privacy Policy.</p>
    </div>
  );
}
