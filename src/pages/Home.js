  
  import img from '../components/Images/StartCake.png';
  import Info from '../components/Info.js';
  import Footer from '../components/Footer.js';
  import Navbar from '../components/Layout.js';
  import './Home.css';
  const Home = () => 
  {
    return(
      <div>
        <Navbar />
        <div className='rightSide'>
            <img src={img} alt="startcake"/>
            <Info />  
        </div>
          <Footer />
      </div>
    );
  }
  export default Home;
  