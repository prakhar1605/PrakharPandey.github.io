import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? (window.scrollY / h) * 100 : 0
      if (bar.current) bar.current.style.width = p + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress"><i ref={bar} /></div>
}
