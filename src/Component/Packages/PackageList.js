// src/PackageList.js
import React, { useState } from 'react';
import PackageCard from './PackageCard';
import './PackageList.css';

const packages = [
  {
    price: "9.99$",
    title: "TAKE CARE",
    description: [
      "24/7 Health care assistant",
      "One home visit by field executive",
      "One zoom session with general consultant (max 20 mins)",
    ],
  },
  {
    price: "42$",
    title: "PROXY PACK",
    description: [
      "24/7 Health care assistant",
      "One home visit by field executive",
      "Lab investigations: complete blood count, urine routine, TSH, HBA1C",
      "One zoom session with general consultant (max 20 mins)",
      "Zoom session with preventive health physician specialist",
      "Nutritionist advice with diet chart for 1 month",
      "Home visit by dental physician",
      "Home visit for Ophthal screening",
      "Wellness session with yoga (30 min)",
      "Home visit by general doctor",
      "Home visit by physiotherapist (not including session)",
    ],
  },
  {
    price: "199$",
    title: "ELITE 360 PACK",
    description: [
      "24/7 Health care assistant",
      "One home visit by field executive",
      "Lab investigations: complete blood count, urine routine, TSH, HBA1C, Random blood sugar, Renal function test, Liver function test, Serum Electrolyte, Serum VIT D, Urine PCR, Peripheral Smear",
      "One zoom session with general consultant (max 20 mins)",
      "One zoom session with preventive health physician specialist (20 mins)",
      "Nutritionist advice with diet chart for 1 month",
      "One home visit by dental physician (procedures not included)",
      "One home visit for Ophthal screening",
      "Wellness session with yoga (30 min)",
      "One home visit by general doctor",
      "One home visit by physiotherapist (not including session)",
    ],
  },
];

const PackageList = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="package-list-container">
      <h1 className="title">Our Plan</h1>
      <p className="subtitle">Choose the package that fits you</p>
      <div className="package-list">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            price={pkg.price}
            title={pkg.title}
            description={pkg.description}
            isExpanded={expandedCardIndex === index}
            onToggleExpand={() => handleToggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
