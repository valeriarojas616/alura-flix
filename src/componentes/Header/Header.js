import './Header.css';

function Header(){
    return <header className='header'>
        <img className='logo' src="/img/aluraflix-logo.png" alt='AluraFlix'/>
        <div className='seccion-buttons'>
        <button className='home-button' type='submit'>HOME</button>
        <button className='new-video-button' type='submit'>NUEVO VIDEO</button>
        </div>
    </header> 

      
}

export default Header;