import React from "react";
import styles from "./footer2.module.css";

import face from "./assets/face.png";
import Insta from "./assets/insta.png";
import link from "./assets/linkedin-logo.png";
import tweet from "./assets/tweet2.jpg";
import logo from "./assets/i3flogo.jpg"
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <>
      <footer class="mx-auto bg-white">
        <hr />
  <div
    class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-4"
  >
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
      <div>
        <div>
      </div>
      <div>
        <div className="mx-auto mb-10 text-xl">Follow Us On</div>
      </div>
        <div class="mx-auto flex gap-6">
          <li className="list-none">
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Facebook</span>

              <svg
                class="  w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className="list-none">
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Instagram</span>

              <svg
                class="  w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className="list-none">
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Twitter</span>

              <svg
                class="  w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li className="list-none">
          <a href="https://www.linkedin.com/in/i3fiitbhu/" className="pr-6 text-neutral-600 brightness-100" target="_blank">
                <img src={link} alt="LinkedIn" className="  w-6" />
              </a>
              
          </li>

          
        </div>
      </div>

      <div
        class="grid gap-4 sm:col-span-2 sm:grid-cols-1 lg:col-span-2 lg:grid-cols-3"
      >
        <div>
          <div class="font-medium mx-auto mb-4 text-xl text-gray-900">Services</div>

          <p class="mx-auto space-y-4 font-normal text-sm">
            <li className="list-none">
              <Link className="text-gray-700  transition hover:opacity-75" target="_parent" to="/Ip">
                Incubation Policy
              </Link>
            </li>

            <li className="list-none">
              <Link class="text-gray-700 transition hover:opacity-75" target="_parent" to="/Blog">
                Blogs
              </Link>
            </li>

            <li className="list-none">
              <Link class="text-gray-700 transition hover:opacity-75" target="_parent" to="Nl">
                Newsletter
              </Link>
            </li>

            <li className="list-none">
              <Link class="text-gray-700 transition hover:opacity-75" target="_parent" to="Ev">
                Upcoming Events
              </Link>
            </li>
          </p>
        </div>

        <div>
          <div class="font-medium mx-auto mb-4 text-xl text-gray-900">Address</div>
          {/* <div class="">  */}
            <div className="text-gray-700 mx-auto text-justify transition hover:opacity-75">
               <a class="text-gray-700 text-sm ">Ideation Innovation & Incubation (I-3) Foundation</a> 
               <br></br>
               <a class="text-gray-700 text-sm">Opposite to Proctor Office, IIT (BHU) Varanasi</a> <br></br>
               <a class="text-gray-700 text-sm">Indian Institute of Technology (Banaras Hindu University) Varanasi </a> <br></br>
               <a class="text-gray-700 transition hover:opacity-75 text-sm">Varanasi-221005, Uttar Pradesh, India</a> 
              {/* </div> */}
              </div>
        </div>

        <div className="lg:ml-10">
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.3525703248231!2d82.9922069983345!3d25.2604934879394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e339f56f121cf%3A0xd780c7a3972fbb3a!2sTechnology%20Innovation%20%26%20Incubation%20Centre!5e0!3m2!1sen!2sin!4v1692885623650!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mx-auto"
              ></iframe>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer2;
