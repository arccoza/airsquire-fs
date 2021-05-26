import React, { useState, useEffect, useRef } from 'react'
import styles from './panolens.module.css'

var panolens


export default function Panolens({ image }) {
  const panoRef = useRef(null)
  const [panorama, setPanorama] = useState(null)
  const [viewer, setViewer] = useState(null)
  // const [panolens, setPanolens] = useState(null)

  // useEffect(async () => {
  //   console.log('useEffect', panolens)
  //   if (panolens == null)
  //     panolens = (await import('/node_modules/panolens/build/panolens.module.js'))
  //   // setViewer(1)
  // }, [])

  // console.log('panolens', panolens)

  useEffect(async () => {
    if (panorama == null) {
      var PANOLENS = (await import('/node_modules/panolens/build/panolens.module.js'))
      const p = new PANOLENS.ImagePanorama(image)
      const v = new PANOLENS.Viewer({ container: panoRef.current, controlButtons: [] })
      v.add(p)
      setPanorama(p)
      setViewer(v)
    }
    else {
      panorama.load(image)
    }

    return () => {
      viewer.remove(panorama)
      panorama.destroy()
      viewer.destroy()
    }
  }, [])

  return <div id='panolens' className={styles.panolens} ref={panoRef} style={{width: '100vw', height: '100vh', overflow: 'hidden'}}></div>
}
