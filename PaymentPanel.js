import React from "react";

export default function PaymentPanel() {
  const handlePi = async () => {
    Pi.init({ sandbox: true });
    try {
      const auth = await Pi.authenticate(["payments"], (p) => console.log("Incomplete payment:", p));
      alert(`Welcome ${auth.user.username}`);
    } catch (err) {
      console.error("Pi SDK error:", err);
    }
  };

  return (
    <section>
      <h3>Support Salaam Hadith AI</h3>
      <button onClick={handlePi}>Donate with Pi</button>
      <button>$1 (Coming Soon)</button>
      <button>Crypto (Coming Soon)</button>
    </section>
  );
}
