import { Link } from 'react-router-dom';
import '../App.css' 

export default function Home() {
  return (
    <section className="section-content">
      <p className='home-subtitle'>Hi, my name is <span>Josber Hernández</span></p>
      <h1 className="home-title">
        DESIGNER /
      </h1>
      <h1 className="home-title">
        <span>AI ARTIST</span><span className='ghost'>..</span>
      </h1>
      <h1 className="home-title">
        <span>3D DESIGNER</span>
      </h1>
      <div className="home-buttons" >
        <Link to="/Work" className="home-button">
        <span class="btn-left">
          <span class="btn-arrow">→</span>
          <span class="btn-text">SEE MY PROJECTS</span>
        </span>
        </Link>

        <Link to="https://www.linkedin.com/in/josber-hernandez/" target="#" className="home-button">
          <span class="btn-left">
            <span class="btn-arrow">→</span>
            <span class="btn-text">MORE ABOUT ME</span>
          </span>
        </Link>
      </div>
      
    </section>
  );
}