import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        
        <img src="https://kalles-5.myshopify.com/cdn/shop/files/kalles.svg?v=1717404087&width=190" alt="" />

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>
                {link.name}
              </Link>
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