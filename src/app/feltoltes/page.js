"use client";

import { useState } from "react";
import  createClient  from "@/utils/supabase/client"; // Figyelj az elérési útra az utils helyétől függően!

export default function FajlFeltoltes() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [publicUrl, setPublicUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Kérlek, előbb válassz ki egy fájlt!");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    // Egyedi fájlnév generálása, hogy ne írják felül egymást a fájlok
    const fajlNev = `${Date.now()}-${file.name}`;

    // Feltöltés a 'tananyagok' bucketbe
    const { data, error } = await supabase.storage
      .from("egyetemi_anyagok")
      .upload(fajlNev, file);

    if (error) {
      alert(`Hiba a feltöltés során: ${error.message}`);
      setLoading(false);
      return;
    }

    // Mivel a bucketünk PUBLIC, azonnal le tudjuk kérni a közvetlen linket hozzá
    const { data: urlData } = supabase.storage
      .from("egyetemi_anyagok")
      .getPublicUrl(fajlNev);

    setPublicUrl(urlData.publicUrl);
    setLoading(false);
    alert("Sikeres feltöltés! 🎉");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>Via Mundorum - Tananyag feltöltés</h2>
      
      <input type="file" onChange={handleFileChange} />
      
      <button 
        onClick={handleUpload} 
        disabled={loading}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          backgroundColor: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {loading ? "Feltöltés..." : "Feltöltés a Supabase-re"}
      </button>

      {publicUrl && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>A fájl közvetlen linkje:</strong></p>
          <a href={publicUrl} target="_blank" rel="noreferrer" style={{ color: "#0070f3" }}>
            {publicUrl}
          </a>
        </div>
      )}
    </div>
  );
}