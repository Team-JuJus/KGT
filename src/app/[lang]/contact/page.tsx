import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import {
  FaAddressCard,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";

const page = () => {
  return (
    <main>
      <section className="mx-auto flex max-w-5xl items-center justify-center gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1188.9687891000026!2d51.43603983882332!3d35.730801346204295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1761644929845!5m2!1sen!2s"
          width="400"
          height="500"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-md shadow-gray-300"
        ></iframe>
        <div className="w-fit p-10 leading-10">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={200}
            height={200}
            className="mb-5 w-44"
          />
          <div className="mb-5">
            <span className="flex items-center gap-2">
              <FaAddressCard />
              <p>Iran, Tehran, Sohrevardi</p>
            </span>
            <span className="flex items-center gap-2">
              <FaPhone />
              <p>+98 919 456 6200</p>
            </span>
            <span className="flex items-center gap-2">
              <FaMailBulk />
              <p>Sashena203@gmail.com</p>
            </span>
          </div>

          <div className="flex gap-3 text-2xl">
            <FaInstagram />
            <FaTelegram />
            <FaLinkedin />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
