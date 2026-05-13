import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Have questions about our products or services? Our team is here to help you find the perfect technology solutions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">RKC Galaxy Showroom, Main Market Road, City Center</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 93341 65209</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@rkcgalaxy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg">
                <MessageSquare size={20} /> WhatsApp Us
              </button>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4">
              <MapPin size={48} />
              <p className="font-medium">Google Maps Integration</p>
            </div>
            {/* Replace with actual iframe if needed */}
            <div className="w-full h-full bg-gray-200"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
