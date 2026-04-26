import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "I am smiling and excited!",
    category: "Neoprene",
    price: 29.0,
    salePrice: 19.12,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/101/300/200",
  },
  {
    id: 2,
    name: "I am smiling and excited! (Blue)",
    category: "Neoprene",
    price: 29.0,
    salePrice: 28.72,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/102/300/200",
  },
  {
    id: 3,
    name: "The best way to...",
    category: "Fresh drop",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/103/300/200",
  },
  {
    id: 4,
    name: "The ultimate life change moment...",
    category: "Bags & bags",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/104/300/200",
  },
  {
    id: 5,
    name: "TODAY GOOD DAY",
    category: "Fresh drop",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/105/300/200",
  },
  {
    id: 6,
    name: "My day is going great today.",
    category: "Neoprene",
    price: 11.9,
    hasSale: false,
    image: "https://picsum.photos/id/106/300/200",
  },
  {
    id: 7,
    name: "My day is going great today. (Grey)",
    category: "Bags & bags",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/107/300/200",
  },
  {
    id: 8,
    name: "My day is going great today. (Black)",
    category: "Bags & bags",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/108/300/200",
  },
];

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "Fresh drop", "Neoprene", "Bags & bags"];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">PRODUCTS</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
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
              <div className="p-4">
                <h3 className="font-medium text-gray-800 line-clamp-2 min-h-14 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline flex-wrap gap-2">
                  {product.hasSale ? (
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
            </Link>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-12">No products found.</p>
      )}
    </div>
  );
};

export default ProductListPage;
