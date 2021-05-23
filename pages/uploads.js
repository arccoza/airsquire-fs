import Gallery from '../components/gallery'


export default function Uploads({ state:{uploads} }) {
  uploads = Object.values(uploads)
  return (
    <main className={'content'}>
      <Gallery imageData={uploads} />
    </main>
  )
}
