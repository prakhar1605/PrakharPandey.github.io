import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const barFill = useRef(null)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const obj = { v: 0 }
    const tl = gsap.timeline()
    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        const val = Math.round(obj.v)
        setPct(val)
        if (barFill.current) barFill.current.style.width = val + '%'
      },
    })
    tl.to(root.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: onDone,
    }, '+=0.15')
    return () => tl.kill()
  }, [onDone])

  return (
    <div ref={root} className="preloader">
      <div className="tag">Initializing</div>
      <div className="pct">{pct}</div>
      <div className="bar"><i ref={barFill} /></div>
      <div className="tag">Loading neural core…</div>
    </div>
  )
}
