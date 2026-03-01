import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const highlights = [
    "AI Generated Code",
    "Fully Responsive Layouts",
    "Production Ready Output",
  ];

  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      {/* Navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">GenWeb.ai</div>

          <div className="flex items-center gap-5">
            <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
              Pricing
            </div>

            <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero section */}
      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build Stunning Websites <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg"
        >
          Describe your idea and let AI generate a modern, responsive,
          production-ready website
        </motion.p>

        {/* fixed typo font-semibold */}
        <button className="mt-12 px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Card section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {/* added grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8"
            >
              <h1 className="text-xl font-semibold mb-3">{highlight}</h1>

              <p className="text-sm text-zinc-400">
                GenWeb.ai builds real websites - clean code, animations,
                responsiveness and scalable structure
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Left */}
          <div className="text-zinc-400">
            © {new Date().getFullYear()}
            <span className="text-white font-medium ml-1">GenWeb.ai</span>
          </div>

          {/* Center links */}
          <div className="flex gap-6 text-zinc-400">
            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Contact
            </span>
          </div>

          {/* Right */}
          <div className="flex gap-4 text-zinc-400">
            <span className="hover:text-white cursor-pointer transition">
              Twitter
            </span>
            <span className="hover:text-white cursor-pointer transition">
              GitHub
            </span>
            <span className="hover:text-white cursor-pointer transition">
              LinkedIn
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
