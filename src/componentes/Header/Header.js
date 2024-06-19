import './Header.css';

function Header(){
    return <header className='header'>
        <img className='logo' src="/img/aluraflix-logo.png" alt='AluraFlix'/>
        <div className='seccion-buttons'>
        <a className='home-href' href='./App.js'><button className='home-button' action='App.js'>HOME</button></a>
        <button className='new-video-button' type='submit'>NUEVO VIDEO</button>
        </div>
    </header> 

      
}

export default Header;