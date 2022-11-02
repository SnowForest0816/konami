/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from 'react'

export default function (cb = () => { }) {
  const [sequence, setSequence] = useState([])
  const [passed, setPassed] = useState(false);

  const konamiCodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  const keyPress = e => {
    if(!passed) {
      setPassed(true);
      setTimeout(() => {
        setPassed(false);
        setSequence([]);
      }, 3000);
    }
    setSequence(prev => [...prev, e.keyCode])
  }

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
  }, [cb]);

  return sequence
}
