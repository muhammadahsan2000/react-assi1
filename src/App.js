import logo from './logo.svg';
import './App.css';

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 }
];

function Product({ name, price }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default App;
