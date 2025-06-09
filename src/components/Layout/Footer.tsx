export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} windrose.dev — Built with&nbsp;
      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-emerald-600"
      >
        Vite
      </a>{" "}
      &amp;&nbsp;
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-emerald-600"
      >
        Tailwind&nbsp;CSS
      </a>
    </footer>
  );
}
