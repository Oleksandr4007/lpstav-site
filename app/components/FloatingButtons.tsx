export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:+420774898947"
        className="w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center text-2xl shadow-2xl hover:bg-yellow-400 transition"
        aria-label="Zavolat"
      >
        📞
      </a>

      <a
        href="https://wa.me/420774898947"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-2xl hover:bg-green-400 transition"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}