import { useReducer } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Image from 'next/image'
import HotBar, {Button, UploadButton} from '../components/hotbar'
import Icon from '../components/icon'


const navState = {
  view: false,
  browse: false,
  upload: false,
}

function navReducer(state, action) {

}

function App({ Component, pageProps }) {
  const [views, goto] = useReducer(navReducer, navState)
  const router = useRouter()
  // console.log(router)

  return (
  	<>
    <div className={'logo'}>
  	 <Image src={'/images/q.png'} width={11} height={27} />
    </div>
  	<Component {...pageProps} />
    <HotBar>
      <Button><Icon name={'search'}/></Button>
      <Button><Icon name={'apps'}/></Button>
      <Button><Icon name={'image'}/></Button>
      <UploadButton primary={true} onClick={ev => console.log(ev)}>
        <Icon name={'chevron-up-outline'}/>
      </UploadButton>
    </HotBar>
  	</>
  )
}

export default App
