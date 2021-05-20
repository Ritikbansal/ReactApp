import React from 'react';
import MusicCard from './MusicCard';
export default function Home(){
    let rows =[]
    obj.forEach((element,index) => {
        
        rows.push(<MusicCard srcs={element.song_name} photos={element.song_photo} artist={element.song_artist} />)
        console.log(element.song_name);
     });
    return (
        <><div class="container">
               <style>{'body{background:linear-gradient(0deg, rgba(253,187,45,1) 3%, rgba(253,187,45,1) 9%, rgba(83,192,161,1) 76%, rgba(34,193,195,1) 83%, rgba(34,193,195,1) 92%);}'}</style>
    
            <div class="row">
       {rows}
        {console.log("call")}</div></div>
        </>
    )
};
const obj=[{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},{
    song_name:"http://wb.saccount.workers.dev/0:/MP3DOWNLOAD_TO_RINGTONE_Aroob_Khan_ft_Riyaz_Aly_Anshul_Garg_Rajat.mp3",
    song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
    song_artist:"ARTIST1"
  },{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_09-45-19.jpg",
  song_artist:"ARTIST2"},{song_name:"http://wb.saccount.workers.dev/0:/song.mp3",
  song_photo:"http://wb.saccount.workers.dev/0:/photo_2021-05-10_06-37-40.jpg",
  song_artist:"ARTIST2"}] 
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
  
 