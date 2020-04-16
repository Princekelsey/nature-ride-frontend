import React from "react";
import FeatureCard from "./FeatureCard";
import featureData from "./data";

const Features = () => {
  return (
    <section className="features-section">
      <div className="row">
        {featureData.map((data) => (
          <FeatureCard
            title={data.title}
            info={data.info}
            icon={data.icon}
            key={data.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
