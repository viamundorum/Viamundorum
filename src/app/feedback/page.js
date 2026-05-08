"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function KapcsolatPage() {
  return (
    <>
      <section className="intro">
        <h2>Kapcsolat és Visszajelzés</h2>
        <p>Kérdésed van, vagy megosztanád a véleményed? Keress minket bizalommal!</p>
      </section>

      <section className="contact-container">
        {/* Bal oszlop: Elérhetőségek */}
        <div className="contact-info">
          <h3>Elérhetőségeink</h3>
          <p>Ha közvetlenül szeretnél írni nekünk, az alábbi címen elérsz minket:</p>
          
          <div className="info-item">
            <strong>E-mail:</strong>
            <p>viamundorum@gmail.com</p>
          </div>

          <div className="info-item">
            <strong>Válaszidő:</strong>
            <p>Általában 24-48 órán belül válaszolunk az üzenetekre.</p>
          </div>

          <div className="info-item">
            <strong>Kövess minket:</strong>
            <p>Hamarosan elérhetőek leszünk a közösségi médiában is!</p>
          </div>
        </div>

        {/* Jobb oszlop: Az űrlap */}
        <div className="contact-form-box">
          {/* JAVÍTOTT RÉSZ: Az action mezőbe bekerült az egyedi Formspree azonosítód */}
          <form action="https://formspree.io/f/xaqvpoeo" method="POST">
            <label htmlFor="name">Név (opcionális)</label>
            <input name="name" type="text" id="name" placeholder="Kovács Anna Mariann" />

            <label htmlFor="email">Email (kötelező)</label>
            <input name="email" type="email" id="email" placeholder="email@example.com" required/>

            <label htmlFor="subject">Tárgy</label>
            <select id="subject" name="subject" defaultValue="egyeb">
              <option value="hiba">Hiba jelentése</option>
              <option value="javaslat">Javaslat</option>
              <option value="otlet">Új ötlet</option>
              <option value="egyeb">Egyéb</option>
            </select>

            <label htmlFor="feedback">Üzenet</label>
            <textarea 
              name="feedback" 
              id="feedback"  
              placeholder="Írd le a véleményed..." 
              required
            ></textarea>

            {/* Extra beállítások a Formspree-hez */}
            <input type="hidden" name="_subject" value="Via Mundorum Kapcsolat" />
            
            <input type="submit" value="Üzenet küldése" />
          </form>
        </div>
      </section>
    </>
  );
}