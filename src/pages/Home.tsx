import { useState } from 'react'
import '../styles/Home.css'
import NeonButton from '../components/NeonButton'

interface HomeProps {
  navigate: (page: string) => void
}

export default function Home({ navigate }: HomeProps) {
  const [clickCount, setClickCount] = useState(0)

  const handleButtonClick = () => {
    setClickCount(clickCount + 1)
    if (clickCount === 0) {
      alert('Are you sure? 👀')
    } else if (clickCount === 1) {
      alert('Very suspicious of you...')
    } else {
      alert('Okay, you convinced me. Check /test')
    }
  }

  return (
    <div className="home-container">
      <div className="scanlines"></div>
      
      {/* Hidden comment hint */}
      {/* TODO: remove test directory before launch */}

      <div className="home-content">
        <div className="welcome-section">
          <h1 className="neon-pink glitch-title">
            ▓▒░ NEON PAGES ░▒▓
          </h1>
          
          <p className="subtitle neon-cyan">
            &gt; A stylish but slightly broken website
          </p>
          
          <div className="welcome-message">
            <p>&gt; Welcome to the digital frontier...</p>
            <p>&gt; Where secrets hide in plain sight</p>
            <p>&gt; And every page tells a story</p>
          </div>

          <div className="button-container">
            <NeonButton 
              text="Nothing to see here"
              onClick={handleButtonClick}
              color="pink"
            />
          </div>

          <div className="info-section">
            <p className="terminal-text">
              $ echo "Explore the site. Find the flag. Hack the planet."
            </p>
          </div>

          <div className="quick-nav">
            <span className="nav-label">Quick Navigation (for debugging):</span>
            <div className="nav-links">
              <a onClick={() => navigate('test')}>/test</a>
              <a onClick={() => navigate('robots')}>/robots.txt</a>
              <a onClick={() => navigate('robots-file')}>/robots.txt (raw)</a>
              <a onClick={() => navigate('admin')}>/admin-panel-old</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
