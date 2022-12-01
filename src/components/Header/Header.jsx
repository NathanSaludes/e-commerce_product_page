import './header.css';

function Header() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <img src="/images/logo.svg" alt="sneakers" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <a href="#" className="cart">
          <span className="cart-icon"></span>
        </a>
        <div className="user-avatar">
          <img src="/images/image-avatar.png" alt="user avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header;