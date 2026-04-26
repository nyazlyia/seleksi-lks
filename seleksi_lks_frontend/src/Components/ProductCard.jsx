import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const hasSale = product.hasSale && product.salePrice;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
          {hasSale && (
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
            {hasSale ? (
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
  );
};

export default ProductCard;
