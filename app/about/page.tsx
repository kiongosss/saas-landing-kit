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
import Link from "next/link";

export const metadata: Metadata = {
  title: 'About Us - SaaS Platform',
  description: 'Learn more about our company and our mission to help businesses grow with our SaaS solutions.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses with innovative SaaS solutions since {new Date().getFullYear() - 5}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in {new Date().getFullYear() - 5}, our company started with a simple mission: to create powerful yet simple-to-use software that solves real business problems.
              </p>
              <p>
                What began as a small team of passionate developers has grown into a thriving company serving thousands of customers worldwide.
              </p>
              <p>
                We believe in building products that not only meet but exceed our customers' expectations through continuous innovation and exceptional support.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To empower businesses of all sizes with intuitive, scalable, and affordable software solutions that drive growth and efficiency.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customer Success: Your success is our success</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Innovation: Constantly pushing boundaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Integrity: Honest and transparent in all we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Excellence: Striving for the best in everything</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Be part of thousands of businesses that trust our solutions to power their success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#pricing">View Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
