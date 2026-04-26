import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data produk hardcoded (sama seperti di list)
const products = [
  {
    id: 1,
    name: "I am smiling and excited!",
    price: 29.0,
    salePrice: 19.12,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/101/400/300",
    description: "This product will make you smile and feel excited.",
    stock: 10,
  },
  {
    id: 2,
    name: "I am smiling and excited! (Blue)",
    price: 29.0,
    salePrice: 28.72,
    originalPrice: 29.0,
    hasSale: true,
    image: "https://picsum.photos/id/102/400/300",
    description: "Blue variant, same excitement.",
    stock: 5,
  },
  {
    id: 3,
    name: "The best way to...",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/103/400/300",
    description: "Find the best way to enjoy your day.",
    stock: 15,
  },
  {
    id: 4,
    name: "The ultimate life change moment...",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/104/400/300",
    description: "Transform your life with this companion.",
    stock: 3,
  },
  {
    id: 5,
    name: "TODAY GOOD DAY",
    price: 29.0,
    hasSale: false,
    image: "https://picsum.photos/id/105/400/300",
    description: "Start your day right.",
    stock: 20,
  },
  {
    id: 6,
    name: "My day is going great today.",
    price: 11.9,
    hasSale: false,
    image: "https://picsum.photos/id/106/400/300",
    description: "Express positive mood.",
    stock: 8,
  },
  {
    id: 7,
    name: "My day is going great today. (Grey)",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/107/400/300",
    description: "Grey version.",
    stock: 12,
  },
  {
    id: 8,
    name: "My day is going great today. (Black)",
    price: 11.5,
    hasSale: false,
    image: "https://picsum.photos/id/108/400/300",
    description: "Black edition.",
    stock: 7,
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const displayPrice = product.salePrice || product.price;
  const originalPrice = product.originalPrice || null;
  const hasSale = product.hasSale && product.salePrice;

  const addToCart = () => {
    // Ambil cart dari localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = existingCart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${quantity} item(s) added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-baseline gap-2 mb-4">
            {hasSale ? (
              <>
                <span className="text-gray-400 line-through text-xl">
                  ${originalPrice.toFixed(2)}
                </span>
                <span className="text-red-600 font-bold text-3xl">
                  ${displayPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-gray-900 font-bold text-3xl">
                ${displayPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-sm text-green-600 mb-4">
            Stock: {product.stock} available
          </p>
          <div className="flex items-center gap-4 mb-6">
            <label className="font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.min(
                    product.stock,
                    Math.max(1, parseInt(e.target.value) || 1),
                  ),
                )
              }
              className="w-20 border border-gray-300 rounded px-2 py-1 text-center"
            />
          </div>
          <button
            onClick={addToCart}
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
