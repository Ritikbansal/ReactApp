import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/combine/SignUp';
import SignIn from './components/combine/SignIn';
import Price from './components/combine/Price';
import Footer from './components/Footer';
import Home from './components/Home2';
import ForgotPage from './components/combine/ForgotPage';
import Search from './components/Search';
import GiftCard from './components/Giftcard';
import Payment from './components/Payment';
import ErrorPage from './components/ErrorPage';
import ThankYou from './components/ThankYou';
import ContactUs from './components/ContactUs';
import M from './components/combine/MainPage';

  
function App() {
  

  
  return (
   
   <> 
      <Router>
        
      <NavBar/>
        <Switch>
        <Switch>
          <Route path='/' exact component={()=><M obj={obj1}/>} />
          <Route path='/pricing' component={Price} />
          <Route path='/home' component={()=><Home obj={obj1}/>} />
          <Route path='/forgot-password' component={ForgotPage} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/thank-you' component={ThankYou} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/buy-a-gift-card' component={GiftCard} />
          <Route path='/payment' component={Payment} />
          <Route path='/search' component={()=><Search obj={obj1}/>} />
          <Route path='/' component={ErrorPage} />
        </Switch>
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}
const obj=[{song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Love%20Me%20Like%20You%20Do%20-%20Ellie%20Goulding%20(Lyrics%20video%20dan%20terjemahan).mp3",
song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ellie%20Goulding.png",
song_artist:"Ellie Goulding"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Ariana%20Grande%20-%207%20rings%20(Lyrics).mp3" ,
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ariana%20Grande.png",
  song_artist:"Ariana Grande"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/AViVA%20-%20Blackout%20(Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/AViVA.png",
  song_artist:"AViVA"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Celine%20Dion%20-%20My%20Heart%20will%20go%20on%20-%20Titanic-Lyrics.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Celine%20Dion.png",
  song_artist:"Celine Dion"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Clean%20Bandit%20-%20Rockabye%20(Lyrics)%20feat.%20Sean%20Paul%20&%20Anne-Marie.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Clean%20Bandit.png",
  song_artist:"Clean Bandit"}
  ,
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/David%20Guetta%20-%20Titanium%20(Lyrics)%20ft.%20Sia.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/David%20Guetta.png",
  song_artist:"David Guetta"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Ed%20Sheeran%20-%20Perfect%20(Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ed%20Sheeran.png",
  song_artist:"Ed Sheeran"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Imagine%20Dragons%20-%20Believer%20(Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Imagine%20Dragons.png",
  song_artist:"Imagine Dragons"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Maroon%205%20-%20Girls%20Like%20You%20(Lyrics)%20ft.%20Cardi%20B.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Maroon%205-Girls.png",
  song_artist:"Maroon 5"},
  {song_name:"/https://ritik.ritikbansal.workers.dev/0:/Songs/Maroon%205%20-%20Memories%20(Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Maroon%205-Memories.png",
  song_artist:"Maroon 5"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Marshmello%20-%20Summer%20(Official%20Music%20Video)%20with%20Lele%20Pons.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Marshmellow.png",
  song_artist:"Marshmellow"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Nurko%20-%20Breathe%20Without%20(Lyrics)%20ft.%20Luma.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Nurko.png",
  song_artist:"Nurko"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/RIELL%20-%20Stubborn%20(Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Riell.png",
  song_artist:"RIELL"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/The%20Chainsmokers%20-%20Closer%20(Lyric)%20ft.%20Halsey.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Chainsmokers.png",
  song_artist:"Chainsmokers"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/paradise.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/paradise.jpg",
  song_artist:"ARTIST2"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Sleep%20on%20the%20floor.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Sleep%20on%20the%20floor.jpg",
  song_artist:"ARTIST2"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Stubborn%20Love.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Stubborn%20Love.jpg",
  song_artist:"ARTIST2"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Thunder.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Thunder.jpg",
  song_artist:"ARTIST2"},
  {song_name:"https://ritik.ritikbansal.workers.dev/0:/Songs/Yellow.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Yellow.jpg",
  song_artist:"ARTIST2"}] 


  const obj1=[{song_name:"./music/Love Me Like You Do - Ellie Goulding (Lyrics video dan terjemahan).mp3",
song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ellie%20Goulding.png",
song_artist:"Ellie Goulding"},
  {song_name:"./music/Ariana Grande - 7 rings (Lyrics).mp3" ,
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ariana%20Grande.png",
  song_artist:"Ariana Grande"},
  {song_name:"./music/AViVA - Blackout (Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/AViVA.png",
  song_artist:"AViVA"},
  {song_name:"./music/Celine Dion - My Heart will go on - Titanic-Lyrics.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Celine%20Dion.png",
  song_artist:"Celine Dion"},
  {song_name:"./music/Clean Bandit - Rockabye (Lyrics) feat. Sean Paul & Anne-Marie.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Clean%20Bandit.png",
  song_artist:"Clean Bandit"}
  ,
  {song_name:"./music/David Guetta - Titanium (Lyrics) ft. Sia.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/David%20Guetta.png",
  song_artist:"David Guetta"},
  {song_name:"./music/Ed Sheeran - Perfect (Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Ed%20Sheeran.png",
  song_artist:"Ed Sheeran"},
  {song_name:"./music/Imagine Dragons - Believer (Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Imagine%20Dragons.png",
  song_artist:"Imagine Dragons"},
  {song_name:"./music/Maroon 5 - Girls Like You (Lyrics) ft. Cardi B.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Maroon%205-Girls.png",
  song_artist:"Maroon 5"},
  {song_name:"./music/Maroon 5 - Memories (Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Maroon%205-Memories.png",
  song_artist:"Maroon 5"},
  {song_name:"./music/Marshmello - Summer (Official Music Video) with Lele Pons.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Marshmellow.png",
  song_artist:"Marshmellow"},
  {song_name:"./music/Nurko - Breathe Without (Lyrics) ft. Luma.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Nurko.png",
  song_artist:"Nurko"},
  {song_name:"./music/RIELL - Stubborn (Lyrics).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Riell.png",
  song_artist:"RIELL"},
  {song_name:"./music/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Chainsmokers.png",
  song_artist:"Chainsmokers"},
  {song_name:"./music/Becky G - Shower.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Shower.png",
  song_artist:"Becky G"},
  {song_name:"./music/Blank Space - Taylor Swift.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Blank.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/Charlie Puth - Say Something.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Say.png",
  song_artist:"Charlie Puth"},
  {song_name:"./music/Chris Scholar - I like you.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Scholar.png",
  song_artist:"Chris Scholar"},
  {song_name:"./music/Cmagic5 - Love Me If You Can.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Cmagic5.png",
  song_artist:"Cmagic5"},
  {song_name:"./music/Heart Attack - Demi Lovato.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Heart.png",
  song_artist:"Demi Lovato"},
  {song_name:"./music/Human - Christina Perri (Austin & Kurt Schneider Cover).mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Human.png",
  song_artist:" Christina Perri"},
  {song_name:"./music/I Am Trails - Regrets.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Regrets.png",
  song_artist:"Regrets"},
  {song_name:"./music/Legend Never Die Against The Current.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Current.png",
  song_artist:"Current"},
  {song_name:"./music/Sam Smith - Too Good At Goodbyes.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Goodbyes.png",
  song_artist:"Sam Smith"},
  {song_name:"./music/Set fire to the rain - Adele.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Adele.png",
  song_artist:"Adele"},
  {song_name:"./music/Sweet but pyscho.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Sweet.png",
  song_artist:"Sweet but pyscho"},
  {song_name:"./music/Taylor Swift - Bad Blood ft. Kendrick Lamar.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Bad.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/Taylor Swift - Blank Space.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Blank.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/Taylor Swift - Cruel Summer.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Cruel.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/Taylor Swift - Delicate.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Delicate.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/Taylor Swift - Look What You Made Me Do.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/LookWhat.png",
  song_artist:"Taylor Swift"},
  {song_name:"./music/The Chainsmokers & Coldplay - Something Just Like This.mp3",
  song_photo:"https://ritik.ritikbansal.workers.dev/0:/pic/Something.png",
  song_artist:"The Chainsmokers & Coldplay"}
  ] 
export default App;
