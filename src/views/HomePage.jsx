import myimage from "../assets/chart2.png"

const HomePage = () => {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Save your plants</h1>
           
            <h3 className="home-description">
            FlowerPlant is a community for plant enthusiasts, gardeners, and beginners looking to learn about
            plant care. The platform aims to provide a user-friendly website where users can explore plant care
            guides and manage their personal plant collections.
            </h3>
          </div>
          <div className="hero-card">
            <h2>What you can do here</h2>
          
            <ul className="hero-list">
              <li>Keep track of your plants and their care needs</li>
              <li>Filter by needs: light, water, or care</li>
              <li>Learn the basics of watering, light, and soil</li>
              <li>Personalise and create your own plant guide!</li>
            </ul>
          </div>
          <img src={myimage} alt="plant chart" className="image-box-home" aria-label="Home page image area" />
          </div>
      </section>
    </main>
  );
};

export default HomePage;