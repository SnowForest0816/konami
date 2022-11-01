/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from 'react'

export default function (cb = () => { }) {
  const [sequence, setSequence] = useState([])
  const [passed, setPassed] = useState(0);

  const konamiCodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  const keyPress = e => setSequence(prev => [...prev, e.keyCode])

  useEffect(() => {
    sequence.forEach((code, index) => {
      if (code !== konamiCodeSequence[index]) {
        setSequence([])
      }
    })

    if (sequence.toString() === konamiCodeSequence.toString()) {
      cb()
      setSequence([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  }, [cb])

  useEffect(() => {
    const interval = setInterval(() => {
      setPassed(passed => passed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(passed === 5) {
      setPassed(0);
      setSequence([])
    }
  }, [passed])

  return sequence
}
