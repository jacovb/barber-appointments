import { ScissorsIcon } from "@heroicons/react/outline";

export default function BarberName() {
  return (
    <div className="w-96 text-white font-Raleway text-6xl flex flex-col items-center mr-12">
      <div>The London</div>
      <div>Barber Co.</div>
      <ScissorsIcon className="h-20 w-20 mt-8" />
    </div>
  );
}
