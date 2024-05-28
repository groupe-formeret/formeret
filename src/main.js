import './styles/style.css'
import 'swiper/css/bundle'
// import background from './features/background'
import espaceSlide from './features/espaceslide'
import form from './features/form'
import homeSpaceCusor from './features/homeSpaceCusor'
import homeslider from './features/homeslide'
import ScrollSmootherInit from './features/scrollSmoother'
import splitSlides from './features/splitSlides'
import titleAnim from './features/titleAnim'
import headerScroll from './features/headerScroll'
import roomSlide from './features/roomSlide'
import datepicker from './features/datepicker'

window.on('load', () => {
  // background()
  homeslider()
  espaceSlide()
  splitSlides()
  form()
  homeSpaceCusor()
  ScrollSmootherInit()
  titleAnim()
  headerScroll()
  roomSlide()
  datepicker()
});

console.log('viteJS ♥ webflow')
console.log('Formeret by #CosaVostra')