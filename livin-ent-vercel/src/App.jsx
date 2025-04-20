import React from "react";
import "./index.css";

const styles = [
  "Classic Red Logo",
  "Graffiti Street Style",
  "Retro 90s Vibe",
  "Minimalist Blackout",
  "Camo Urban",
  "LIVIN Pride",
  "Neon Drip",
  "College Varsity",
  "Tie-Dye Splash",
  "Bold Block Letters"
];

export default function App() {
  return (
    <div className="p-4 max-w-5xl mx-auto font-sans">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-red-600">LIVIN Ent!</h1>
        <p className="mt-4 text-lg text-gray-600">Redefining streetwear – One bold shirt at a time.</p>
        <button className="mt-6 px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded">Shop Now</button>
      </header>

      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div key={index} className="rounded-2xl shadow-lg bg-white p-4 text-center">
              <div className="text-xl font-semibold text-red-600">{style}</div>
              <p className="text-sm text-gray-500 mt-2">Signature red "LIVIN Ent!" on the front</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About LIVIN Ent!</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          LIVIN Ent! isn't just a brand — it's a lifestyle. Born from boldness and passion, our red-lettered tees stand for those
          who hustle, dream, and stay true to their vibe. Each style is designed to inspire confidence and individuality. We don't
          follow trends — we live them.
        </p>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LIVIN Ent! All rights reserved.
      </footer>
    </div>
  );
}