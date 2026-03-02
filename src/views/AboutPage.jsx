import myvideo from "../assets/waterplant.mp4"

const AboutPage = () => {
  return (
    <main className="page">
      <div className="container narrow">
        <h1>"Planting a sustainable habit"</h1>
        <h1 className="home-description">
          FlowerPlant
        </h1>

         <section className="info-section">
          <h2>Contact</h2>
          <p>
            Reach out to us: <br /> 
            Address: 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark  <br />     
            Email: flowplant123@flowerplant2026.dk  <br /> 
            Mobile: +452076765
          </p>
        </section>

        <video className="video-player" src={myvideo} autoPlay muted playsInline controls></video>

        

        <section className="info-section">
          <h2>Why plant care?</h2>
          <p>
            It takes empathy, time and discipline to maintain these quiet beings. 
            Plants bring special company to our homes, let&apos;s take care of them.
          </p>
        </section>

        <section className="info-section">
          <h2>Ecology mindset</h2>
          <p>
            Reuse pots, separate compost and avoid overwatering. 
            A healthy plant contributes to a healthy planet.
          </p>
        </section>

       
      </div>
    </main>
  );
};

export default AboutPage;