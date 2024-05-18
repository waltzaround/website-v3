function Header() {
  return (
    <header className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-img" src="/images/walt.png" alt="aaa" />
        <p>
          The portfolio of <strong>Walter Lim</strong>
        </p>
      </a>
      <div className="nav-links">
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/media">Media</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;