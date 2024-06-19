import "./SeccionMain.css";

function SeccionMain(){
    return <main className="main">
        <div className="info-main">
        <h1 className="title-main">FRONT END</h1>
        <h2 className="subtitle-main">Challenge React</h2>
        <p className="content-main">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div className="seccion-video-main">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1iJ5lof5kLM?si=ptqDWl4DBmyik_fY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </main>
}

export default SeccionMain;