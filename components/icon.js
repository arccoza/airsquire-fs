import styles from './icon.module.css'


export default function Icon({ name }) {
  return (
    <>
    <style jsx>{`
      i {
        mask-image: url(/images/icons/${name}.svg);
      }
    `}</style>
    <i className={styles.icon} />
    </>
  )
}
