const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} FlowerPlant</p>
        <p className="footer-sub">
         "Pursuing a sustainable  mindset"
        </p>
      </div>
    </footer>
  );
};

export default Footer;