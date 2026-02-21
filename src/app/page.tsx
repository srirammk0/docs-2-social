"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Send, GitPullRequest, Zap, BarChart, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-gradient-to-b from-black to-blue-950 text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          Docs2Social
        </div>
        <button className="px-5 py-2 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm mb-8 text-blue-300">
          <Sparkles className="w-4 h-4" />
          <span>The Repurposing Engine for Founders</span>
        </motion.div>
        
        <motion.h1 {...fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 leading-tight">
          Ship the feature.<br/>We'll do the marketing.
        </motion.h1>
        
        <motion.p {...fadeInUp} className="text-xl text-blue-200/80 mb-10 max-w-2xl leading-relaxed">
          Automatically turn your GitHub commits, Notion docs, and changelogs into a week&apos;s worth of engaging Twitter threads and LinkedIn posts.
        </motion.p>

        <motion.div {...fadeInUp} className="w-full max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Join Waitlist <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-medium justify-center">
              <Send className="w-5 h-5" />
              <span>You&apos;re on the list! Keep an eye on your inbox.</span>
            </div>
          )}
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
            <p className="text-blue-200/60 max-w-xl mx-auto">Three simple steps to automate your developer marketing workflow.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GitPullRequest, title: "1. Connect Workflows", desc: "Link your GitHub repos, Notion workspaces, or Readme files." },
              { icon: Zap, title: "2. Ship Code & Docs", desc: "Just do what you do best. Write code, document it, and push the release." },
              { icon: Send, title: "3. AI Auto-Publishes", desc: "Gemini 3 Pro reads your updates and drafts native social media threads instantly." }
            ].map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-24 max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Indie Hackers</h2>
          <p className="text-blue-200/60 max-w-xl mx-auto">Everything you need to grow your audience without burning out.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "No Cringe Hashtags", desc: "Our AI is trained specifically on high-performing, authentic developer Twitter threads." },
            { title: "Approval Queue", desc: "Review every drafted post before it goes live, or set it to fully autonomous." },
            { title: "Multi-Platform Formatting", desc: "Threads for Twitter, long-form for LinkedIn, visual summaries for Instagram." },
            { title: "Engagement Analytics", desc: "Track which features your audience cares about the most." }
          ].map((feature, i) => (
            <motion.div key={i} {...fadeInUp} className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
              <div>
                <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                <p className="text-blue-200/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-24 border-t border-white/5 bg-blue-950/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to stop doing your own marketing?</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
            Join the Waitlist
          </button>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-8 text-center text-sm text-blue-200/40 border-t border-white/5">
        <p>© 2026 Docs2Social. Built with OpenClaw.</p>
      </footer>
    </main>
  );
}