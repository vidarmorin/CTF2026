import '../styles/Test.css'
import NeonButton from '../components/NeonButton'

interface TestProps {
  navigate: (page: string) => void
}

export default function Test({ navigate }: TestProps) {
  const downloadNotes = () => {
    const content = `Remember:
Admin panel moved
Robots file updated
Flag is not here :)`

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', 'notes.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="test-container">
      <div className="scanlines"></div>

      <div className="test-content">
        <div className="header">
          <h1 className="neon-pink">&gt; /test</h1>
          <p className="path">Location: /test</p>
        </div>

        <div className="test-message">
          <p className="terminal-line">$ cat status.txt</p>
          <div className="message-box">
            <p>Still testing things.</p>
            <p>Notes are messy.</p>
          </div>
        </div>

        <div className="files-section">
          <p className="section-title">📁 Available Files:</p>
          <div className="file-item">
            <span className="file-icon">📄</span>
            <span className="file-name">notes.txt</span>
            <NeonButton 
              text="Download"
              onClick={downloadNotes}
              color="cyan"
            />
          </div>
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
