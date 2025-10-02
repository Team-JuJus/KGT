import React from "react";

interface MainSectionProps {
  lang: string;
}
const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Trusted Medical & Laboratory</h1>
          <p>
            A wide range of consumables and specialized lab equipment with
            authenticity guarantee and official licenses — ready to be delivered
            nationwide. A wide range of consumables and specialized lab
            equipment
          </p>
          <button>Click</button>
        </div>

        <img src="lab-image-2.png" alt="Banner" />
      </div>

      <ul>
        <li>
          <p>Authentic products</p>
          <p>Guarenteed original items</p>
        </li>
        <li>
          <p>Fast shipping</p>
          <p>Quick process and delivery</p>
        </li>
        <li>
          <p>Available support</p>
          <p>We&apos;re here to help, Anytime</p>
        </li>
      </ul>
    </section>
  );
};

export default MainSection;
