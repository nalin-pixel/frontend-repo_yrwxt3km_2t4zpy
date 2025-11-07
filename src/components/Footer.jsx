export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Explore Phaphund. All rights reserved.
          </p>
          <p className="text-gray-700 font-medium">
            Made with love — Shadab
          </p>
        </div>
      </div>
    </footer>
  );
}
