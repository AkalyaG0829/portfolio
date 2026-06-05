export default function Navbar() {
  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2f3b52] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-xl font-semibold tracking-wide">
          Akalya G
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-indigo-300"
              onClick={() =>
                document.getElementById(item.toLowerCase())
                .scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}