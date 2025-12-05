import '../App.css' 

export default function Navbar() {
  return (
    <div className="navbar">
      <img 
        src = "./models/logo.png"
        alt="Logo" 
        className="nav-logo-img"
        />

      <div className="nav-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}