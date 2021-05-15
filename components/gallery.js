import styles from './gallery.module.css'
import Image from 'next/image'


export default function Gallery({ imageData=[] }) {
	return (
		<div className={styles.gallery}>
      {imageData.map(({ id, title, url }) => (
        <div key={id}>
          <Image
            priority
            src={url}
            alt={title}
            width={320}
            height={160}
          />
        </div>
      ))}
    </div>
	)
}
