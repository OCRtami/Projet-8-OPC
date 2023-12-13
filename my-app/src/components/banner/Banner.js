import "./css/Banner.css"
function Banner(){

    const actualPathName = window.location.pathname;
    console.log(actualPathName);

    return(
        <div className={actualPathName==="/about" ? "banner-about" : "banner-home"}>
        <p className="text">Chez vous, <span>partout et ailleurs</span></p>
    </div>
    )
}

export default Banner