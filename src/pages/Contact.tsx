import  { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Hero 
        image="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public"
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and bookings"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-lg text-gray-700">
              We're here to answer any questions you may have about MontanaHome student accommodation.
              Contact us using the form below or reach out directly through our contact details.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-montana-primary text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-montana-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p>Miluwani Block F, University of Venda, Thohoyandou, Limpopo, South Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-montana-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p>+27 (15) 962-8000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-montana-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p>montana@univen.ac.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-montana-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Office Hours</h4>
                      <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public" 
                  alt="Montana Location Map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-montana-primary">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 mb-8">
              Find answers to common questions about our accommodation and booking process.
            </p>
            
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-montana-primary">When can I apply for accommodation?</h3>
                <p className="text-gray-700">
                  Applications for the new academic year typically open in October of the previous year. 
                  However, you can inquire about availability at any time as vacancies may occur throughout the year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-montana-primary">What is included in the rental price?</h3>
                <p className="text-gray-700">
                  Your monthly rent includes water, electricity, Wi-Fi, security, weekly cleaning service, 
                  and access to all common facilities including study rooms and social areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-montana-primary">Is there a security deposit?</h3>
                <p className="text-gray-700">
                  Yes, a security deposit equal to one month's rent is required. This is refundable at the end 
                  of your lease agreement, subject to inspection for damages or outstanding payments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-montana-primary">Can I choose my roommate?</h3>
                <p className="text-gray-700">
                  Yes, for double rooms you can request a specific roommate. Both parties must 
                  indicate this preference on their applications for the request to be considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
 