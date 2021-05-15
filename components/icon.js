import styles from './icon.module.css'


// function Icon({ name }) {
//   return <svg dangerouslySetInnerHTML={{__html: `<use href="#${name}" xlink:href="#${name}"/>`}}></svg>
// }

// function Icon({ name }) {
//   return <i className={``} />
// }

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
