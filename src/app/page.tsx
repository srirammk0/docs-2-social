"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-black to-zinc-900 text-white selection:bg-purple-500/30">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>The Ultimate Micro-SaaS Boilerplate</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
          Ship fast, flip faster.
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
          Next.js App Router, Supabase Auth & DB, Stripe Subscriptions, and Gemini AI. 
          Everything you need to go from idea to $1k MRR in a week.
        </p>

        <div className="flex gap-4">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
            <Rocket className="w-5 h-5" />
            Get Started
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-md">
            Documentation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

    </main>
  );
}