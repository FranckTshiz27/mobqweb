import  '../style/home.scss';
function Home() {
  return (
    <div className='container-fluid home'>
    <div className='row main-row'>
      <div className='col-2 vertical-menu'>
        <div className='row vertical-menu__header d-flex flex-row align-items-center justify-content-between'>
        <i className="fa-solid fa-bars icon"></i>
        <img src='profile.png'/>
        <div className='d-flex flex-column justify-content-center identiy-container'>
          <p className='name'> François Tshi</p>
          <p className='role'> Super Admin</p>
        </div>
        </div>
        <div className='row vertical-menu__body'>Menu</div>
      </div>
      <div className='col-10'>Mon contenu</div>
    </div>
    </div>
  );
}

export default Home;
