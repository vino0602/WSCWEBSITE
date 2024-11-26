import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      cookieName="myWebsiteCookieConsent"
      style={{
        background: "#2B373B",
        color: "#fff",
        fontSize: "14px",
        padding: "10px",
      }}
      buttonStyle={{
        color: "#4e503b",
        background: "#fff",
        fontSize: "13px",
        borderRadius: "5px",
        padding: "8px 12px",
      }}
      expires={365}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookies;
