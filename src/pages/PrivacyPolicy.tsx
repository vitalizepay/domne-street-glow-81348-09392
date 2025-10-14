import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective Date: 15-October-2025</p>
        <p className="text-sm text-muted-foreground mb-8">Website: www.domine.in</p>
        <p className="mb-8">Operated by: Domine Lifestyle Pvt. Ltd. ("We", "Our", "Us")</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Domine Lifestyle Pvt. Ltd. ("Domine") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website www.domine.in, interact with our services, or make purchases online or in-store.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            By using our website or providing your personal data, you agree to this Privacy Policy and consent to our processing of your data as outlined below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect the following types of personal information from you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Basic Details:</strong> Name, address, phone number, email, gender, date of birth, and anniversaries.</li>
            <li><strong>Transaction Details:</strong> Order history, payment status, preferences, and returns or exchanges.</li>
            <li><strong>Browsing Data:</strong> Device type, operating system, IP address, browser type, access times, and pages visited.</li>
            <li><strong>Marketing Data:</strong> Interests, hobbies, preferences, and participation in offers or loyalty programs.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We collect data directly from you, automatically through cookies and analytics tools, and from third parties such as delivery partners or social media platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Register and manage your Domine account;</li>
            <li>Process your purchases, returns, and exchanges;</li>
            <li>Provide customer service and resolve queries;</li>
            <li>Send order confirmations, updates, and relevant notifications;</li>
            <li>Communicate about new collections, offers, and loyalty programs;</li>
            <li>Improve our website, services, and shopping experience;</li>
            <li>Personalize marketing and promotional content;</li>
            <li>Comply with applicable legal requirements.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            If you wish to stop receiving promotional messages, you can click "Unsubscribe" in any marketing email or contact our Grievance Officer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website uses cookies to enhance your browsing experience. Cookies help us recognize returning users, save preferences, and analyze website performance. You can disable cookies in your browser settings; however, some features of the site may not function properly.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            For more details about cookies and managing them, visit www.allaboutcookies.org.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is stored on secure servers provided by trusted third-party providers. We use SSL (Secure Socket Layer) encryption and follow PCI-DSS standards for handling online payments.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            While we take reasonable measures to protect your data, no electronic transmission is completely secure. In case of any breach involving your data, we will notify you within 48 hours of becoming aware of it.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            You are responsible for maintaining the confidentiality of your login credentials and ensuring accuracy of the personal data you provide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Domine.in does not store your payment card or banking details. All payments are processed through secure and compliant payment gateways. We will never request sensitive financial information directly via phone, SMS, or email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Our affiliates, franchisees, or subsidiaries;</li>
            <li>Service providers who help operate our business (e.g., logistics, marketing, analytics);</li>
            <li>Legal or government authorities when required by law;</li>
            <li>Third parties during mergers, acquisitions, or business restructuring.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            All third parties are required to handle your data in compliance with applicable privacy laws and this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Retention and Deletion</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal data for as long as necessary to provide services or as required by law. You can request deletion of your account anytime by writing to us or using your Domine account settings.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Upon deletion, your order history, loyalty points, and saved preferences will be permanently erased.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access, correct, or delete your personal information;</li>
            <li>Withdraw consent for marketing communication;</li>
            <li>Request data portability, where applicable;</li>
            <li>Lodge a complaint with the concerned data protection authority.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Links to Third-Party Sites</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to third-party platforms (e.g., payment gateways, delivery partners, or social media). Domine is not responsible for their privacy practices. Please review the privacy policies of any external sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Social Media Integration</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our site may include plugins or links for social media sharing. These may collect data directly from you in accordance with their own policies. Domine does not control or assume liability for data shared through such platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may revise this Privacy Policy periodically. The updated version will be posted on this page with a revised "Last Updated" date. Continued use of our services after such updates constitutes your acceptance of the new policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any concerns, queries, or complaints regarding this Privacy Policy or how your data is used, please contact our Grievance Officer:
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <p className="font-semibold">Grievance Officer</p>
            <p>Domine Lifestyle Pvt. Ltd.</p>
            <p>Tirupur, India</p>
            <p>📧 support@domine.in</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Disclaimer and Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            Domine.in shall not be liable for indirect, incidental, or consequential losses arising out of any unauthorized access, loss, or misuse of your data. Our liability shall be limited to the amount paid by you for the specific product or service purchased from our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">15. Governing Law and Jurisdiction</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy shall be governed by and construed in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">16. Copyright Notice</h2>
          <p className="text-muted-foreground leading-relaxed">
            The contents of this Privacy Policy are copyrighted by Domine Lifestyle Pvt. Ltd. Reproduction, modification, or commercial use of this policy, in full or in part, is strictly prohibited.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
