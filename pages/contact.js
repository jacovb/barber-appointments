import BookButtonText from "../components/BookButtonText";
import BookingModal from "../components/BookingModal";
import {
  PhoneIcon,
  LocationMarkerIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

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
            <DesktopComputerIcon className="w-6 h-6 text-gray-400" />
            <BookButtonText />
          </div>
          <div className="flex flex-row m-3">
            <LocationMarkerIcon className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col">
              <p className="ml-6">91 Bourne Street</p>
              <p className="ml-6">London</p>
              <p className="ml-6">SW1W 8HF</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.6707764996718!2d-0.15642593687253434!3d51.492448899710354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760516354fbd39%3A0xa6e884f5094a0536!2s91%20Bourne%20St%2C%20London%20SW1W%208HF!5e0!3m2!1sen!2suk!4v1646893184187!5m2!1sen!2suk"
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
