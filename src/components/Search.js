import React,{useState} from 'react';
import MusicCard from './MusicCard';
import RandomColor from './RandomColor';
export default function Search({obj}){
    let rows =[]
    let val='';
    const [a,b]=useState('');
    function handleSubmit(e)
    {
        b(e.target.value.toLowerCase());
    }
    obj.forEach((element,index) => {
       if(element.song_name.toLowerCase().indexOf(a) === -1)
        return
        rows.push(<MusicCard srcs={element.song_name} photos={element.song_photo} artist={element.song_artist} />)
        console.log(element.song_name);
     });
    return ( 
        <>
        <style>{'body{background:'+RandomColor()+'}'}</style>
     <div class="justify-content-center align-items-center align-content-center">
          <div> <input class="form-control" style={{"margin":"3% auto auto 25%","width":"50%"}} onChange={handleSubmit} type="search" placeholder="Search" aria-label="Search"/>
          </div></div>
        <div class="container">
            <div class="row">
          {rows}</div></div>
        </>
    )
};
