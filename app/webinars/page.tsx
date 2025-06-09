'use client';

import React, { useState } from "react";

// Mock webinar data
const webinars = [
  {
    id: 1,
    title: "Nutrition Tips for Toddlers",
    speaker: "Dr. Sumitra Meena",
    date: "2025-06-12",
  },
  {
    id: 2,
    title: "Sleep Training Basics",
    speaker: "Dr. Arjun Khanna",
    date: "2025-06-15",
  },
  {
    id: 3,
    title: "Handling Separation Anxiety",
    speaker: "Dr. Neha Kapoor",
    date: "2025-06-18",
  },
];

function WebinarCard({ webinar }: { webinar: typeof webinars[0] }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={styles.card}>
      <h3>{webinar.title}</h3>
      <p><strong>Speaker:</strong> {webinar.speaker}</p>
      <p><strong>Date:</strong> {webinar.date}</p>
      <button
        style={{
          color: "white",
          cursor: "pointer",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#444",
          marginTop: "1rem",
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        View Details
      </button>

      {showDetails && (
        <p style={{ marginTop: "0.5rem", color: "lightgreen" }}>
          Viewing details for webinar ID: {webinar.id}
        </p>
      )}
    </div>
  );
}

export default function WebinarsPage() {
  return (
    <div style={styles.container}>
      <h1>Upcoming Webinars</h1>
      <div style={styles.grid}>
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </div>
    </div>
  );
}

// Basic inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  grid: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    width: "280px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    backgroundColor: "black",
    color: "white",  
  },
};
