import ItemList from '../components/ItemList';
import cover from '../assets/img/cover.jpg';

const Home = () => {
  console.log(process.env.REACT_APP_cliendIdPaypal)
  return (
    <div>
      <img src={cover} className="img-fluid" alt="cover-codizishop" />
      <div className="container mt-5">
        <h1 className="text-center">EN TENDENCIA</h1>
        <ItemList />
      </div>
    </div>
  )
}

export default Home;
