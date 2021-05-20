import React,{useState} from 'react';
import MusicCard from './MusicCard';
export default function Home({obj}){
    let no=0;
    const rows=[]
     obj.forEach((element,index) => {
        
      rows.push(<MusicCard srcs={element.song_name} photos={element.song_photo} artist={element.song_artist} />)
      console.log(element.song_name);
   });
    let array=[...rows];
    let a=0,b=0,c=obj.length/3-1;
    let parent=[]
    while(a<10)
    {  b=0; parent[a]=[];
       while(b<6)
      {  let X=Math.random(); parent[a].push(array[Math.floor(X*array.length)]);
           array.splice(Math.floor(X*array.length), 1);
            b=b+1; }
       

      a=a+1;
    }
     function changePage()
    {  console.log("hellows");
      if(no>=6)
      no=no%6;
        no=no+1
        console.log("no",no)
        setrenderMusicCard(parent[no])
    }
    const [renderMusicCard,setrenderMusicCard]=useState(parent[0]);
    return (
        <>  
        <div class="container">
               <style>{'body{background:cyan'}</style>
               <div class="row m-1 p-1">
               <div class="col">
       
       </div> <div class="col">
       <div class="text-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button class="page-link" onClick={changePage}>Previous</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>1</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>2</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>3</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>4</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>5</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>6</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>7</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>8</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>9</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>10</button></li>
         
          <li class="page-item"><button class="page-link" onClick={changePage}>Nextt</button></li>
        </ul>
      </nav></div>
       </div> <div class="col">
       
       </div>
       </div>
            <div class="row">
       {renderMusicCard}
        {console.log("call")}</div>
       
        </div>
        </>
    )
};
// const obj1=[{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
//   song_artist:"ARTIST2"},{
//     song_name:"http://wb.saccount.workers.dev/0:/MP3DOWNLOAD_TO_RINGTONE_Aroob_Khan_ft_Riyaz_Aly_Anshul_Garg_Rajat.mp3",
//     song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
//     song_artist:"ARTIST1"
//   },{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
//   song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
//   song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
//   song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
//   song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
//   song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
//   song_artist:"ARTIST2"}] 

 