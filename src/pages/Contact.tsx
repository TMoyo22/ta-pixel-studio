import { SocialLinks } from '../components/contact/SocialLinks';
import { ContactForm } from '../components/contact/ContactForm';

export function Contact() {
  return (
    <div className="min-h-screen">
    <section 
      className="bg-cover bg-center text-white py-32"
      style={{ backgroundImage: "url('/assets/contact_hero.jpg')" }} // Replace with your image path
    >
  <div className="container mx-auto px-6">
    <h1 className="font-jacques text-5xl mb-4">Contact Us</h1>
    <p className="text-xl">
      Reach out to T&A Pixel Studio for expert web development and digital
      marketing services tailored to Startups and SMEs.
    </p>
  </div>
</section>

     <section 
            className=" text-black flex items-center mt-20" 
          >
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-jacques text-5xl mb-7">
                Start Your Journey With Us
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover how T&A Pixel Studio can elavate your business through innovative digital solutions.
              </p>
            </div>
          </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-jacques text-3xl mb-8">Reach Out</h2>
              <p className="mb-12">Tell us what you need</p>
              <SocialLinks />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}