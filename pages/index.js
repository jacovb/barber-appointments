import BookingSideBar from "../components/BookingSideBar";
import BarberName from "../components/BarberName";

export default function Home() {
  return (
    <div className="bg-neumorph min-h-screen text-white pb-8">
      <BarberName />
      <BookingSideBar />
    </div>
  );
}
