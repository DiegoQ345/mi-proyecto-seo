"use client";
import { useState, useEffect } from "react";

export default function LargeComponent() {
  const [items, setItems] = useState([]);

  // Simula carga de datos pesados
  useEffect(() => {
    const data = Array.from({ length: 300 }, (_, i) => `Ítem cargado #${i + 1}`);
    setItems(data);
  }, []);

  return (
    <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px" }}>
      <h2>Componente Pesado (LargeComponent)</h2>

      <p>
        Este componente simula un módulo “pesado” que amerita cargarse de forma dinámica
        para mejorar el rendimiento del sitio. Incluye una gran cantidad de elementos, 
        operaciones de render y contenido estático considerable.
      </p>

      <p>
        Cargar este componente con <b>next/dynamic</b> reduce el tamaño inicial del bundle 
        y mejora el tiempo de carga de la página principal.
      </p>

      <h3>Lista grande (300 ítems)</h3>
      <ul style={{ maxHeight: "300px", overflowY: "scroll", padding: "10px", border: "1px solid #ccc" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "4px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
