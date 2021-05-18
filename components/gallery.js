import styles from './gallery.module.css'
import Image from 'next/image'


export default function Gallery({ imageData=[] }) {
	return (
		<div className={styles.gallery}>
      {imageData.map(({ etag, name, url }) => (
        <div key={etag}>
          <Image
            priority
            src={url}
            alt={name}
            width={320}
            height={160}
          />
        </div>
      ))}
    </div>
	)
}
