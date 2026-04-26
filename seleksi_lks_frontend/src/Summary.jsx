import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  const [orderNumber] = useState(
    () =>
      `ORD-${Math.floor(Math.random() * 1000000)}-${Date.now().toString().slice(-4)}`,
  );

  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-green-50 border border-green-200 rounded-lg p-8">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>
        <div className="bg-white rounded-md p-4 inline-block mx-auto mb-6">
          <p className="text-sm text-gray-500">Order Reference Number</p>
          <p className="text-xl font-mono font-bold text-gray-900">
            {orderNumber}
          </p>
        </div>
        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to your email address.
        </p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SummaryPage;
