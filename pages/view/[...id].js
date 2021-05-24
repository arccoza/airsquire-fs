import Panolens from '../../components/panolens'
import { useRouter } from 'next/router'
import { urlPrefix } from '../../lib/store-vars'


export default function View() {
  const router = useRouter()
  const id = router.query.id
  const url = id && (urlPrefix + id.join('/'))

  return (
    <Panolens image={url}></Panolens>
  )
}
