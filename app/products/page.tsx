'use client';
import { motion } from 'framer-motion';

const productos = [
  { nombre: 'Laptop Pro', img: '/images/Laptop.webp' },
  { nombre: 'Teclado Mecánico', img: '/images/Teclado.webp' },
  { nombre: 'Mouse Inalámbrico', img: '/images/product3.jpg' },
];

export default function ProductsPage() {
  return (
    <section className="px-8 py-24 bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <img
              src={item.img}
              alt={item.nombre}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h4 className="text-xl font-semibold mb-2">{item.nombre}</h4>
            <p className="text-gray-400 mb-3">Alta calidad y rendimiento garantizado.</p>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
              Más detalles
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
