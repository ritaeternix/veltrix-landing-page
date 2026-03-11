import { Metadata } from "next";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Veltrix",
  description:
    "Veltrix Terms of Service. Understand the rules and guidelines for using our TikTok Shop analytics platform.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground">
      <nav className="border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Veltrix</span>
          </a>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-sm text-white font-medium"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-slate hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-slate mb-12">Last updated: March 11, 2026</p>

        <div className="prose-custom space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Veltrix platform, website, and services
              (collectively, the &quot;Service&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to
              these Terms, you may not access or use the Service.
            </p>
            <p>
              The Service is provided by Veltrix (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms
              constitute a legally binding agreement between you and the Company.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Veltrix is an AI-powered e-commerce consulting firm that
              provides data-driven insights and strategic advisory for TikTok
              Shop sellers, brands, creators, and affiliates. Our services
              include:
            </p>
            <ul>
              <li>
                Product trend analytics and market intelligence for TikTok Shop
              </li>
              <li>
                Creator and influencer discovery, analysis, and collaboration
                tools
              </li>
              <li>
                Video and advertisement performance analytics with AI-powered
                insights
              </li>
              <li>Competitor tracking and benchmarking tools</li>
              <li>Livestream performance analytics and optimization insights</li>
              <li>
                AI-generated recommendations for product selection, pricing, and
                content strategy
              </li>
            </ul>
            <p>
              Our Service integrates with TikTok&apos;s platform through the
              TikTok Developer API and TikTok Shop Open API (Seller API). Your
              use of these integrations is also subject to TikTok&apos;s terms of
              service and developer policies.
            </p>
          </Section>

          <Section title="3. Account Registration">
            <p>
              To access certain features of the Service, you must create an
              account. When registering, you agree to:
            </p>
            <ul>
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>
                Maintain and update your information to keep it accurate and
                current
              </li>
              <li>
                Keep your account credentials secure and confidential
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>
            <p>
              You must be at least 18 years old to create an account and use the
              Service. We reserve the right to suspend or terminate accounts that
              violate these Terms.
            </p>
          </Section>

          <Section title="4. TikTok API Integration">
            <p>
              When you connect your TikTok account to our Service, you
              acknowledge and agree that:
            </p>
            <ul>
              <li>
                You authorize Veltrix to access your TikTok data through
                TikTok&apos;s official APIs within the scopes you approve
              </li>
              <li>
                Your use of TikTok data through our Service is also subject to
                TikTok&apos;s{" "}
                <a href="https://www.tiktok.com/legal/terms-of-service">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="https://www.tiktok.com/legal/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                You have the necessary rights and permissions to authorize access
                to the TikTok Shop data you connect
              </li>
              <li>
                You may revoke API access at any time through your TikTok
                account settings or by contacting us
              </li>
              <li>
                We will handle all TikTok API data in accordance with our{" "}
                <a href="/privacy">Privacy Policy</a> and TikTok&apos;s developer
                requirements
              </li>
            </ul>
          </Section>

          <Section title="5. Consulting Engagement and Fees">
            <h4>5.1 Service Agreements</h4>
            <p>
              Our consulting services are provided under individual service
              agreements or statements of work. Each engagement will outline the
              scope, deliverables, timeline, and fees specific to your project.
            </p>

            <h4>5.2 Fees and Payment</h4>
            <p>
              Consulting fees are determined based on the scope and complexity of
              each engagement. Payment terms will be specified in your service
              agreement. All fees are due as outlined in the agreement.
            </p>

            <h4>5.3 Free Consultation</h4>
            <p>
              We offer a complimentary initial consultation to understand your
              business needs and determine how we can best support your growth.
              This initial consultation carries no obligation.
            </p>

            <h4>5.4 Termination</h4>
            <p>
              Either party may terminate a consulting engagement as specified in
              the service agreement. Upon termination, you will be responsible
              for fees incurred up to the termination date.
            </p>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>
                Violate any applicable law, regulation, or TikTok&apos;s terms
                of service or developer policies
              </li>
              <li>
                Access or attempt to access data you are not authorized to view
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble any part of the
                Service
              </li>
              <li>
                Use automated tools (bots, scrapers) to access the Service
                beyond API rate limits
              </li>
              <li>
                Share, resell, or redistribute data obtained through the Service
                without authorization
              </li>
              <li>
                Interfere with or disrupt the Service, servers, or networks
              </li>
              <li>
                Impersonate any person or entity or misrepresent your
                affiliation
              </li>
              <li>
                Use the Service to engage in deceptive, misleading, or
                fraudulent activity
              </li>
              <li>
                Use TikTok API data to create competing products or services
                against TikTok
              </li>
              <li>
                Attempt to circumvent any security measures or access controls
              </li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <h4>7.1 Our Property</h4>
            <p>
              The Service, including its original content (excluding user data),
              features, functionality, design, AI models, algorithms, and
              branding, is and will remain the exclusive property of Veltrix and
              its licensors. The Service is protected by copyright, trademark,
              and other intellectual property laws.
            </p>

            <h4>7.2 Your Data</h4>
            <p>
              You retain all rights to the data you provide to us. By using the
              Service, you grant us a limited, non-exclusive license to use,
              process, and analyze your data solely for the purpose of providing
              the Service to you.
            </p>

            <h4>7.3 Feedback</h4>
            <p>
              Any feedback, suggestions, or recommendations you provide
              regarding the Service may be used by us without obligation to you.
            </p>
          </Section>

          <Section title="8. Data Accuracy and Disclaimer">
            <p>
              Our analytics and insights are generated using AI models and
              publicly available data. While we strive for accuracy:
            </p>
            <ul>
              <li>
                Analytics data, including estimated transaction amounts and ad
                spend, may have variations from actual figures
              </li>
              <li>
                AI-generated predictions and recommendations are probabilistic
                and should not be the sole basis for business decisions
              </li>
              <li>
                Historical data accuracy improves over time as our models are
                continuously updated
              </li>
              <li>
                Data should not be used for purposes requiring exact precision,
                such as financial auditing or legal proceedings
              </li>
            </ul>
            <p>
              The Service is provided for informational and analytical purposes.
              You are responsible for validating insights and making independent
              business decisions.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VELTRIX SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
              LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL,
              REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL
              NOT EXCEED THE TOTAL FEES PAID BY YOU TO US UNDER THE APPLICABLE
              SERVICE AGREEMENT IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted,
              error-free, or completely secure. We do not guarantee the accuracy,
              completeness, or reliability of any analytics data or AI-generated
              insights.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Veltrix and its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses arising out of
              or in connection with:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of a third party</li>
              <li>Your misuse of data obtained through the Service</li>
            </ul>
          </Section>

          <Section title="12. Termination">
            <p>
              We may terminate or suspend your access to the Service immediately,
              without prior notice, for conduct that we believe violates these
              Terms, is harmful to other users, or is otherwise objectionable.
            </p>
            <p>
              Upon termination, your access to consulting deliverables and
              ongoing advisory services will cease as specified in your service
              agreement. We will delete or anonymize your data in accordance
              with our <a href="/privacy">Privacy Policy</a>, except where
              retention is required by law.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of material changes by posting the updated Terms on
              our website and updating the &quot;Last updated&quot; date.
              Continued use of the Service after changes constitutes acceptance
              of the revised Terms.
            </p>
          </Section>

          <Section title="14. Governing Law and Dispute Resolution">
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles. Any
              disputes arising under these Terms shall be resolved through good
              faith negotiation. If negotiation fails, disputes shall be settled
              through binding arbitration or in the courts of competent
              jurisdiction.
            </p>
          </Section>

          <Section title="15. General Provisions">
            <ul>
              <li>
                <strong>Entire Agreement:</strong> These Terms, together with our
                Privacy Policy, constitute the entire agreement between you and
                Veltrix regarding the Service
              </li>
              <li>
                <strong>Severability:</strong> If any provision of these Terms is
                found to be unenforceable, the remaining provisions will continue
                in full force and effect
              </li>
              <li>
                <strong>Waiver:</strong> Failure to enforce any right or
                provision of these Terms shall not constitute a waiver of such
                right or provision
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign or transfer your
                rights under these Terms without our prior written consent
              </li>
            </ul>
          </Section>

          <Section title="16. Contact Us">
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@veltrix.io">legal@veltrix.io</a>
              </li>
              <li>
                <strong>General Support:</strong>{" "}
                <a href="mailto:support@veltrix.io">support@veltrix.io</a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://veltrix.io">https://veltrix.io</a>
              </li>
            </ul>
          </Section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-dark">
            &copy; {new Date().getFullYear()} Veltrix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-sm text-slate-dark hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/privacy"
              className="text-sm text-slate-dark hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mt-6 [&_p]:text-slate [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate [&_a]:text-primary-light [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white [&_a]:transition-colors">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {children}
    </section>
  );
}
