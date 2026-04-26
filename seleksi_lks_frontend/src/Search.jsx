import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";

// Data produk hardcoded (sama seperti di list)
const products = [
  {
    id: 1,
    name: "I am smiling and excited!",
    price: 29.0,
    salePrice: 19.12,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/101/300/200",
  },
  {
    id: 2,
    name: "I am smiling and excited! (Blue)",
    price: 29.0,
    salePrice: 28.72,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/102/300/200",
  },
  {
    id: 3,
    name: "The best way to...",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/103/300/200",
  },
  {
    id: 4,
    name: "The ultimate life change moment...",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/104/300/200",
  },
  {
    id: 5,
    name: "TODAY GOOD DAY",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/105/300/200",
  },
  {
    id: 6,
    name: "My day is going great today.",
    price: 11.9,
    hasSale: false,
    image: "https://picsum.photos/id/106/300/200",
  },
  {
    id: 7,
    name: "My day is going great today. (Grey)",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/107/300/200",
  },
  {
    id: 8,
    name: "My day is going great today. (Black)",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/108/300/200",
  },
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);
  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-black focus:border-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>

      {query && (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Results for: "{query}" ({filteredProducts.length})
          </h2>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-12">
              No products found.
            </p>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
