import React, { useState } from 'react'
import styles from './hotbar.module.css'
import Icon from './icon'


export default function HotBar({ children }) {
	return (
		<nav className={styles.hotbar}>
      {children}
		</nav>
	)
}

export function Button({ primary='', onClick, children }) {
  return (
    <a className={`${primary && styles.primary} ${styles.button}`} onClick={onClick}>
      {children}
    </a>
  )
}

export function UploadButton({ primary='', accept="*/*", files, children }) {
  const [tapped, setTapped] = useState('')
  const inputRef = React.createRef()

  const handleFiles = ({ currentTarget: { files } }) => {
    console.log(files)
  }

  const glow = [
    [
      { boxShadow: '-2px -2px 8px rgba(158, 32, 217, 100%), 2px 2px 8px rgba(52, 226, 184, 100%)', offset: 0.1 }
    ],
    { duration: 500 }
  ]
  var anim = null

  // var anim = new Animation(...glow)

  const onClick = ev => {
    // anim = anim ? anim : ev.currentTarget.animate(...glow)
    // anim.cancel()
    // anim.play()
    setTapped(true)
    // setTimeout(() => setTapped(''), 300)
    // setTimeout(() => inputRef.current.click(), 100)
    inputRef.current.click()
  }

  const className = `${styles.button} ${primary && styles.primary} ${tapped && styles.tapped}`

  return (
    <>
    <a className={className} onClick={onClick} onAnimationEnd={() => setTapped('')}>
      {children}
    </a>
    <input ref={inputRef} type="file" accept={accept} style={{display: 'none'}} multiple onChange={handleFiles} />
    </>
  )
}