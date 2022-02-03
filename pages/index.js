import BookingModalXX from "../components/BookingModalXX";
import BookButtonLarge from "../components/BookButtonLarge";
import BarberNameSmall from "../components/BarberNameSmall";

export default function Home() {
  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      <div className="flex flex-col items-center text-3xl pt-12">
        <p>BEAT THE BLUES</p>
        <div className="w-56 h-px bg-white my-8" />
        <BookButtonLarge />
      </div>
      <BookingModalXX />
    </div>
  );
}
