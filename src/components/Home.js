import React,{useState} from 'react';
import MusicCard from './MusicCard';
export default function Home({obj}){
    const [no,setNo]=useState(0);
    const rows=[]
     obj.forEach((element,index) => {
        
      rows.push(<MusicCard srcs={element.song_name} photos={element.song_photo} artist={element.song_artist} />)
      console.log(element.song_name);
   });
    let array=[...rows];
    let a=0,b=0,c=obj.length/3-1;
    let parent=[]
    while(a<6)
    {  b=0; parent[a]=[];
       while(b<3)
      {  let X=Math.random(); parent[a].push(array[Math.floor(X*array.length)]);
           array.splice(Math.floor(X*array.length), 1);
            b=b+1; }
       

      a=a+1;
    }
     function changePage()
    {  console.log("hellow");
      if(no==6)
      return;
        setNo(no+1);
        setrenderMusicCard(parent[no])
    }
    const [renderMusicCard,setrenderMusicCard]=useState(parent[0]);
    return (
        <>  
        <button type="button" class="btn btn-primary" onClick={changePage}>B</button>
        <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button class="page-link" onClick={changePage()}>Previous</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage()}>1</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage()}>2</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage()}>3</button></li>
          <li class="page-item"><button class="page-link" onClick={changePage}>Nextt</button></li>
        </ul>
      </nav>
        <div class="container">
               <style>{'body{background:cyan'}</style>
    
            <div class="row">
       {renderMusicCard}
        {console.log("call")}</div>
       
        </div>{no}
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
class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }
  
  class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }
  
  class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
  

  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  
 