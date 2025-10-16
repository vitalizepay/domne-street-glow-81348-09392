import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12">
            About Domine
          </h1>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Who We Are
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Domine isn't just a clothing brand — it's an idea born from ambition, individuality, and the unstoppable energy of modern India.
                We started in Tirupur, Tamil Nadu — the textile capital of the country — with a bold dream: to create premium-quality fashion that combines global style with Indian authenticity.
              </p>
              <p>
                Our name, <strong className="text-foreground">Domine</strong>, is inspired by the word <strong className="text-foreground">Dominate</strong> — representing the attitude of confidence, focus, and determination that drives today's youth. We design for those who take charge — in life, in style, and in their story.
              </p>
              <p>
                Every Domine piece is a reflection of that mindset — clean, confident, and made for everyday dominance.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Our Journey
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                The idea for Domine began with a group of creators, designers, and entrepreneurs who believed that Indian-made fashion could stand shoulder-to-shoulder with the best in the world.
                We started small — a few designs, a small team, and a huge dream — to redefine everyday wear for India's new generation.
              </p>
              <p>
                From our first T-shirt drop to our upcoming capsule collections, we've built everything on passion, design excellence, and customer trust.
                Every success, every product, every story shared by our customers pushes us to raise the bar even higher.
              </p>
              <p>
                Today, Domine is more than an online store — it's a lifestyle movement representing creativity, comfort, and confidence for the modern Indian wardrobe.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Our Vision
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We envision a world where fashion isn't just about following trends — it's about creating your own.
                Our goal is to make trend-driven, affordable, and ethically-made fashion accessible to everyone who believes in expressing themselves through style.
              </p>
              <p>
                Domine is here to empower individuality, to break the stereotypes of fast fashion, and to celebrate confidence in every color, cut, and collection.
              </p>
              <p className="font-semibold text-foreground">
                We're not here to compete.<br />
                We're here to lead — ethically, creatively, and authentically.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Our Design Philosophy
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Domine, design is where art meets attitude.
                We draw inspiration from street culture, minimalist fashion, global youth trends, and the expressive energy of India's creative generation.
              </p>
              <p>
                Each collection reflects a balance between aesthetic simplicity and bold individuality — garments that speak without shouting.
                We design pieces that are versatile — made for the streets, the gym, the college, and the after-party.
              </p>
              <p className="font-semibold text-foreground mb-2">Our design DNA blends:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
                <li>Clean silhouettes with functional comfort.</li>
                <li>Bold graphic tees that tell stories.</li>
                <li>Quality fabrics that breathe, stretch, and last.</li>
                <li>Tailored fits that make you look sharp effortlessly.</li>
              </ul>
              <p>
                Every Domine outfit is built to make you feel confident from the inside out — because true style begins with comfort and ends with presence.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Craftsmanship & Quality
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We're proud to be made in India — from thread to finish.
                Our products are crafted in state-of-the-art manufacturing units in Tirupur, using globally certified fabrics and ethically sourced materials.
              </p>
              <p className="font-semibold text-foreground mb-2">Every Domine product undergoes:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
                <li>Multi-stage quality checks for durability and finish.</li>
                <li>Precision stitching for comfort and long wear.</li>
                <li>Soft-touch printing with eco-friendly inks.</li>
                <li>Shrink-resistant washing for lasting shape and feel.</li>
              </ul>
              <p className="font-semibold text-foreground">
                We don't mass-produce. We craft — thoughtfully, responsibly, and passionately.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Sustainability at Heart
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Domine, we believe fashion and responsibility can coexist.
                We are constantly working to make our operations more eco-friendly and sustainable through:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
                <li>Using bio-degradable packaging for all shipments.</li>
                <li>Reducing textile waste in production.</li>
                <li>Partnering with ethical mills for organic cotton and recycled materials.</li>
              </ul>
              <p>
                Our goal is to create a circular system — one that respects the planet, the people who make our clothes, and the customers who wear them.
              </p>
              <p className="font-semibold text-foreground">
                Because style shouldn't cost the earth — and at Domine, it never will.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Community & Culture
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We don't just sell clothes — we build connections.
                Our community, lovingly called the <strong className="text-foreground">#DomineNation</strong>, is made up of bold, creative, and forward-thinking individuals who represent the spirit of the brand.
              </p>
              <p>
                Through collaborations with local artists, creators, and influencers, we highlight real people and real stories — not just models.
                We support young designers, street photographers, and cultural events that celebrate youth identity and creativity.
              </p>
              <p>
                For us, fashion is culture, and Domine is proud to be a platform that amplifies the creative voices of India's next generation.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Customer Promise
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Your trust is our biggest win.
                That's why every step of your Domine journey — from browsing to delivery — is designed for comfort, transparency, and satisfaction.
              </p>
              <p className="font-semibold text-foreground mb-2">We offer:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
                <li>Fast & reliable shipping across India.</li>
                <li>Easy returns and refunds with no hidden conditions.</li>
                <li>Responsive customer support on WhatsApp and email.</li>
                <li>Secure online payments protected by encrypted gateways.</li>
              </ul>
              <p>
                We're not just here to sell; we're here to serve — with honesty, respect, and reliability.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Innovation & The Road Ahead
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Domine isn't standing still.
                We're constantly innovating — exploring AI-driven design tools, custom design studios, and limited-edition artist collaborations.
              </p>
              <p className="font-semibold text-foreground mb-2">Our upcoming projects include:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
                <li><strong className="text-foreground">Domine Studio</strong>: where customers can co-create their own T-shirt prints.</li>
                <li><strong className="text-foreground">Sustainable Capsule Line</strong>: minimal, organic, and future-friendly.</li>
                <li><strong className="text-foreground">Offline Experience Zones</strong>: immersive stores that blend fashion, technology, and community.</li>
              </ul>
              <p>
                We're building the future of Indian fashion — where creativity meets technology and ethics meet elegance.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12 bg-muted/30 p-6 sm:p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Join the Movement
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We're not just a brand — we're a mindset.
                To Domine is to lead with confidence, to own your identity, and to wear what defines you.
              </p>
              <p>
                Join thousands of creators, dreamers, and everyday hustlers who believe in living bold, thinking free, and dressing real.
              </p>
              <p>
                Follow our journey on<br />
                📸 Instagram, Facebook, and YouTube <strong className="text-foreground">@domine.in</strong><br />
                and become part of the <strong className="text-foreground">#DomineNation</strong>
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-foreground mt-4">
                Because at Domine,<br />
                ✨ Fashion isn't what you follow — it's what you create.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Contact Us
            </h2>
            <div className="space-y-2 text-base sm:text-lg text-muted-foreground">
              <p>📧 <a href="mailto:support@domine.in" className="text-foreground hover:text-accent transition-colors">support@domine.in</a></p>
              <p>📞 <a href="tel:+919994104442" className="text-foreground hover:text-accent transition-colors">+91 99941 04442</a></p>
              <p>📍 Tirupur, Tamil Nadu, India</p>
              <p>🌐 <a href="https://www.domine.in" className="text-foreground hover:text-accent transition-colors">www.domine.in</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
