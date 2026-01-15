import { FaTimes } from "react-icons/fa";

function FavoriteItems({ favorites, handleRemoveFavorite }) {
    const total = favorites.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  return(
    <div className="bg-gray-400 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Favorite Items</h2>
{favorites.length === 0 ? (
        <p className="text-gray-500">No items added</p>
      ) : (
        <div className="space-y-3">
          {favorites.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  ৳ {item.currentBidPrice} · {item.bidsCount} bids
                </p>
              </div>

              <FaTimes
                onClick={() => handleRemoveFavorite(item.id)}
                className="cursor-pointer text-red-500"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 font-semibold">
        Total: ৳ {total}
      </div>

    </div>
  )
}

export default FavoriteItems;
