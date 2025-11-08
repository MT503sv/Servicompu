'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-gray-900/60 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <Link href="/" className="text-2xl font-bold text-blue-400">sservicompu</Link>
      <nav className="hidden md:flex gap-8">
        <Link href="/">Inicio</Link>
        <Link href="/products">Productos</Link>
        <Link href="/services">Programas</Link>
        <Link href="/contact">Contacto</Link>
      </nav>
    </header>
  );
}
