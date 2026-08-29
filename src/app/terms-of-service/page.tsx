import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck2 } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions - PABT Foundation",
  description: "Official Terms and Conditions of PABT Foundation. Rules governing website usage, disclaimers, copyright restrictions, and registered office details.",
};

export default function TermsOfServicePage() {
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
            <FileCheck2 className="w-4 h-4" />
            <span>PABT FOUNDATION COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Terms and Conditions
          </h1>
        </div>

        {/* Verbatim Content */}
        <div className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          
          <p className="font-semibold text-lg text-gray-900 dark:text-white">
            Use of this site is provided by PABT FOUNDATION subject to the following Terms and Conditions:
          </p>

          <ol className="list-decimal pl-6 space-y-6">
            <li>
              PABT FOUNDATION reserves the right to change these terms and conditions at any time by posting changes online. Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified. You agree to use this site only for lawful purposes, and in a manner which does not infringe the rights, restrict, or inhibit the use and enjoyment of the site by any third party.
            </li>

            <li>
              This site and the information, names, images, pictures, and logos regarding or relating to PABT FOUNDATION are provided &quot;as is&quot; without any representation or endorsement made and without warranty of any kind whether express or implied. In no event will PABT FOUNDATION be liable for any damages including, without limitation, indirect or consequential damages, or any damages whatsoever arising from the use or in connection with such use or loss of use of the site, whether in contract or negligence.
            </li>

            <li>
              PABT FOUNDATION does not warrant that the functions contained in the material contained in this site will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available is free of viruses or bugs or represents the full functionality, accuracy and reliability of the materials.
            </li>

            <li>
              <span className="font-bold block text-gray-900 dark:text-white mb-2">Copyright restrictions:</span>
              <p className="mb-2">
                Commercial use or publication of all or any item displayed is strictly prohibited without prior authorization from PABT FOUNDATION. Nothing contained herein shall be construed as conferring any license by PABT FOUNDATION to use any item displayed.
              </p>
              <p>
                Documents may be copied for personal use only on the condition that copyright and source indications are also copied, no modifications are made and the document is copied entirely. However, some documents and photos have been published on this site with the permission of the relevant copyright owners (who are not PABT FOUNDATION). All rights are reserved on these documents and permission to copy them must be requested from the copyright owners (the sources are indicated within these documents/photographs).
              </p>
            </li>

            <li>
              PABT FOUNDATION takes no responsibility for the content of external Internet sites. Other websites that we link to are owned and operated by third parties and PABT FOUNDATION has no control over them. The fact that we include links to other websites does not mean that PABT FOUNDATION approves of or endorses any other third-party website or the content of that website. We accept no liability for any statements, information, products or services that are published on or are accessible through any websites owned or operated by third parties.
            </li>

            <li>
              Any communication or material that you transmit to, or post on, any public area of the site including any data, questions, comments, suggestions, or the like, is, and will be treated as, non-confidential and nonproprietary information. If there is any conflict between these terms and conditions and rules and/or specific terms of use appearing on this site relating to specific material then the latter shall prevail.
            </li>

            <li>
              These terms and conditions shall be governed and construed by the laws of India.
            </li>
          </ol>

          <p className="border-t border-gray-100 dark:border-gray-800/80 pt-6">
            If these terms and conditions are not accepted in full, the use of this site must be terminated immediately.
          </p>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2 text-sm">
            <p className="font-bold text-gray-900 dark:text-white">PABT FOUNDATION for Social Welfare Service is registered at:</p>
            <p className="text-gray-600 dark:text-gray-400">NO. 17th Main Road, 2nd Phase, JP Nagar, Bangalore South, Bangalore – 560078, Karnataka, India.</p>
            <p className="text-gray-600 dark:text-gray-400">Ph No: +91 99449 43333 | Email: trees@pabt.in</p>
          </div>

        </div>
      </div>
    </div>
  );
}
