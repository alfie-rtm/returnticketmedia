"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg">Return Ticket Media</span>
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
          >
            Get in touch
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-4">AI-Powered Influencer Marketing</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
            The only influencer agency run by someone who built 10M followers
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Alfie Richards built &apos;Alfie the Angel&apos; to 10 million followers in China. 
            Now he helps AI, SaaS, and fintech brands find the right creators and get real results.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Start a project
            </button>
            <a href="#work" className="px-6 py-3 border border-black rounded hover:bg-gray-50">
              See our work
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What we do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Nano-Creator Headhunting</h3>
              <p className="text-gray-600 text-sm">Find small, hyper-engaged creators (1K-50K) that drive real conversions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Influencer Strategy</h3>
              <p className="text-gray-600 text-sm">Full campaign planning from creator profile to KPIs to content calendar.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Campaign Management</h3>
              <p className="text-gray-600 text-sm">We handle outreach, negotiation, contracts, and performance reporting.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Creator Brand Building</h3>
              <p className="text-gray-600 text-sm">Help creators build sustainable personal brands and find better partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Selected work</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-500">Timothy Almut</span>
                <span className="text-2xl font-bold">£3K/mo</span>
              </div>
              <h3 className="font-semibold mb-1">Consistent lead flow</h3>
              <p className="text-gray-600 text-sm">Found niche finance creators on LinkedIn and Instagram for a consultancy serving high-net-worth individuals.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-500">Suhit</span>
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <h3 className="font-semibold mb-1">Post-exit brand building</h3>
              <p className="text-gray-600 text-sm">Connected with tech and entrepreneurship creators to establish thought leadership after selling his company.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-500">AI SaaS Startup</span>
                <span className="text-2xl font-bold">2,400</span>
              </div>
              <h3 className="font-semibold mb-1">Waitlist signups</h3>
              <p className="text-gray-600 text-sm">Pre-launch campaign targeting AI enthusiasts and developers through niche educators on YouTube and Twitter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About the founder</h2>
          <p className="text-gray-600 mb-4 max-w-2xl">
            I built &apos;Alfie the Angel&apos; from zero to 10 million followers across platforms. 
            I&apos;ve been the creator, the strategist, and now the agency founder. 
            In 2024 we lost everything — the account, the IP, the whole business. 
            Return Ticket Media is the rebuild.
          </p>
          <div className="flex gap-8 text-sm">
            <div><span className="font-bold text-xl">10M+</span><p className="text-gray-500">Followers built</p></div>
            <div><span className="font-bold text-xl">500+</span><p className="text-gray-500">Brand partnerships</p></div>
            <div><span className="font-bold text-xl">7</span><p className="text-gray-500">Years experience</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-gray-600 mb-6">Whether you&apos;re launching a product or scaling your influencer marketing.</p>
          <button 
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Start a project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <span>© 2026 Return Ticket Media</span>
          <span>Based in China · Serving globally</span>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Get in touch</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">×</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Work email" className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Company" className="w-full px-4 py-2 border rounded" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-2 border rounded"></textarea>
              <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Send message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
