import { useRef } from 'react'

// Wraps a child element and gives it a magnetic pull toward the cursor.
export default function Magnetic({ children, strength = 0.4 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <span
      ref={ref}
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ display: 'inline-block', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {children}
    </span>
  )
}
