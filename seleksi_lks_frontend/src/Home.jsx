import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };
  const [cartCount, setCartCount] = useState(getCartCount);

  const products = [
    {
      id: 1,
      title: "I am smiling and excited!",
      originalPrice: 29.0,
      salePrice: 19.12,
      imageUrl: "https://picsum.photos/id/101/300/200",
      hasSale: true,
    },
    {
      id: 2,
      title: "I am smiling and excited!",
      originalPrice: 29.0,
      salePrice: 28.72,
      imageUrl: "https://picsum.photos/id/102/300/200",
      hasSale: true,
    },
    {
      id: 3,
      title: "The best way to...",
      price: 29.0,
      imageUrl: "https://picsum.photos/id/103/300/200",
      hasSale: false,
    },
    {
      id: 4,
      title: "The ultimate life change moment...",
      price: 29.0,
      imageUrl: "https://picsum.photos/id/104/300/200",
      hasSale: false,
    },
    {
      id: 5,
      title: "TODAY GOOD DAY",
      price: 29.0,
      imageUrl: "https://picsum.photos/id/105/300/200",
      hasSale: false,
    },
    {
      id: 6,
      title: "My day is going great today.",
      price: 11.9,
      imageUrl: "https://picsum.photos/id/106/300/200",
      hasSale: false,
    },
    {
      id: 7,
      title: "My day is going great today.",
      price: 11.5,
      imageUrl: "https://picsum.photos/id/107/300/200",
      hasSale: false,
    },
    {
      id: 8,
      title: "My day is going great today.",
      price: 11.5,
      imageUrl: "https://picsum.photos/id/108/300/200",
      hasSale: false,
    },
  ];

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    window.addEventListener("focus", updateCartCount);
    return () => window.removeEventListener("focus", updateCartCount);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="text-sm border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <Link
              to="/"
              className="text-gray-600 font-semibold hover:text-black transition"
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-5">
              <Link
                to="/login"
                className="flex items-center gap-1 text-gray-600 font-semibold hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Sign In
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-1 bg-gray-200 p-2 text-gray-600 hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6"
                  />
                </svg>
                <span>Cart ({cartCount})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-pink-200 font-bold text-xl tracking-tight"
            >
              T<span className="text-gray-400">ANIA</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/products"
                className="text-gray-700 font-bold hover:text-black transition"
              >
                CLOTHES
              </Link>
              <Link
                to="/products"
                className="text-gray-700 font-bold hover:text-black transition"
              >
                ACCESORIES
              </Link>
              <Link
                to="/products"
                className="text-gray-700 font-bold hover:text-black transition"
              >
                ART
              </Link>
            </div>
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
                <button type="submit" className="absolute left-3 top-2.5">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-black">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto px-8 bg-gray-50 sm:px-6 lg:px-16 py-8">
        <div>
          <img
            src="/src/assets/kucing.jpg"
            alt=""
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold m-8 text-center text-gray-900 tracking-tight">
            POPULAR PRODUCTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      NEW
                    </span>
                    {product.hasSale && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                        SALE
                      </span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-gray-800 line-clamp-2 min-h-14 mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-baseline justify-center flex-wrap gap-2">
                      {product.originalPrice ? (
                        <>
                          <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-red-600 font-bold text-xl">
                            ${product.salePrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-900 font-bold text-xl">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-white py-12 px-6 rounded-lg mb-16 text-center border-10 border-gray-200">
          <h3 className="text-5xl text-blue-500 font-bold mb-2">
            20% OFF ON CLOTHES
          </h3>
          <Link
            to="/products"
            className="mt-4 text-gray-900 px-6 py-2 rounded-md font-medium inline-block"
          >
            SEE MORE
          </Link>
        </div>

        <div className="mb-16 p-8 bg-white text-center">
          <h2 className="text-3xl font-bold mb-4">CUSTOM TEXT BLOCK</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, dolorum!
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolor, repudiandae, possimus, qui repellat quis iure dignissimos
              nulla quo nihil inventore quia nobis debitis! Laborum facere
              magnam sapiente fuga enim.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Get your store now and get special offers
            </h3>
            <div className="flex justify-center">
              <Link
                to="/register"
                className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
              >
                SUBSCRIBE
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the email notice.
            </p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">PRODUCTS</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/products" className="hover:text-black transition">
                    Fresh drop
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-black transition">
                    Neoprene
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-black transition">
                    Bags & bags
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                OUR COMPANY
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-black transition">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    To our subsidiaries of e.g.
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    Service provider
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black transition">
                    Store
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                YOUR ACCOUNT
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/login" className="hover:text-black transition">
                    Personal Info
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-black transition">
                    Owner
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-black transition">
                    Email id
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-black transition">
                    Address
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                STORE INFORMATION
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>My Store</li>
                <li>United States</li>
                <li>
                  <a
                    href="mailto:eng@yourstorefuture@gmail.com"
                    className="hover:text-black transition"
                  >
                    Email us
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:eng@yourstorefuture@gmail.com"
                    className="hover:text-black transition"
                  >
                    eng@yourstorefuture@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-6 text-center text-xs text-blue-400">
            &copy; {new Date().getFullYear()} Your Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
