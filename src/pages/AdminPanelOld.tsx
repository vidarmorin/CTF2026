import { useEffect } from 'react'
import '../styles/AdminPanelOld.css'
import NeonButton from '../components/NeonButton'

interface AdminPanelOldProps {
  navigate: (page: string) => void
}

export default function AdminPanelOld({ navigate }: AdminPanelOldProps) {
  // Log flag_part_1 to console on page load
  useEffect(() => {
    console.log('%cFlag Part 1:', 'color: #ff00ff; font-size: 16px; font-weight: bold;')
    console.log('%cflag_part_1 = CTF{neon_pages_', 'color: #00ffff; font-size: 14px; font-family: monospace;')
    console.log('%cCheck the page for part 2...', 'color: #ffff00; font-size: 12px;')
  }, [])

  const handleLogin = () => {
    alert('flag_part_2 = are_too_easy}')
  }

  return (
    <div className="admin-container">
      <div className="scanlines"></div>
      
      {/* Hidden comment hint */}
      {/* Flag is split. Check the console. */}

      <div className="admin-content">
        <div className="admin-header">
          <h1 className="neon-cyan">&gt; /admin-panel-old</h1>
          <p className="auth-status">🔓 Authentication disabled in dev mode.</p>
        </div>

        <div className="login-section">
          <h2 className="section-title">Admin Login</h2>
          
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              id="username"
              placeholder="admin"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password"
              id="password"
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          <div className="button-group">
            <NeonButton
              text="Login"
              onClick={handleLogin}
              color="pink"
            />
          </div>

          <p className="hint-text">💡 Hint: Try clicking Login without entering anything...</p>
        </div>

        <div className="info-box">
          <p className="warning">⚠️ DEV MODE ACTIVE</p>
          <p>This admin panel is no longer in use.</p>
          <p>All functionality has been moved to new systems.</p>
        </div>

        <div className="navigation">
          <NeonButton
            text="← Back"
            onClick={() => navigate('home')}
            color="cyan"
          />
        </div>
      </div>
    </div>
  )
}
