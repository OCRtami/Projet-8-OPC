import "./css/Banner.css"
function Banner(){

    const actualPathName = window.location.pathname;
    
    return(
        <div className={actualPathName==="/about" ? "banner-about" : "banner-home"}>
        <p className="text">Chez vous, <span>partout et ailleurs</span></p>
    </div>
    )
}

export default Banner