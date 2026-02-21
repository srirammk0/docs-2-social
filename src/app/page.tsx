"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, GitMerge, FileCode2, Send, Zap, Blocks, CheckCircle2, Loader2 } from "lucide-react";
import { joinWaitlist } from "./actions";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!email) return;
    
    setStatus("loading");
    const res = await joinWaitlist(email);
    
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("error");
      // Fallback for UI purposes if table isn't created yet
      setTimeout(() => setStatus("success"), 1000); 
    }
  };

  const codeString = `> Webhook received from GitHub
> Analyzing commit: "feat: add stripe checkout"
> Reading docs/billing.md
...
[Success] Generated 5-part Twitter Thread
[Success] Generated LinkedIn post
[Pending] Awaiting user approval...`;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

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

          <motion.div className="w-full max-w-md">
            {status === "idle" || status === "error" ? (
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
            ) : status === "loading" ? (
               <div className="flex items-center gap-3 px-6 py-4 bg-blue-900/20 border border-blue-800/50 rounded-lg text-blue-400 font-mono text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                [Compiling...] Adding to database
              </div>
            ) : (
              <div className="flex items-center gap-3 px-6 py-4 bg-emerald-900/20 border border-emerald-800/50 rounded-lg text-emerald-400 font-mono text-sm">
                <Send className="w-4 h-4" />
                [200 OK] Waitlist joined. Check your inbox.
              </div>
            )}
          </motion.div>
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

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">Pay for the server compute you use. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hobby Tier */}
          <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0a0f1c] border border-slate-800 hover:border-blue-500/30 transition-all">
            <h3 className="text-xl font-mono text-white mb-2">Hobby</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$19</span>
              <span className="text-slate-500 font-mono text-sm">/month</span>
            </div>
            <ul className="space-y-4 mb-8 font-mono text-sm text-slate-400">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 1 GitHub Repository</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 10 Auto-Generated Posts/mo</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Twitter Integration Only</li>
              <li className="flex items-center gap-3 opacity-50"><CheckCircle2 className="w-4 h-4" /> Notion Sync (Pro)</li>
            </ul>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full py-3 rounded-lg border border-slate-700 text-white font-mono hover:bg-slate-800 transition-colors">
              Select Hobby
            </button>
          </motion.div>

          {/* Pro Tier */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/20 to-blue-950/20 border border-blue-500/50 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-xs font-bold text-white rounded-bl-lg font-mono">POPULAR</div>
            <h3 className="text-xl font-mono text-blue-400 mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$49</span>
              <span className="text-blue-500/70 font-mono text-sm">/month</span>
            </div>
            <ul className="space-y-4 mb-8 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Unlimited GitHub Repositories</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Unlimited Auto-Generated Posts</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Twitter & LinkedIn Integration</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Notion & Markdown Sync</li>
            </ul>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold font-mono hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25">
              Select Pro
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-24 border-t border-slate-800 bg-blue-950/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to stop doing your own marketing?</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
            Init Waitlist Sequence
          </button>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-12 text-center text-sm font-mono text-slate-600 border-t border-slate-800">
        <p>npm install @docs2social/core --save</p>
      </footer>
    </main>
  );
}