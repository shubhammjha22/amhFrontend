"use client";
import { Button } from "../../ui/button";
import {
  ArrowLeft,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Award,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Building,
  Cog,
  Scale,
  Eye,
  Headphones,
  Database,
} from "lucide-react";

import Image from "next/image";

export function AboutOutScaleHeader({ onBack = () => {} }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-black via-green-900/20 to-black overflow-hidden">
        {/* Technology Background Elements */}
        <div className="absolute inset-0 opacity-60">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-16 left-16 w-28 h-28 bg-green-500/25 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-36 h-36 bg-green-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400/35 rounded-full blur-md"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-green-400/25 rounded-full blur-xl"></div>
          <div className="absolute top-2/3 left-12 w-16 h-16 bg-green-500/40 rounded-full blur-sm"></div>

          {/* Circuit-like Lines */}
          <div className="absolute top-24 left-1/3 w-px h-32 bg-gradient-to-b from-green-500/80 to-transparent"></div>
          <div className="absolute top-24 left-1/3 w-32 h-px bg-gradient-to-r from-green-500/80 to-transparent"></div>
          <div className="absolute bottom-32 right-1/4 w-px h-28 bg-gradient-to-b from-green-400/60 to-transparent"></div>
          <div className="absolute bottom-32 right-1/4 w-28 h-px bg-gradient-to-l from-green-400/60 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-green-500/70 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/5 w-24 h-px bg-gradient-to-r from-green-400/70 to-transparent"></div>

          {/* Tech Icons */}
          <div className="absolute top-20 right-24 text-green-500/40">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="absolute bottom-28 left-24 text-green-400/35">
            <Shield className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-20 text-green-400/40">
            <Target className="w-10 h-10" />
          </div>
          <div className="absolute top-1/4 left-1/5 text-green-500/45">
            <Zap className="w-7 h-7" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-green-400/35">
            <BarChart3 className="w-9 h-9" />
          </div>
          <div className="absolute top-2/3 left-1/4 text-green-500/40">
            <Users className="w-6 h-6" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Additional Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-green-900/5 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">
                  About Outscale Partners
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
                We Don't Just Support Growth.
                <br />
                <span className="text-green-400">We Engineer It.</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed">
                At Outscale Partners, we believe growth shouldn't come with
                growing pains. We're here to eliminate the friction that slows
                modern businesses down — the hidden inefficiencies, overloaded
                teams, outdated workflows, and operational blind spots that
                quietly drain momentum just when you're ready to scale.
              </p>

              <p className="text-lg text-gray-400">
                We partner with ambitious organizations that think bigger than
                average — those who know that operational excellence isn't just
                a back-office function, but a growth catalyst.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 group flex items-center"
                  onClick={onBack}
                >
                  Take Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-200"
                  onClick={onBack}
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={500}
                  width={500}
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern business team collaborating on growth strategies"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Outscale is a strategic operations partner. We plug directly into
              your business to handle the critical areas that typically get
              sidelined as you grow:
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              But we don't stop at coverage — we bring precision. Our globally
              distributed teams, AI-enabled systems, and proven operational
              frameworks are designed to move fast, think ahead, and execute
              with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* People Operations */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Users className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl text-white mb-4">People Operations</h3>
              <p className="text-gray-300 leading-relaxed">
                From HR systems to talent management, we streamline your people
                processes to scale efficiently while maintaining culture and
                compliance.
              </p>
            </div>

            {/* Finance & Accounting */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <BarChart3 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Finance & Accounting</h3>
              <p className="text-gray-300 leading-relaxed">
                Clean books, automated reporting, and strategic financial
                insights that give you confidence in every business decision.
              </p>
            </div>

            {/* Technology & Automation */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Cog className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl text-white mb-4">
                Technology & Automation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Smart systems that eliminate manual work, reduce errors, and
                give your team time to focus on high-value activities.
              </p>
            </div>

            {/* Legal & Compliance */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                <Scale className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Legal & Compliance</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead of regulatory requirements with proactive compliance
                management and risk mitigation strategies.
              </p>
            </div>

            {/* Data, Analytics & AI */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Database className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Data, Analytics & AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform data into actionable insights with AI-powered
                analytics that drive smarter, faster decision-making.
              </p>
            </div>

            {/* Customer Experience */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
                <Headphones className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Customer Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimize every touchpoint in your customer journey to increase
                satisfaction, retention, and lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl text-white">Why We Exist</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Behind every growth goal lies a tangle of processes, platforms,
                and people challenges. Most businesses tackle these reactively.
                We fix them proactively — before they become bottlenecks.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl text-white">
                  We were built to serve companies that:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Value elite execution and reliable outcomes.
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Want a real partner, not a traditional vendor.
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Are ready to scale smarter, faster, and with less noise.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Strategic business planning session"
                  className="w-full h-[400px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-purple-400/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Global Talent. Local Impact. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Global Talent.</h3>
                  <h3 className="text-2xl text-green-400">Local Impact.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Top-tier specialists embedded in your business — trained for
                speed, precision, and accountability.
              </p>
            </div>

            {/* Technology + Transparency. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Technology +</h3>
                  <h3 className="text-2xl text-blue-400">Transparency.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We implement automation and real-time dashboards that eliminate
                manual busywork and enable confident, data-driven decisions.
              </p>
            </div>

            {/* Built to Flex. Ready to Scale. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Built to Flex.</h3>
                  <h3 className="text-2xl text-purple-400">Ready to Scale.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're growing 30% YoY or tripling revenue, our systems
                are designed to keep pace — and push you further.
              </p>
            </div>

            {/* We're Selective — On Purpose. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">We're Selective —</h3>
                  <h3 className="text-2xl text-orange-400">On Purpose.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We don't work with everyone. We invest deeply in every
                partnership, aligning closely with companies that value
                operational strength and strategic clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={500}
                  width={500}
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovative technology workspace"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl lg:text-5xl text-white">Our Mission</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To redefine what it means to scale.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To replace chaos with clarity.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To give every partner the freedom to move boldly — without
                    the drag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              What's Next
            </h2>
            <p className="text-2xl text-gray-300 mb-4">
              Good companies keep up.{" "}
              <span className="text-green-400">Great companies outscale.</span>
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's find out what's holding you back — and how we can fix it.
            </p>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 mb-8">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">
                    👉 Take the Outscale Readiness Assessment
                  </span>
                </div>
                <p className="text-gray-300 text-lg">
                  Find out if your business is truly built to scale — or quietly
                  falling behind.
                </p>
              </div>

              <Button
                className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group"
                onClick={onBack}
              >
                Take the Assessment Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
