import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/Clock";
import ThemeToggle from "./components/ThemeToggle";
import SearchBox from "./components/SearchBox";
import PaymentPanel from "./components/PaymentPanel";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="App gold-theme">
      <header>
        <h1>🕋 Salaam Hadith AI + Qur'an</h1>
        <Clock />
        <select onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
        <ThemeToggle />
      </header>

      <SearchBox lang={lang} />
      <PaymentPanel />
    </div>
  );
}

export default App;
