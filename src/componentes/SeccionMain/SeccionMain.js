import "./SeccionMain.css";

function SeccionMain(){
    return <div className="main">
        <div className="content-main">
            <div className="info-main">
                <h1 className="title-main">FRONT END</h1>
                <h2 className="subtitle-main">Challenge React</h2>
                <p className="parrafo-main">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className="seccion-video-main">
                <iframe src="https://www.youtube.com/embed/03cxUlwLVt4?si=tX2AwqiiThggwjRb" frameborder="0"></iframe>
            </div>
        </div>
    </div>
}

export default SeccionMain;
