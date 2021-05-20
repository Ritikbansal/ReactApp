import React from 'react';
import MainPage from '../MainPage';
import Audio from '../Audio';
import MusicCard from '../MusicCard';
export default function M({obj}) {
  const random = Math.floor(Math.random() * obj.length);
  const element=obj[random];
  return (<>
      <MainPage obj={obj}/>
      
      <MusicCard srcs={element.song_name} photos={element.song_photo} artist={element.song_artist} />
 
      
      
      
      
      
      </>
  );
}
