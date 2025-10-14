import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Shipping, Returns & Refund Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Missing Cart or Wishlist Items</h2>
          
          <h3 className="text-xl font-medium mb-3">My cart is empty — what happened?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With our new website upgrade, items in older carts couldn't be migrated. Please re-add your favorite Domine styles on the refreshed site.
          </p>

          <h3 className="text-xl font-medium mb-3">My wishlist is gone!</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wishlists from the previous version weren't carried over. Explore the latest drops and save your new favorites.
          </p>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Need help?</h3>
            <p>📧 Email: support@domine.in</p>
            <p>📞 Call: +91 97918 81884 (10 AM – 7 PM, Mon–Sat)</p>
            <p>💬 WhatsApp: <a href="https://wa.me/919791881884" className="text-primary hover:underline">https://wa.me/919791881884</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Track via the link shared by SMS/email or click "Track Order" on the site and enter your Order ID/AWB.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            <strong>Note:</strong> Tracking activates within 24 hours after dispatch.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Split Shipments:</strong> Your order may arrive in parts so you get items faster.</li>
            <li><strong>Delays/Cancellations:</strong> If overdue, email support@domine.in with your order number.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Timeline:</strong> Most orders arrive in 5–10 business days after confirmation (updates via SMS/email).</li>
            <li><strong>Charges:</strong> ₹99 on orders below ₹1,499; free shipping at ₹1,499+. (Shipping fees are non-refundable.)</li>
            <li><strong>International:</strong> Deliveries within India only (international cards accepted).</li>
            <li><strong>Missed Delivery:</strong> After two failed attempts, parcels return to our warehouse. Prepaid orders are refunded as Domine Credits.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payments</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Pay on Delivery (COD):</strong> Available on most pin codes; pay via cash/UPI/card on delivery.</li>
            <li><strong>Online:</strong> Major cards, UPI, net banking, and wallets via secure, PCI-DSS compliant gateways.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Returns, Refunds & Cancellations</h2>
          
          <h3 className="text-xl font-medium mb-3 mt-6">Order Cancellation</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Cancel before dispatch:</strong><br />
            My Account → Orders → Select Product → Cancel<br />
            If already shipped, refuse delivery; refund starts after it returns to our warehouse.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">Return Policy</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Initiate returns within 15 days of delivery:</strong><br />
            My Account → Orders → Select Product → Return<br />
            We'll arrange a doorstep pickup after your request is processed.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li><strong>Not eligible (final sale/personal use):</strong> innerwear, masks, socks, swimwear; and select accessories (e.g., sunglasses, fragrances, jewelry).</li>
            <li>Items must be unused, unwashed, and in original packaging with all tags/labels.</li>
            <li>Refunds begin after quality check, usually 5–7 working days post receipt at our facility.</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">Refunds</h3>
          
          <h4 className="text-lg font-medium mb-2">1) COD Orders</h4>
          <p className="text-muted-foreground mb-2">Choose one:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li><strong>Domine Credits (emailed):</strong> Issued and sent to your registered email within 2–3 working days after we receive your return.</li>
            <li><strong>Bank Transfer:</strong> We'll email/SMS you a secure link post-receipt to add bank details; refund completes in 3–5 working days.</li>
          </ul>

          <h4 className="text-lg font-medium mb-2">2) Prepaid Orders</h4>
          <p className="text-muted-foreground mb-2">Choose one:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li><strong>Back to Source:</strong> Refund to the original payment method (within up to 5 working days after we receive your return).</li>
            <li><strong>Domine Credits (emailed):</strong> Issued and sent to your registered email for future purchases.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            Refunds aren't processed on Sundays/public holidays/non-working days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Promo Codes & Final Sale</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Refunds reflect only the amount paid after discounts.</li>
            <li>Orders placed with non-returnable/final-sale codes aren't eligible for return or exchange.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fair Usage Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To keep shopping seamless for everyone, repeated returns or refusals of COD parcels may lead us to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>levy a nominal shipping fee,</li>
            <li>disable COD, and/or</li>
            <li>restrict orders for certain accounts or pin codes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Domine Credits</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Credits are issued and delivered to your registered email (watch your inbox/spam).</li>
            <li>Valid for 12 months from issuance.</li>
            <li>Usable over multiple transactions on www.domine.in.</li>
            <li>Total credit balance may be limited (e.g., operational cap such as ₹10,000).</li>
            <li>Cannot be combined with E-Gift Vouchers in a single transaction.</li>
            <li>Non-transferable & non-refundable.</li>
            <li>Returns paid via credits are refunded as credits (emailed again on re-issue).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Domine E-Gift Voucher — Key Terms</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Valid only on www.domine.in</li>
            <li>Valid for 12 months from purchase</li>
            <li>Single-use; any leftover value is forfeited post purchase</li>
            <li>One voucher per transaction</li>
            <li>Excess over voucher value payable via other payment methods</li>
            <li>Non-refundable/non-transferable</li>
            <li>Refunds for purchases made with vouchers are issued as store credit only</li>
            <li>May be restricted during mega promotions/special sale events</li>
            <li>Voucher email sent to your registered email within 24 hours (check spam if not received)</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
