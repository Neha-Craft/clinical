


import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header";
import ClientHeaderSwitcher from "@/components/ClientHeaderSwitcher";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Tus Go Deireadh",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />

        {/* Nunito font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Other vendor CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
          rel="stylesheet"
        />
        
        <link rel="icon" href="/logo.png" />
      </head>
      <body style={{ fontFamily: "'Nunito', sans-serif" }}>
        {/* < Header/> */}
         <ClientHeaderSwitcher />


        {children}

        <ToastContainer />

        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* jQuery */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

        {/* Additional libraries needed for custom scripts */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.1.0/progressbar.min.js"
          strategy="beforeInteractive"
        />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Vendor JS Files */}
        <Script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js" strategy="afterInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="afterInteractive" />

        {/* Custom JS Files */}
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
        <Script src="/js/elements.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}




