"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Innovación al alcance de tus manos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-gray-400 max-w-2xl"
      >
        Promociona tus laptops, teclados, accesorios y programas con estilo profesional.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <a
          href="/products"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 rounded-xl"
        >
          Ver productos
        </a>
      </motion.div>
    </section>
  );
}
