import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}, including SMS messaging terms.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-ink-soft">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">Legal</p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-ink">Effective Date: Jan 1st, 2026</p>

      <h2 className="mt-10 font-display text-2xl text-ink">SMS Messaging Terms &amp; Compliance</h2>

      <p className="mt-4">
        <strong className="text-ink">1. Program Description:</strong> This messaging program
        sends booking confirmation and reminder messages to customers who have requested a quote
        or reservation with {siteConfig.name} through our website at alderfordhomes.com, or via
        our booking forms, and have explicitly opted in to receive SMS notifications. Opt-in is
        collected via web forms with a dedicated checkbox for SMS consent. Messages include
        booking confirmations, check-in reminders, rescheduling updates, and customer support
        communications.
      </p>

      <p className="mt-4">
        <strong className="text-ink">2. Cancellation Instructions:</strong> You can cancel the
        SMS service at any time. Simply text &quot;STOP&quot; to the same number that sent you
        messages. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS.
        Following this confirmation, you will no longer receive SMS messages from us. To rejoin,
        sign up as you did initially, and we will resume sending SMS messages to you.
      </p>

      <p className="mt-4">
        <strong className="text-ink">3. Support Information:</strong> If you experience issues
        with the messaging program, reply with the keyword &quot;HELP&quot; for more assistance,
        or reach out directly to {siteConfig.supportEmail} or call {siteConfig.supportPhoneDisplay}{" "}
        during business hours.
      </p>

      <p className="mt-4">
        <strong className="text-ink">4. Carrier Liability:</strong> Carriers are not liable for
        delayed or undelivered messages.
      </p>

      <p className="mt-4">
        <strong className="text-ink">5. Message &amp; Data Rates:</strong> Message and data rates
        may apply for messages sent to you from us and to us from you. Message frequency varies
        based on your service usage and booking activity. For questions about your text plan or
        data plan, contact your wireless provider.
      </p>

      <p className="mt-4">
        <strong className="text-ink">6. Supported Carriers:</strong> Our SMS program works with
        all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most
        regional carriers.
      </p>

      <p className="mt-4">
        <strong className="text-ink">7. Age Restriction:</strong> You must be 18 years or older
        to participate in our SMS program.
      </p>

      <p className="mt-4">
        <strong className="text-ink">8. Privacy Policy:</strong> For privacy-related inquiries,
        please refer to the Privacy Policy at alderfordhomes.com/privacy.
      </p>

      <p className="mt-4">
        We comply with all applicable laws and regulations, including the Telephone Consumer
        Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">General Terms</h2>

      <p className="mt-4">
        This website (the &quot;Site&quot;) is owned and operated by {siteConfig.name}{" "}
        (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;). By using the Site, you agree to
        be bound by these Terms of Service and to use the Site in accordance with these Terms of
        Service, our Privacy Policy, and any additional terms and conditions that may apply to
        specific sections of the Site or to products and services available through the Site or
        from {siteConfig.name}.
      </p>

      <p className="mt-4">
        Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the
        Site and your agreement to be bound by these Terms of Service.
      </p>

      <p className="mt-4">
        We reserve the right to change these Terms of Service or to impose new conditions on the
        use of the Site from time to time, in which case we will post the revised Terms of
        Service on this website. By continuing to use the Site after we post any such changes,
        you accept the Terms of Service, as modified.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">
        Intellectual Property Rights
      </h2>

      <h3 className="mt-6 font-medium text-ink">Our Limited License to You</h3>
      <p className="mt-2">
        This Site and all the materials available on the Site are the property of{" "}
        {siteConfig.name} and/or our affiliates or licensors and are protected by copyright,
        trademark, and other intellectual property laws. The Site is provided solely for your
        personal non-commercial use.
      </p>
      <p className="mt-4">
        You may not use the Site or the materials available on the Site in a manner that
        constitutes an infringement of our rights or that has not been authorized by us.
      </p>
      <p className="mt-4">
        Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload,
        post, transmit, translate, sell, create derivative works, exploit, or distribute any
        material from the Site. However, you may download and/or print one copy of individual
        pages for your personal, non-commercial use, provided that you keep intact all copyright
        and other proprietary notices.
      </p>

      <h3 className="mt-6 font-medium text-ink">Your License to Us</h3>
      <p className="mt-2">
        By posting or submitting any material (including comments, reviews, social media posts,
        photos, and videos) to us via the Site, internet groups, or other digital venues, you
        represent that you own the material or have obtained the necessary permissions. You grant
        us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use,
        modify, transmit, sell, exploit, create derivative works from, distribute, and publicly
        perform or display such material.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Disclaimers</h2>
      <p className="mt-4">
        Throughout the Site, we may provide links and pointers to Internet sites maintained by
        third parties. Our linking to such third-party sites does not imply an endorsement or
        sponsorship of such sites or the information, products, or services offered on or through
        the sites.
      </p>
      <p className="mt-4">
        The information, products, and services offered on or through the Site are provided
        &quot;as is&quot; and without warranties of any kind, either express or implied. To the
        fullest extent permissible pursuant to applicable law, we disclaim all warranties,
        including implied warranties of merchantability and fitness for a particular purpose.
      </p>
      <p className="mt-4">
        You agree at all times to indemnify and hold harmless {siteConfig.name}, its affiliates,
        and their respective officers, directors, agents, and employees from any claims, causes
        of action, damages, liabilities, costs, and expenses arising out of or related to your
        breach of any obligation, warranty, or representation under these Terms of Service.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Online Commerce</h2>
      <p className="mt-4">
        Certain sections of the Site may allow you to request quotes or make reservations
        processed by third-party vendors, including our booking and payment platforms. We are not
        responsible for the quality, accuracy, timeliness, reliability, or any other aspect of
        these products and services. If you make a booking or payment through a third party
        linked through the Site, the information obtained during your visit, including payment
        information, may be collected by both that provider and us.
      </p>
      <p className="mt-4">
        Your participation in any dealings with third-party vendors is solely between you and the
        third party. {siteConfig.name} shall not be responsible for any loss or damage incurred
        as a result of such dealings.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Registration &amp; Passwords</h2>
      <p className="mt-4">
        To access certain features of the Site, you may be required to register and create an
        account. You agree to provide accurate, current, and complete information during the
        registration process. You are responsible for maintaining the confidentiality of your
        login credentials and for all activities conducted under your account.
      </p>
      <p className="mt-4">
        If you suspect unauthorized use of your account, notify us immediately at{" "}
        {siteConfig.supportEmail}. We are not liable for any loss or damage arising from your
        failure to comply with this obligation.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Termination</h2>
      <p className="mt-4">
        We reserve the right to terminate or suspend your access to the Site, without notice, if
        we determine that you have violated these Terms of Service or engaged in conduct that we
        deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and
        any content obtained from it.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Governing Law</h2>
      <p className="mt-4">
        These Terms of Service shall be governed by and construed in accordance with the laws of
        the State of Tennessee, where {siteConfig.name} operates. Any dispute arising under these
        Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
      </p>

      <h2 className="mt-10 font-display text-2xl text-ink">Changes to Terms of Service</h2>
      <p className="mt-4">
        We may update these Terms of Service from time to time. The latest version will always be
        available on our website with the effective date.
      </p>

      <p className="mt-8">For any questions regarding these Terms of Service, please contact us at:</p>
      <p className="mt-2 text-ink">
        {siteConfig.name}
        <br />
        Phone: {siteConfig.supportPhoneDisplay}
        <br />
        Email: {siteConfig.supportEmail}
        <br />
        Website: alderfordhomes.com
      </p>

      <p className="mt-8">By using our website and services, you consent to these Terms of Service.</p>
    </div>
  );
}
