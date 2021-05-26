import Gallery from '../components/gallery'


export default function Uploads({ dispatch, state:{uploads} }) {
  uploads = Object.values(uploads)
  return (
    <main className={'content'}>
      <Gallery imageData={uploads} onSelect={url => dispatch({type: 'image/select', payload: url})} />
    </main>
  )
}
