import logo from './logo.svg';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/combine/SignUp';
import SignIn from './components/combine/SignIn';
import Price from './components/combine/Price';
import MainPage from './components/combine/MainPage';
import Footer from './components/Footer';
import Home from './components/Home';
import ForgotPage from './components/combine/ForgotPage';
import {useState} from 'react'
import Search from './components/Search';


  
  
function App() {
  const [val,setVal] = useState('hh')
  return (
   
   <> 
      <Router>
        
      <NavBar setVal={setVal}/>
        <Switch>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/pricing' component={Price} />
          <Route path='/home' component={Home} />
          <Route path='/forgot-password' component={ForgotPage} />
          <Route path='/pricing' component={Price} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/search' component={()=><Search obj={obj}/>} />
        </Switch>
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}
const obj=[{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},
  {
    song_name:"http://wb.saccount.workers.dev/0:/MP3DOWNLOAD_TO_RINGTONE_Aroob_Khan_ft_Riyaz_Aly_Anshul_Garg_Rajat.mp3",
    song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
    song_artist:"ARTISTkan"
  },{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},
  {song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},
  {song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},
  {song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},
  {song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
  song_artist:"ARTIST2"}] 
export default App;
