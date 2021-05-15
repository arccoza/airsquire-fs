import React from 'react'
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
  const inputRef = React.createRef()
  const handleFiles = ({ target: { files } }) => {
    console.log(files)
  }

  return (
    <>
    <a className={`${primary && styles.primary} ${styles.button}`} onClick={() => inputRef.current.click()}>
      {children}
    </a>
    <input ref={inputRef} type="file" accept={accept} style={{display: 'none'}} multiple onChange={handleFiles} />
    </>
  )
}
