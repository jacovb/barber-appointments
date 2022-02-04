export default function PriceItem({ treatment, handleBooking }) {
  return (
    <div className="grid grid-cols-2 shadow-neumorph w-80 h-24 m-4 justify-around rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl mb-1">{treatment.title}</div>
        <div className="text-lg">£ {treatment.price}</div>
      </div>
      <button
        className="text-xl bg-red-700 rounded-r-lg border border-white border-opacity-0 hover:border-opacity-100 hover:bg-red-900"
        onClick={() => handleBooking()}
      >
        Book Now
      </button>
    </div>
  );
}
