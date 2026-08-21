export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mi Marca
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black">
            Instagram
          </a>

          <a href="#contacto" className="hover:text-black">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
