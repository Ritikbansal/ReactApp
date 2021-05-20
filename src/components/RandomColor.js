export default function RandomColor(){
    
        const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
        const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
      const  arr=['to right','to left','to top','to bottom']
      const random = Math.floor(Math.random() * arr.length);
     return ("linear-gradient("+arr[random]+",#"+randomColor1+",#"+randomColor2+")");      
}
