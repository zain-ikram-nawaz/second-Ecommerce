import "@/styles/globals.css";
import {store} from "../redux/store"
import {Provider} from 'react-redux';
import NavBar from "./component/navbar/navbar";
import LinkBar from "./component/navbar/linkbar";
import Footer from "./component/footer";
export default function App({ Component, pageProps }) {
  return(

    <div>
       <NavBar></NavBar>
      <LinkBar></LinkBar>
    <Provider store={store}> 
    <Component {...pageProps} />
    </Provider>
    <Footer></Footer>
  </div>
  )
}
