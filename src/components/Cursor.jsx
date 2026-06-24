import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    let rx = 0, ry = 0, dx = 0, dy = 0, raf

    const move = (e) => {
      dx = e.clientX; dy = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`
    }
    const loop = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      if (e.target.closest('a, button, .magnetic')) ring.current?.classList.add('hovering')
    }
    const out = (e) => {
      if (e.target.closest('a, button, .magnetic')) ring.current?.classList.remove('hovering')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    loop()
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
