import styles from './search-bar.module.css'
import Icon from './icon'
import { useRouter } from 'next/router'


export default function SearchBar({ visible=true }) {
  const router = useRouter()
  const className = `${styles.searchBar} ${visible && styles.visible}`
  return (
    <div className={className}>
      <input type='text' onKeyPress={ev => ev.key == 'Enter' && router.push(`/search/${ev.target.value}`)} />
    </div>
  )
}
