export default function ContactPage() {
  return (
    <section className="px-8 py-24 bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-10">Contáctanos</h3>
      <form className="max-w-lg mx-auto flex flex-col gap-5">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <textarea
          rows={4}
          placeholder="Tu mensaje"
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
