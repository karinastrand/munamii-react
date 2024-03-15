  
  import img from '../Images/StartCake.png';
  import Info from '../components/Info.js';
  import Footer from '../components/Footer.js';
  import Menu from '../components/Menu.js';
  import './Home.css';
  /*base layout for home*/
  const Home = () => 
  {
    return(
      <div className>
        <Menu />
        <div className='start'>
            <img src={img} alt="startcake"/>
            <div className='infostart'>
              <Info />  
            </div>
            
        </div>
        <Footer />
      </div>
    );
  }
  export default Home;
  