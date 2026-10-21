
"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Wireless Earbuds", icon: "🎧" },
  { id: 2, name: "Stylish T-Shirt", icon: "👕" },
  { id: 3, name: "Casual Shoes", icon: "👟" },
  { id: 4, name: "Smart Watch", icon: "⌚" },
  { id: 5, name: "Water Bottle", icon: "🥤" },
  { id: 6, name: "Travel Backpack", icon: "🎒" }
];

export default function Home() {
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  function add(id) {
    setCart(old => ({ ...old, [id]: (old[id] || 0) + 1 }));
  }

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#f3f6fb",
      minHeight: "100vh",
      color: "#172033"
    }}>
      <header style={{
        background: "#1769ff",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>SMART DEAL</h2>
        <b>🛒 Cart: {count}</b>
      </header>

      <section style={{
        background: "linear-gradient(120deg,#1769ff,#7846ee)",
        color: "white",
        padding: "40px 20px"
      }}>
        <h1>Har deal mein bachat!</h1>
        <p>Apni pasand ke products chunein.</p>
        <h2>Sab ₹399 mein</h2>
      </section>

      <section style={{ padding: "20px" }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Product search karein..."
          style={{
            width: "100%",
            padding: "14px",
            boxSizing: "border-box",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        <h2>Popular Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          gap: "12px"
        }}>
          {filtered.map(p => (
            <article key={p.id} style={{
              background: "white",
              borderRadius: "12px",
              padding: "14px",
              textAlign: "center",
              boxShadow: "0 2px 8px #00000010"
            }}>
              <div style={{ fontSize: "48px", padding: "12px" }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: "16px" }}>{p.name}</h3>
              <h2 style={{ color: "#137333" }}>₹399</h2>
              <button
                onClick={() => add(p.id)}
                style={{
                  width: "100%",
                  background: "#ffca28",
                  border: 0,
                  borderRadius: "7px",
                  padding: "12px 4px",
                  fontWeight: "bold"
                }}
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>

        <section style={{
          marginTop: "24px",
          padding: "20px",
          background: "white",
          borderRadius: "12px"
        }}>
          <h2>Your Cart</h2>
          <p>Total items: {count}</p>
          <h2>Total: ₹{count * 399}</h2>
          <p>Checkout aur payment integration agle step mein add karenge.</p>
        </section>
      </section>

      <footer style={{
        padding: "24px",
        textAlign: "center",
        color: "#666"
      }}>
        © SMART DEAL — Shop Smart, Save More
      </footer>
    </main>
  );
}
