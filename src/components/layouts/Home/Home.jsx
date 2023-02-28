import React, {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Style from "./home.module.css"

export const HomeLa = () => {
    
    
    useEffect(() => {
        ScrollReveal().reveal(`${Style.text_box}` ,{ delay: 500, origin: "left" })
    }, []);
   
   
   
    // return (
    //     <div className={Style.container}>
    //         <h1 className={Style.main_title}>Bienvenidos</h1>
    //         <div className={Style.content}>
    //             <div className={Style.image}>
    //                 <img src={imageUrl} />
    //             </div>
    //             <div className={Style.text_box}>
    //                 <h2>React</h2>
    //                 <p>Juan Pablo Ramirez
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // )
}
