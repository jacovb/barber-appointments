import { ScissorsIcon } from "@heroicons/react/solid";

export default function BarberNameSmall() {
  return (
    <div className="w-40 font-Raleway text-2xl flex flex-col items-center">
      <div>The London</div>
      <div>Barber Co.</div>
      <ScissorsIcon className="h-9 w-9 mt-2" />
    </div>
  );
}
