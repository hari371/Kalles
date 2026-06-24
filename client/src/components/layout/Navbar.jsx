import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white shadow">
      <div className="container-custom flex justify-between items-center py-4">
          <Link to="/">
            <img src="https://kalles-5.myshopify.com/cdn/shop/files/kalles.svg?v=1717404087&width=190" alt="Kalles Logo" />
          </Link>

           <ul className="flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}
                  className={({ isActive }) =>
                  isActive ? "text-blue-500 transition-colors ease-in-out duration-500" : "text-black hover:text-blue-300 transition-colors ease-in-out duration-500"
                }>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button>Search</button>
            <button>Account</button>
            <button>Wishlist</button>
            <button>Cart</button>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;