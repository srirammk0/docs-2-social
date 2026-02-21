"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, GitMerge, FileCode2, Send, Zap, Shield, Blocks } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const codeString = `> Webhook received from GitHub
> Analyzing commit: "feat: add stripe checkout"
> Reading docs/billing.md
...
[Success] Generated 5-part Twitter Thread
[Success] Generated LinkedIn post
[Pending] Awaiting user approval...`;

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 font-mono font-bold text-xl text-white">
          <Terminal className="w-6 h-6 text-blue-400" />
          docs2social
        </div>
        <button className="px-6 py-2 rounded border border-slate-700 hover:bg-slate-800 transition-colors font-mono text-sm">
          login
        </button>
      </nav>

      {/* Split Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-900/30 border border-blue-800 text-xs mb-8 text-blue-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            V1.0 Early Access
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            Ship code.<br/>
            <span className="text-blue-400">Not threads.</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
            Connect your repository. Every time you push a release or update documentation, our agent writes highly engaging, technical social media posts for you.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="git config user.email" 
                className="w-full sm:w-80 bg-[#111827] border border-slate-700 rounded-lg px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono text-sm transition-all"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                Init <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-4 bg-emerald-900/20 border border-emerald-800/50 rounded-lg text-emerald-400 font-mono text-sm">
              <Send className="w-4 h-4" />
              [200 OK] Waitlist joined. Check your inbox.
            </div>
          )}
        </motion.div>

        {/* Terminal Mockup */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full">
          <div className="rounded-xl bg-[#0d1117] border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#161b22]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">docs2social-agent ~ bash</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-emerald-400 whitespace-pre-wrap">
              {codeString}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Developer's Marketing Stack</h2>
          <p className="text-slate-400 max-w-2xl text-lg">You hate marketing. We hate bad APIs. So we built the perfect bridge between your code and your audience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group hover:border-blue-500/50 transition-all">
            <GitMerge className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">GitHub Native</h3>
            <p className="text-slate-400 leading-relaxed">Simply install our GitHub app. We listen for tags, releases, and PRs merged to main. No manual data entry required.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group hover:border-blue-500/50 transition-all">
            <FileCode2 className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Notion Sync</h3>
            <p className="text-slate-400 leading-relaxed">We sync with your public knowledge base to pull context.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group hover:border-blue-500/50 transition-all">
            <Zap className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Zero Cringe</h3>
            <p className="text-slate-400 leading-relaxed">No 🚀 emojis or "thread boys" formatting. Just solid engineering updates.</p>
          </div>
          <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group hover:border-blue-500/50 transition-all">
            <Blocks className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Multi-Platform Ready</h3>
            <p className="text-slate-400 leading-relaxed">We compile your technical updates into short-form threads for Twitter, and long-form technical deep dives for LinkedIn simultaneously.</p>
          </div>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-12 text-center text-sm font-mono text-slate-600 border-t border-slate-800">
        <p>npm install @docs2social/core --save</p>
      </footer>
    </main>
  );
}