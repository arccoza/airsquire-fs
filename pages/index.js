import styles from '../styles/Home.module.css'
import Gallery from '../components/gallery'
import client from '../lib/client'
import { useEffect } from 'react'


const imgs = [
  {etag:0, name: 'building', url: '/images/building.jpg'},
  {etag:1, name: 'indoor', url: '/images/indoor.jpg'},
  {etag:2, name: 'sea', url: '/images/sea.jpg'},
]

export default function Home({ dispatch, state:{images} }) {
  useEffect(() => {
    client.search().then(d => (console.log(d), dispatch({type: 'images/set', payload: d})))
  }, [])

  return (
    <main className={'content'}>
      <Gallery imageData={images} onSelect={url => dispatch({type: 'image/select', payload: url})} />
    </main>
  )
}
