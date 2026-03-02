const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} FlowerPlant</p>
        <p className="footer-sub">
         Address: 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark <br />
         Email: flowplant123@flowerplant2026.dk <br />
         Mobile: +452076765
        </p>
      </div>
    </footer>
  );
};

export default Footer;