import BookingModal from "../components/BookingModal";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center bg-neumorph text-white h-screen">
        <h1 className="text-4xl my-6">Contact</h1>
        <div className="flex flex-col">
          <div className="flex flex-row m-3">
            <PhoneIcon className="w-6 h-6 text-gray-400" />
            <p className="ml-6">0207 900 8573</p>
          </div>
          <div className="flex flex-row m-3">
            <LocationMarkerIcon className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col">
              <p className="ml-6">35 Scrutton Street</p>
              <p className="ml-6">London</p>
              <p className="ml-6">EC2A 4HU</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.6295223796933!2d-0.08440108459943935!3d51.52329571736233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cafd63de835%3A0x424597e24b517e39!2s35%20Scrutton%20St%2C%20London%20EC2A%204HU!5e1!3m2!1sen!2suk!4v1646808630678!5m2!1sen!2suk"
          width="500"
          height="375"
          style={{ border: "0", filter: "grayscale(100%)" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <BookingModal />
    </>
  );
}
