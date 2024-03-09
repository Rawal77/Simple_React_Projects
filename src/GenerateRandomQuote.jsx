import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomQuoteGenerate.css";

export default function GenerateRandomQuote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewQuote = async () => {
    fetchQuote();
  };

  return (
    <div className="content">
      <h1>Random Quote Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p id="quote">{quote}</p>
          <button onClick={handleNewQuote}>Get New Quote</button>
        </>
      )}
    </div>
  );
}
