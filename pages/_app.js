import { useReducer } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Image from 'next/image'
import HotBar, {Button, UploadButton} from '../components/hotbar'
import Icon from '../components/icon'
import client from '../lib/client'
import Head from 'next/head'


const initState = {
  nav: {
    current: null,
  },
  uploads: {},
  images: [],
  image: null,
}

const reducers = {
  'nav/goto'({ nav }, action) {
    return {nav: {
      ...state,
    }}
  },

  'uploads/add'({ uploads }, action) {
    console.log(uploads, action.payload)
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
    return {image: action.payload}
  }
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

  return (
  	<>
    <Head>
      {/*<meta name="referrer" content="no-referrer" />*/}
    </Head>
    <div className={'logo'}>
  	 <Image src={'/images/q.png'} width={11} height={27} />
    </div>
  	<Component {...pageProps} dispatch={dispatch} state={state} />
    <HotBar>
      <Button><Icon name={'search'}/></Button>
      <Button><Icon name={'apps'}/></Button>
      <Button><Icon name={'image'}/></Button>
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
