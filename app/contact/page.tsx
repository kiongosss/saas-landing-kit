/*
Project Name: SaaS Landing Page
Project URI: 
Description: A modern SaaS landing page built with Next.js and Tailwind CSS
Version: 1.0.0
Author: KaseeMoka
Author URI: https://github.com/kiongosss
*/

import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us - SaaS Platform',
  description: 'Get in touch with our team. We\'re here to help with any questions about our products and services.'
};

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email Us",
    description: "We'll get back to you within 24 hours",
    details: "support@saasplatform.com",
    link: "mailto:support@saasplatform.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Visit Us",
    description: "Come say hello at our office",
    details: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    link: "https://maps.google.com"
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Working Hours",
    description: "Our support team is available",
    details: "Monday - Friday: 9:00 AM - 6:00 PM (PST)",
    details2: "Weekend: Closed"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">First name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">Last name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="privacy-policy" 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                    required
                  />
                </div>
                <label htmlFor="privacy-policy" className="ml-3 text-sm text-muted-foreground">
                  I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              We'd love to hear from you. Here's how you can reach us.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        className="text-primary hover:underline inline-flex items-center mt-1"
                      >
                        {method.details}
                      </a>
                    ) : (
                      <p className="text-sm mt-1">
                        {method.details}<br />
                        {method.details2}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-muted rounded-xl p-6">
              <h3 className="font-medium flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Customer Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Our dedicated support team is here to help you with any questions or issues you might have.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="mailto:support@saasplatform.com">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-xl overflow-hidden h-96 bg-muted">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-medium mb-2">Our Office</h3>
              <p className="text-muted-foreground">123 Business Ave, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
