import BookingModal from "../components/BookingModal";
import BookButtonLarge from "../components/BookButtonLarge";

export default function Home() {
  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      <div className="flex flex-col items-center text-3xl pt-12">
        <p className="text-4xl">BEAT THE BLUES</p>
        <div className="w-56 h-px bg-white my-8" />
        <BookButtonLarge />
      </div>
      <BookingModal />
    </div>
  );
}
