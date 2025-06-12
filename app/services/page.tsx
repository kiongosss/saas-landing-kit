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
import { CheckCircle2, Zap, Shield, BarChart2, Code, Users, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our Services - SaaS Platform',
  description: 'Discover our comprehensive range of SaaS solutions designed to streamline your business operations and drive growth.'
};

const services = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning Fast Performance",
    description: "Our platform is optimized for speed, ensuring your team can work efficiently without any lag or downtime.",
    features: [
      "99.9% Uptime Guarantee",
      "Global CDN",
      "Advanced Caching"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data's security is our top priority with industry-leading encryption and compliance standards.",
    features: [
      "End-to-End Encryption",
      "GDPR & CCPA Compliant",
      "Regular Security Audits"
    ]
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics dashboard to make data-driven decisions.",
    features: [
      "Real-time Reporting",
      "Custom Dashboards",
      "Exportable Reports"
    ]
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Developer Friendly",
    description: "Extensive API and documentation to integrate with your existing tools and workflows.",
    features: [
      "RESTful API",
      "Webhooks",
      "Comprehensive Docs"
    ]
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Dedicated Support",
    description: "Our team of experts is here to help you get the most out of our platform.",
    features: [
      "24/7 Support",
      "Dedicated Account Manager",
      "Priority Response"
    ]
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and focus on what matters most for your business.",
    features: [
      "Workflow Automation",
      "Scheduled Tasks",
      "Custom Triggers"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to meet all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our solutions to power their success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#pricing">View Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
