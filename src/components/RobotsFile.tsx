import '../styles/RobotsFile.css'
import NeonButton from './NeonButton'

interface RobotsFileProps {
  navigate: (page: string) => void
}

export default function RobotsFile({ navigate }: RobotsFileProps) {
  return (
    <div className="robots-file-container">
      <div className="scanlines"></div>

      <div className="robots-file-content">
        <div className="header">
          <h1 className="neon-cyan">&gt; /robots.txt (raw)</h1>
        </div>

        <div className="raw-file">
          <pre>{`User-agent: *
Disallow: /admin-panel-old/`}</pre>
        </div>

        <div className="navigation">
          <NeonButton
            text="← Back"
            onClick={() => navigate('home')}
            color="pink"
          />
        </div>
      </div>
    </div>
  )
}
