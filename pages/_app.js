import { useReducer } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Image from 'next/image'
import HotBar, {Button, UploadButton} from '../components/hotbar'
import Icon from '../components/icon'
import client from '../lib/client'
import Head from 'next/head'
import SearchBar from '../components/search-bar'


const initState = {
  search: false,
  nav: {
    current: null,
  },
  uploads: {},
  images: [],
  image: '',
}

const reducers = {
  'search/visible'({ nav }, action) {
    return {search: action.payload}
  },

  'nav/goto'({ nav }, action) {
    return {nav: {
      ...state,
    }}
  },

  'uploads/add'({ uploads }, action) {
    return {uploads: {
      ...uploads,
      ...action.payload,
    }}
  },

  'images/set'({ images }, action) {
    return {images: action.payload}
  },

  'images/add'({ images }, action) {
    return {images: [
      ...browsed,
      ...action.payload,
    ]}
  },

  'image/select'({ image }, action) {
    // if (image == action.payload)
    //   return { image }
    this.handleSelect && this.handleSelect(action.payload)
    return {image: action.payload}
  },

  handleSelect: null,
}

const reducer = (state, action) => {
  return {
    ...state,
    ...reducers[action.type](state, action),
  }
}

function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initState)
  const router = useRouter()
  const location = router.asPath
  reducers.handleSelect = url => router.push(`/view/${encodeURIComponent(url)}`)

  return (
  	<>
    <Head>
      {/*<meta name="referrer" content="no-referrer" />*/}
    </Head>
    <div className={'logo'}>
  	 <Image src={'/images/q.png'} width={11} height={27} />
    </div>
  	<Component {...pageProps} dispatch={dispatch} state={state} />
    <SearchBar visible={state.search} />
    <HotBar>
      <Button toggled={state.search} onClick={ev => dispatch({type: 'search/visible', payload: !state.search})}>
        <Icon name={'search'} />
      </Button>
      <Button toggled={location == '/'} onClick={ev => router.push(`/`)}>
        <Icon name={'apps'} />
      </Button>
      <Button toggled={location.includes('/view')} onClick={ev => router.push(`/view/${state.image}`)} disabled={!state.image}>
        <Icon name={'image'} />
      </Button>
      <UploadButton primary={true} onFiles={files => uploadImages(router, files, dispatch)}>
        <Icon name={'chevron-up-outline'}/>
      </UploadButton>
    </HotBar>
  	</>
  )
}

function uploadImages(router, files, dispatch) {
  var uploads = {}
  for (let i = 0; i < files.length; i++) {
    var file = files[i]
    var upload = client.upload(file)
    upload.url = URL.createObjectURL(file)
    uploads[file.name] = upload
  }

  dispatch({type: 'uploads/add', payload: uploads})

  for (let name in uploads) {
    if (!uploads.hasOwnProperty(name))
      continue
    uploads[name].then(img => dispatch({type: 'uploads/add', payload: {[name]: img}}))
  }

  router.push('/uploads')

  return uploads
}

export default App
