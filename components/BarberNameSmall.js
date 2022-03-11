import { ScissorsIcon } from "@heroicons/react/outline";

export default function BarberNameSmall() {
  return (
    <div className="w-40 font-Raleway text-xl flex flex-col items-center">
      <div>The London</div>
      <div>Barber Co.</div>
      <ScissorsIcon className="h-7 w-7 mt-2" />
    </div>
  );
}
