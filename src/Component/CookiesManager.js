import React, { useState, useEffect } from "react";
import { fetchCookies, addCookie, deleteCookie } from "../services/CookiesAPI"; // Adjust relative path

const CookiesManager = () => {
  const [cookies, setCookies] = useState([]);
  const [newCookie, setNewCookie] = useState({
    cookieName: "",
    cookieValue: "",
    domain: "example.com",
    path: "/",
    expires: "Wed, 20 Dec 2024 12:00:00 GMT",
    maxAge: 3600,
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCookies()
      .then((data) => setCookies(data))
      .catch(() => setError("Failed to fetch cookies"));
  }, []);

  const handleAddCookie = (e) => {
    e.preventDefault();
    addCookie(newCookie)
      .then((cookie) => {
        setCookies([...cookies, cookie]);
        setNewCookie({
          cookieName: "",
          cookieValue: "",
          domain: "example.com",
          path: "/",
          expires: "",
          maxAge: 3600,
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
        });
        setError("");
      })
      .catch(() => setError("Failed to add cookie"));
  };

  const handleDeleteCookie = (cookieName) => {
    deleteCookie(cookieName)
      .then(() => {
        setCookies(cookies.filter((cookie) => cookie.cookieName !== cookieName));
        setError("");
      })
      .catch(() => setError("Failed to delete cookie"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCookie({ ...newCookie, [name]: value });
  };

  return (
    <div>
      <h1>Cookies Manager</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {cookies.map((cookie) => (
          <li key={cookie.cookieName}>
            {cookie.cookieName}: {cookie.cookieValue}{" "}
            <button onClick={() => handleDeleteCookie(cookie.cookieName)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Add New Cookie</h2>
      <form onSubmit={handleAddCookie}>
        <input
          type="text"
          name="cookieName"
          placeholder="Cookie Name"
          value={newCookie.cookieName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="cookieValue"
          placeholder="Cookie Value"
          value={newCookie.cookieValue}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Cookie</button>
      </form>
    </div>
  );
};

export default CookiesManager;
