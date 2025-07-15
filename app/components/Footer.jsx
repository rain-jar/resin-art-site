"use client";

import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-footer text-accent py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">La Tête En Fleurs</h2>
        <p className="mb-4">Contact Us</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:hello@resinart.com" aria-label="Email">
            <FaEnvelope className="hover:scale-110 transition-transform" />
          </a>
          <a href="tel:+1234567890" aria-label="Phone">
            <FaPhone className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/la_tete_en_fleurs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}

  