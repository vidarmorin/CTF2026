import '../styles/Robots.css'
import NeonButton from '../components/NeonButton'

interface RobotsProps {
  navigate: (page: string) => void
}

export default function Robots({ navigate }: RobotsProps) {
  return (
    <div className="robots-container">
      <div className="scanlines"></div>

      <div className="robots-content">
        <div className="header">
          <h1 className="neon-pink">&gt; /robots.txt</h1>
          <p className="path">Location: /robots.txt</p>
        </div>

        <div className="robots-text">
          <p className="terminal-line">$ cat robots.txt</p>
          <div className="code-block">
            <p><span className="directive">User-agent:</span> <span className="value">*</span></p>
            <p><span className="directive">Disallow:</span> <span className="value">/admin-panel-old/</span></p>
          </div>
        </div>

        <div className="analysis">
          <p className="section-title">🔍 Analysis:</p>
          <div className="analysis-box">
            <p>Interesting... The robots.txt file explicitly mentions <code>/admin-panel-old/</code></p>
            <p>This is the classic trick: websites often hide secrets in the very files meant to keep bots away.</p>
            <p>Let's investigate this "old admin panel"...</p>
          </div>
        </div>

        <div className="action-buttons">
          <NeonButton
            text="Visit /admin-panel-old"
            onClick={() => navigate('admin')}
            color="pink"
          />
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
