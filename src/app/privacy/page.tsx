import { Metadata } from "next";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Veltrix",
  description: "Veltrix privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground">
      <nav className="border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Veltrix</span>
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate mb-12">
          Last updated: March 11, 2026
        </p>

        <div className="prose-custom space-y-8">
          <Section title="1. Introduction">
            <p>
              Welcome to Veltrix (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are
              committed to protecting your privacy and personal data. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our
              website and use our AI-powered e-commerce analytics platform for TikTok Shop
              (&quot;Service&quot;).
            </p>
            <p>
              By accessing or using our Service, you agree to this Privacy Policy. If you do not
              agree, please discontinue use of the Service immediately.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h4>2.1 Personal Information</h4>
            <p>We may collect the following personal information when you register or use our Service:</p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Account credentials (username and encrypted password)</li>
              <li>Billing and payment information (processed securely via third-party payment providers)</li>
              <li>Company or business name</li>
              <li>TikTok Shop account information (as authorized by you)</li>
            </ul>

            <h4>2.2 Usage Data</h4>
            <p>We automatically collect certain information when you access our Service:</p>
            <ul>
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, features used, and time spent on the Service</li>
              <li>Referring URLs and search queries</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h4>2.3 TikTok Shop Data</h4>
            <p>
              Through our platform, we collect and analyze publicly available TikTok Shop data,
              including product listings, creator profiles, video performance metrics, and
              livestream data. This data is gathered from public sources and processed using
              our AI models to provide analytics and insights.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our Service</li>
              <li>To process your account registration and manage your subscription</li>
              <li>To deliver AI-powered analytics, insights, and recommendations</li>
              <li>To communicate with you about updates, features, and support</li>
              <li>To process payments and prevent fraud</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist in operating our
                platform (e.g., hosting, payment processing, analytics)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, regulation, or legal
                process
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize us to share your
                information
              </li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement industry-standard security measures to protect your personal data,
              including encryption in transit (TLS/SSL) and at rest, access controls, and regular
              security audits. However, no method of electronic transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as
              needed to provide our Service. We may retain certain data for longer periods as
              required by law or for legitimate business purposes such as resolving disputes
              and enforcing agreements.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw previously given consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a>.
            </p>
          </Section>

          <Section title="8. Cookies and Tracking">
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage,
              and deliver personalized content. You can manage cookie preferences through your
              browser settings. Note that disabling cookies may affect the functionality of our
              Service.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              Our Service may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these external sites. We encourage you to
              review their privacy policies before providing any personal information.
            </p>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <p>
              Our Service is not intended for individuals under the age of 18. We do not knowingly
              collect personal information from children. If we become aware that we have collected
              data from a minor, we will take steps to delete it promptly.
            </p>
          </Section>

          <Section title="11. International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your
              country of residence. We ensure appropriate safeguards are in place to protect your
              data in accordance with applicable data protection laws.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the updated policy on our website and updating the &quot;Last
              updated&quot; date. Your continued use of the Service after changes constitutes
              acceptance of the revised policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@veltrix.io">privacy@veltrix.io</a></li>
              <li>Website: <a href="https://veltrix.io">https://veltrix.io</a></li>
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
            <a href="/" className="text-sm text-slate-dark hover:text-white transition-colors">
              Home
            </a>
            <a href="/terms" className="text-sm text-slate-dark hover:text-white transition-colors">
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
