import '../styles/NeonButton.css'

interface NeonButtonProps {
  text: string
  onClick: () => void
  color?: 'pink' | 'cyan'
}

export default function NeonButton({ text, onClick, color = 'pink' }: NeonButtonProps) {
  return (
    <button 
      className={`neon-button neon-button-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
