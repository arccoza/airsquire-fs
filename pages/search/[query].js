import { useRouter } from 'next/router'
import Browse from '../index'


export default function Search(props) {
  const router = useRouter()
  console.log(router.query)
  const query = router.query.query || ''
  return Browse({...props, query})
}
