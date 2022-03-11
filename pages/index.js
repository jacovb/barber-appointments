import BookingModal from "../components/BookingModal";
import BookButtonLarge from "../components/BookButtonLarge";
import Image from "next/image";
import BarberShopImage2 from "../images/BarberShopImage2.jpeg";

export default function Home() {
  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      <div className="flex flex-row items-center justify-center pt-12">
        <Image
          alt="Barbershop Interior"
          src={BarberShopImage2}
          width={400}
          height={300}
        />
        <div className="flex flex-col items-center text-3xl pl-6">
          <p className="text-4xl">BOOK YOUR SPOT</p>
          <div className="w-56 h-px bg-white my-8" />
          <BookButtonLarge />
        </div>
      </div>
      <BookingModal />
    </div>
  );
}
