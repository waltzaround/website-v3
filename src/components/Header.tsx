function Header() {
  return (
    <header className="main-nav">
      <div className="main-nav-logo">
        <img className="main-nav-logo-img" src="/images/walt.png" alt="aaa" />
        <p>
          The portfolio of <strong>Walter Lim</strong>
        </p>
      </div>
      <div className="nav-links">
        <p>About</p>
        <p>Work</p>
        <p>Media</p>
        <p>Contact</p>
      </div>
    </header>
  );
}

export default Header;
