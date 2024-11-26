import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?c780564374b30097d0764faaa3a'; // Replace with your Trustindex script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="google-reviews-container">
      {/* Google Reviews Heading */}
      <h2 className="google-reviews-heading">Google Reviews</h2>
      <div id="trustindex-widget"></div>
    </div>
  );
};

export default GoogleReviews;
