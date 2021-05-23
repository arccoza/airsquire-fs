import styles from './gallery.module.css'
import Image from 'next/image'


const blankImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='

export default function Gallery({ imageData=[] }) {
  var loader = {loader: (({ src }) => src)} // workaround for `blob:` urls

	return (
		<div className={styles.gallery}>
      {imageData.map(({ id=null, name, url='' }) => (
        <div key={name} className={id ? '' : styles.placeholder} >
          <Image
            priority
            {...(!id ? loader : {})}
            src={url || blankImg}
            alt={name}
            width={320}
            height={160}
          />
        </div>
      ))}
    </div>
	)
}
