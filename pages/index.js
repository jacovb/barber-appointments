import BookingModal from "../components/BookingModal";
import BookButtonLarge from "../components/BookButtonLarge";

export default function Home() {
  return (
    <div className="bg-neumorph min-h-min text-white pb-8">
      <div className="flex flex-col items-center text-3xl mt-6 py-12 bg-london bg-cover bg-top">
        <p className="text-4xl">BOOK YOUR SPOT</p>
        <div className="w-56 h-px bg-white my-8" />
        <BookButtonLarge />
      </div>
      <BookingModal />
    </div>
  );
}
