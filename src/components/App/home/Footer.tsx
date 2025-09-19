export default function Footer() {
    return (
      <footer className="bg-transparent">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left side */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Brian Ali. All rights reserved.
          </p>
  
          {/* Right side */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/brian-ali-aa8b862a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Lets build something great together.
            </a>
          </div>
        </div>
      </footer>
    );
  }
  