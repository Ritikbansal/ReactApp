import { useState, useRef } from 'react'
//import song from './Suncrown - Legend of the Forgotten Centuries.mp3'
import Slider from './Slider'
import './music/music2.mp3'
import './MusicCard.css'
import ControlPanel from './ControlPanel'
function MusicCard({srcs,artist,photos}) {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [src1,setSrc] = useState(obj[0].song_name)
    const [musicNum,setNum] =useState(0)
    const audioRef = useRef()
    console.log(srcs,artist,photos);
    const ChangeSrc = ()=>{
      let m=musicNum;
      setNum(m+1);
      console.log("called");
      setSrc(obj[m].song_name);
    }
    const onChange = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
    }
  
    const play = () => {
      const audio = audioRef.current
      audio.volume = 0.1
  
      if (!isPlaying) {
        setIsPlaying(true)
        audio.play()
      }
  
      if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
      }
    }
  
    const getCurrDuration = (e) => {
      const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
       
  
      setPercentage(+percent)
      //console.log(+percent);
      setCurrentTime(e.currentTarget.currentTime.toFixed(2))
    }
  
    function secondsToHms(seconds) {
        if (!seconds) return '00m 00s'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
    
        let sec = parseInt(duration)
    
        if (sec < 10) {
          sec = `0${sec}`
        }
        if (min < 10) {
          min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
          return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
          return `00m ${sec}s`
        } else {
          return `${min}m ${sec}s`
        }
      }
    return(<>
    
    
		<div class="col-sm-12 col-lg-6 col-xl-4">
			<div class="weather-card one">
				<div class="top" style={{backgroundImage :`url(${photos})`}}>
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">{artist}</h1>
						<h3 class="location">Dhaka, Bangladesh</h3>
                        <Slider percentage={percentage} onChange={onChange} /> 
                        <div class="flex-con1">
                    
					
                <div className='flex-itm float-left'>{secondsToHms(currentTime)}</div>
      <div className='flex-itm float-right'>{secondsToHms(duration)}</div>
                
				</div>
					</div>
				</div>
				<div class="flex-con">
                    
				<div class="flex-itm">	    
                    
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
          
        }}
        src={srcs}
      ></audio>
      <ControlPanel 
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />   </div>
				</div>
			</div>
		</div>

		

  
     
     
  
    

       
    
 </>
    )
}
export default MusicCard;
const obj=[{
  song_name:"http://wb.saccount.workers.dev/0:/MP3DOWNLOAD_TO_RINGTONE_Aroob_Khan_ft_Riyaz_Aly_Anshul_Garg_Rajat.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
  song_artist:"ARTIST1"
},{song_name:"http://wb.saccount.http://wb.saccount.workers.dev/0:/listringtones-com-iphone-trap-remix-53551.mp3",
song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
song_artist:"ARTIST2"}] 