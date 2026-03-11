import { Metadata } from "next";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Veltrix",
  description:
    "Veltrix privacy policy. Learn how we collect, use, and protect your data when using our TikTok Shop analytics platform.",
};

export default function PrivacyPolicy() {
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
              className="text-sm text-slate hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-white font-medium"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate mb-12">Last updated: March 11, 2026</p>

        <div className="prose-custom space-y-8">
          <Section title="1. Introduction">
            <p>
              Welcome to Veltrix (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). We are committed to
              protecting your privacy and personal data. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website, use our AI-powered
              e-commerce analytics platform, and interact with our integrations
              via the TikTok Developer API and TikTok Shop Seller API
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              Our Service integrates with TikTok&apos;s platform through
              authorized APIs, including the TikTok Developer API (Login Kit,
              Display API, Content Posting API) and TikTok Shop Open API (Seller
              API). We process data in compliance with the{" "}
              <a href="https://www.tiktok.com/legal/tik-tok-developer-terms-of-service">
                TikTok Developer Terms of Service
              </a>
              ,{" "}
              <a href="https://www.tiktok.com/legal/tiktok-data-sharing-agreement">
                TikTok Developer Data Sharing Agreement
              </a>
              , and all applicable data protection laws.
            </p>
            <p>
              By accessing or using our Service, you agree to this Privacy
              Policy. If you do not agree, please discontinue use of the Service
              immediately.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h4>2.1 Account Information</h4>
            <p>
              When you register for or use our Service, we collect the following
              personal information:
            </p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>
                Account credentials (username and securely hashed password)
              </li>
              <li>
                Billing and payment information (processed securely via
                PCI-compliant third-party payment providers; we do not store full
                payment card details)
              </li>
              <li>Company or business name and business registration details</li>
            </ul>

            <h4>2.2 TikTok Account Data (via OAuth 2.0 Authorization)</h4>
            <p>
              When you connect your TikTok account through our Service, we
              access data via TikTok&apos;s official APIs using OAuth 2.0 with
              PKCE (Proof Key for Code Exchange) authorization. We only request
              and access scopes that are necessary for the Service to function.
              Data collected through TikTok APIs may include:
            </p>
            <ul>
              <li>
                <strong>TikTok Developer API:</strong> Basic profile information
                (display name, avatar, open ID), video performance data
                (views, likes, comments, shares), and content metadata as
                authorized through Login Kit and Display API
              </li>
              <li>
                <strong>TikTok Shop Seller API:</strong> Shop profile
                information, product listings, order data, transaction records,
                sales performance metrics, creator collaboration data, and
                advertising performance data as authorized by the seller
              </li>
            </ul>
            <p>
              We adhere to the principle of <strong>data minimization</strong>
              &mdash;we only collect and process the minimum data necessary to
              provide our analytics and insights services. We conduct quarterly
              audits to ensure compliance with this principle.
            </p>

            <h4>2.3 Usage Data</h4>
            <p>
              We automatically collect certain technical information when you
              access our Service:
            </p>
            <ul>
              <li>IP address, browser type, operating system, and device information</li>
              <li>Pages visited, features used, and time spent on the Service</li>
              <li>Referring URLs and search queries</li>
              <li>API usage logs (endpoints accessed, request frequency, error logs)</li>
              <li>Cookies and similar tracking technologies (see Section 10)</li>
            </ul>

            <h4>2.4 Publicly Available TikTok Data</h4>
            <p>
              Our platform also collects and analyzes publicly available TikTok
              data, including public product listings, public creator profiles,
              public video performance metrics, and public livestream data. This
              data is gathered from publicly accessible sources and processed
              using our AI models to provide market analytics and insights. This
              data does not contain personally identifiable information (PII) of
              private individuals.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>
              We use your information strictly for the following purposes:
            </p>
            <ul>
              <li>
                To provide, maintain, and improve our Service, including
                AI-powered analytics, trend predictions, and personalized
                recommendations
              </li>
              <li>
                To process your account registration and manage your
                consulting engagement
              </li>
              <li>
                To access and analyze your TikTok Shop data as authorized by you
                through OAuth 2.0 consent
              </li>
              <li>
                To generate analytics reports, dashboards, and actionable
                insights
              </li>
              <li>
                To communicate with you about updates, features, and support
                requests
              </li>
              <li>To process payments and prevent fraudulent transactions</li>
              <li>
                To analyze usage patterns, monitor API performance, and improve
                user experience
              </li>
              <li>
                To comply with legal obligations, including TikTok Developer
                Terms of Service and applicable data protection laws
              </li>
              <li>
                To send marketing communications (only with your explicit
                opt-in consent; you may opt out at any time)
              </li>
            </ul>
            <p>
              We do <strong>not</strong> use TikTok API data for purposes beyond
              what is described in this policy and authorized by the user. We do
              not use TikTok data to build user profiles for advertising or sell
              data to third parties.
            </p>
          </Section>

          <Section title="4. TikTok API Data Handling">
            <p>
              In compliance with TikTok&apos;s Developer Terms of Service and
              Data Sharing Agreement, we adhere to the following specific data
              handling practices:
            </p>

            <h4>4.1 Authorization and Consent</h4>
            <ul>
              <li>
                We access your TikTok data only after you explicitly authorize
                our application through TikTok&apos;s OAuth 2.0 authorization
                flow
              </li>
              <li>
                We only request API scopes that are necessary for the specific
                features you use
              </li>
              <li>
                You can revoke access to your TikTok data at any time through
                your TikTok account settings or by contacting us
              </li>
            </ul>

            <h4>4.2 Data Processing Limitations</h4>
            <ul>
              <li>
                TikTok API data is processed solely for the purpose of providing
                analytics and insights through our Service
              </li>
              <li>
                We do not share, sell, or transfer TikTok API data to any third
                party for their independent use
              </li>
              <li>
                We do not use TikTok API data to create competing products or
                services against TikTok
              </li>
              <li>
                Persons authorized to process TikTok data within our
                organization are bound by contractual confidentiality obligations
              </li>
            </ul>

            <h4>4.3 PII Protection</h4>
            <ul>
              <li>
                We never share any user&apos;s Personally Identifiable
                Information (PII) obtained through TikTok APIs without the
                user&apos;s explicit consent
              </li>
              <li>
                We protect user identity and anonymity in all analytics outputs
                unless the user explicitly requests otherwise
              </li>
              <li>
                All PII is encrypted both in transit (TLS 1.3) and at rest
                (AES-256)
              </li>
            </ul>

            <h4>4.4 API Security</h4>
            <ul>
              <li>
                OAuth 2.0 with PKCE for all TikTok API authorization flows
              </li>
              <li>
                Short-lived access tokens with automatic refresh token rotation
              </li>
              <li>
                Least-privilege API access — we never request full account
                permissions
              </li>
              <li>
                API rate limiting compliance with TikTok&apos;s throttling
                requirements
              </li>
              <li>
                All API credentials are stored in encrypted, access-controlled
                environments
              </li>
            </ul>
          </Section>

          <Section title="5. Data Sharing and Disclosure">
            <p>
              We do <strong>not sell</strong> your personal information or TikTok
              API data to any third party for marketing or any other purpose. We
              may share your data only in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist in operating our platform (e.g., cloud hosting, payment
                processing, email delivery). These providers are contractually
                bound to use data only for the services they provide to us and
                must comply with applicable data protection laws
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, subpoena, court order, or legal process. We will
                notify TikTok without undue delay in the event of any regulatory
                investigation or request for disclosure of TikTok API data by a
                government agency or law enforcement authority, unless prohibited
                by applicable law
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger,
                acquisition, or sale of assets, where the acquiring entity agrees
                to be bound by this Privacy Policy
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize
                us to share your information for a specific purpose
              </li>
            </ul>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement comprehensive security measures to protect your data:
            </p>
            <ul>
              <li>
                <strong>Encryption:</strong> All data is encrypted in transit
                using TLS 1.3/SSL and at rest using AES-256 encryption
              </li>
              <li>
                <strong>Access Controls:</strong> Role-based access controls
                (RBAC) with multi-factor authentication for all internal systems
              </li>
              <li>
                <strong>API Security:</strong> OAuth 2.0 with PKCE, short-lived
                tokens, refresh token rotation, and encrypted credential storage
              </li>
              <li>
                <strong>Infrastructure:</strong> Hosted on enterprise-grade cloud
                infrastructure with SOC 2 compliance
              </li>
              <li>
                <strong>Monitoring:</strong> 24/7 security monitoring, intrusion
                detection, and automated threat response
              </li>
              <li>
                <strong>Audits:</strong> Regular security audits and annual
                penetration testing by independent third parties
              </li>
              <li>
                <strong>Incident Response:</strong> Documented incident response
                plan with notification procedures in compliance with applicable
                breach notification laws
              </li>
            </ul>
            <p>
              In the event of a data breach involving TikTok API data, we will
              notify TikTok without undue delay in accordance with the TikTok
              Developer Data Sharing Agreement.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your data according to the following schedules:
            </p>
            <ul>
              <li>
                <strong>Account Information:</strong> Retained for the duration
                of your active engagement, plus 2 years after engagement termination
                for legal and audit purposes
              </li>
              <li>
                <strong>Transaction Records:</strong> Retained for 7 years as
                required by applicable financial regulations
              </li>
              <li>
                <strong>API Logs:</strong> Retained for 90 days for debugging,
                security monitoring, and compliance purposes
              </li>
              <li>
                <strong>TikTok API Data:</strong> Cached data is refreshed
                regularly and deleted within 30 days of authorization revocation
                or account deletion
              </li>
              <li>
                <strong>Analytics Data:</strong> Aggregated, anonymized analytics
                data may be retained indefinitely as it does not contain PII
              </li>
            </ul>
            <p>
              Upon account deletion or revocation of TikTok API access, we will
              delete or anonymize your personal data and TikTok API data within
              30 days, except where retention is required by law.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              You have the following rights regarding your personal data. We will
              respond to all valid requests within <strong>45 days</strong>:
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> Request a copy of the personal
                data we hold about you, including data obtained through TikTok
                APIs
              </li>
              <li>
                <strong>Right to Correction:</strong> Request correction of
                inaccurate or incomplete personal data
              </li>
              <li>
                <strong>Right to Deletion:</strong> Request deletion of your
                personal data and revocation of all TikTok API data access
              </li>
              <li>
                <strong>Right to Portability:</strong> Request transfer of your
                data in a structured, machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing of your
                data for certain purposes, including marketing
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Request that we
                limit how we use your data while a complaint is being
                investigated
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw previously
                given consent at any time, including revoking TikTok API
                authorization
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising any of your privacy
                rights
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a>. You
              may also revoke TikTok API access directly through your TikTok
              account settings at any time.
            </p>
          </Section>

          <Section title="9. Legal Basis for Processing (GDPR / International)">
            <p>
              For users in the European Economic Area (EEA), United Kingdom, and
              Switzerland, we process your personal data based on the following
              legal grounds:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> When you authorize TikTok API access
                or opt in to marketing communications
              </li>
              <li>
                <strong>Contract:</strong> When processing is necessary to
                provide the Service under your consulting engagement
              </li>
              <li>
                <strong>Legitimate Interest:</strong> For security monitoring,
                fraud prevention, and service improvement
              </li>
              <li>
                <strong>Legal Obligation:</strong> When we are required to
                process data to comply with applicable laws
              </li>
            </ul>
            <p>
              We are an independent data controller under applicable data
              protection laws with respect to the data we receive through TikTok
              APIs, as specified in the TikTok Developer Data Sharing Agreement.
            </p>
          </Section>

          <Section title="10. Cookies and Tracking Technologies">
            <p>We use cookies and similar technologies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the Service to
                function (authentication, security, session management)
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To understand how users
                interact with our Service and improve user experience
              </li>
              <li>
                <strong>Preference Cookies:</strong> To remember your settings
                and preferences
              </li>
            </ul>
            <p>
              We do <strong>not</strong> use advertising or third-party tracking
              cookies. You can manage cookie preferences through your browser
              settings. Note that disabling essential cookies may affect the
              functionality of our Service.
            </p>
          </Section>

          <Section title="11. U.S. State Privacy Laws (CCPA/CPRA)">
            <p>
              If you are a California resident or resident of another U.S. state
              with applicable privacy laws, you have additional rights:
            </p>
            <ul>
              <li>
                Right to know what personal information we collect, use,
                disclose, and sell
              </li>
              <li>Right to delete your personal information</li>
              <li>
                Right to opt out of the sale of personal information (we do{" "}
                <strong>not</strong> sell personal information)
              </li>
              <li>
                Right to non-discrimination for exercising your privacy rights
              </li>
              <li>
                Right to correct inaccurate personal information
              </li>
              <li>
                Right to limit the use of sensitive personal information
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a>.
            </p>
          </Section>

          <Section title="12. Children&apos;s Privacy">
            <p>
              Our Service is not intended for individuals under the age of 18. We
              do not knowingly collect personal information from children or
              minors. If we become aware that we have inadvertently collected
              data from a person under 18, we will take immediate steps to
              delete such data. If you believe a minor has provided us with
              personal information, please contact us at{" "}
              <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a>.
            </p>
          </Section>

          <Section title="13. International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence. When transferring data
              internationally, we ensure appropriate safeguards are in place:
            </p>
            <ul>
              <li>
                Standard Contractual Clauses (SCCs) approved by the European
                Commission for transfers from the EEA
              </li>
              <li>
                UK International Data Transfer Agreement for transfers from the
                United Kingdom
              </li>
              <li>
                Adequacy decisions where applicable
              </li>
              <li>
                Supplementary technical and organizational measures to ensure
                data protection
              </li>
            </ul>
          </Section>

          <Section title="14. Third-Party Services and Links">
            <p>
              Our Service integrates with and may contain links to third-party
              services, including but not limited to TikTok, payment processors,
              and cloud infrastructure providers. We are not responsible for the
              privacy practices of these external services. We encourage you to
              review their respective privacy policies.
            </p>
          </Section>

          <Section title="15. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or
              TikTok&apos;s developer policies. We will notify you of material
              changes by posting the updated policy on our website, updating the
              &quot;Last updated&quot; date, and sending email notification for
              significant changes. Your continued use of the Service after
              changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="16. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, our data practices, or your TikTok data, please
              contact us through any of the following channels:
            </p>
            <ul>
              <li>
                <strong>Privacy Inquiries:</strong>{" "}
                <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a>
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
            <p>
              We are committed to addressing all privacy-related inquiries
              promptly and will respond within 45 days of receiving your request.
            </p>
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
              href="/terms"
              className="text-sm text-slate-dark hover:text-white transition-colors"
            >
              Terms of Service
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
