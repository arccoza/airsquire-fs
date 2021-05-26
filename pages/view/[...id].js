import Panolens from '../../components/panolens'
import { useRouter } from 'next/router'
import { urlPrefix } from '../../lib/store-vars'


export default function View() {
  const router = useRouter()
  const id = router.query.id
  var url = id && (urlPrefix + decodeURIComponent(id.join('/')))

  return (
    <Panolens image={url}></Panolens>
  )
}
