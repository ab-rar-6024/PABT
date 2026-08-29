import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - PABT Foundation",
  description: "Official Privacy Policy of PABT Foundation. Information gathering, personal data usage, email list privacy, cookie policy, payment gateway security, and refund policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-green-600 dark:text-green-400 uppercase tracking-widest hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Title Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>PABT FOUNDATION COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Privacy Policy - PABT Foundation
          </h1>
        </div>

        {/* Verbatim Content */}
        <div className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Information Gathering
            </h2>
            <p>
              PABT Foundation collects information from the users in several ways, for example when the user:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Makes a donation</li>
              <li>Signs up for a campaign</li>
              <li>Signs up to stay updated</li>
            </ul>
            <p>
              While forwarding a donation to PABT Foundation the well-wishers have to submit some personal information as it would help us ensure genuine contributions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Your name</li>
              <li>Your email and mailing address</li>
              <li>Your telephone number</li>
              <li>Your payment processing details</li>
              <li>Any other data as required</li>
            </ul>
            <p className="italic text-sm text-gray-500 dark:text-gray-400">
              PABT Foundation does not collect or record the user’s personal information unless he/she chooses to provide it.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Use of Personal Information
            </h2>
            <p>
              General browsing of the PABT Foundation website is anonymous and it does not register the user’s personal information except the time, date and place of visits and the name of the internet service provider. This data is used only for statistics and diagnosis.
            </p>
            <p>
              By signing up for various services offered by PABT Foundation, the user explicitly authorises us to collect information based on the user’s usage. The information is used to help provide a better user experience and is used per the user’s specified instructions.
            </p>
            <p>
              PABT Foundation keeps the user information strictly confidential and this information is secured safely. All relevant information collected through the PABT Foundation website is handled and used by internal and/or authorized officials only. It is never shared with any external agencies or third-party individuals.
            </p>
            <p>
              PABT Foundation uses the information given to it in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>To keep an accurate record of all the donations received</li>
              <li>To update users about its happenings and developments through bulletins and newsletters, with an option of not to subscribe for the same</li>
              <li>To make sure the user is receiving the most appropriate and relevant information</li>
              <li>To find out more about the people who are visiting the PABTFoundation website, donating, or joining its campaigns</li>
            </ul>
            <p>
              Usually, PABT Foundation does not store user data. In the case of specific sign-ups, the data is stored per user request. The user can opt to delete all the information he/she has provided by simply requesting such by mail. All information, without exception, will be deleted in two working days.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Privacy of email lists
            </h2>
            <p>
              Individuals who join PABT Foundation’s mailing lists via its website or through its campaigning engagements are added to its email database. PABT Foundation does not sell, rent, loan, trade, or lease the addresses on our lists to anyone.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cookie Policy
            </h2>
            <p>
              Cookies are pieces of electronic information that will be sent by the PABT Foundation when a user visits the website. These will be placed in the hard disk of the user’s computer and enable PABT Foundation to recognise the user when he/she visits the website again.
            </p>
            <p>
              The user can configure his/her browser so that it responds to cookies the way he/she deems fit. For example, you want to accept all cookies, reject them all or get notified when a cookie is sent. The users may check their browser’s settings to modify cookie behaviour as per individual behaviour.
            </p>
            <p>
              If a user disables the use of cookies on the web browser, or removes or rejects specific cookies from PABT Foundation’s Website or linked sites then he/she may not be able to use the website as it is intended.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Payment Gateway
            </h2>
            <p>
              PABT Foundation uses well-recognised and proven technology for payments. Payment information is transferred by the use of an SSL connection which offers the highest degree of security that the donor’s browser can support.
            </p>
            <p>
              Several layers of built-in security, including an advanced firewall system, encryption of credit card numbers, and use of passwords, protect the collected information.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              External Web Services
            </h2>
            <p>
              PABT Foundation uses several external web services on its site to display content within its web pages. For example, to display video it uses YouTube. As with the social media buttons, PABT Foundation cannot prevent these sites, or external domains, from collecting information on the user’s consumption of the content embedded in its site.
            </p>
            <p>
              The PABT Foundation website contains links to other websites for the benefit of its visitors. This Privacy Policy does not apply to such other websites.
            </p>
            <p>
              PABT Foundation is not expressly or impliedly responsible for, or liable for any loss or damage caused to a user by the collection, use and retention of Personal Information by such website in any manner whatsoever. The users must review the privacy policies of all websites they visit before disclosing any information to such websites.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Changes to Privacy Policy
            </h2>
            <p>
              As and when the need arises, PABT Foundation may alter its privacy policy in accordance with the latest technology and trends. It will provide you with timely notice of these changes. The users may reach out to the PABT Foundation if they have any queries about any changes made to its practices.
            </p>
            <p>
              If you have any questions at all about PABT Foundation’s privacy policy, please write to us at:{" "}
              <a href="mailto:trees@pabt.in" className="text-green-600 dark:text-green-400 font-bold hover:underline">
                trees@pabt.in
              </a>
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refund and Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>No refund/cancellation for the donated amount by any donor will not be entertained, the online donations through the online payment gateway.</li>
              <li>No cash or refund of money will be allowed.</li>
              <li>If any in-kind support is received by the donor from anywhere the material will be reached to the poorest of the poorer communities.</li>
              <li>Once received the donation for a cause will not be refunded to the donor. No cancellation is to be made. The donation will be used for community development, children’s education or women’s empowerment.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
