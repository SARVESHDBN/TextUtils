import React, { useState } from 'react'

export default function About(props) {
    
    // the code for the button(code at the bottom)
    // const [mystyle, setmystyle] = useState({
    //     color: 'rgb(46, 48, 46)',
    //     backgroundColor: 'white'
    // })
    
    
    // const [btntext, setbtntext] = useState("Enable dark mode")
    
    // const togglestyle = ()=>{
    //     if (mystyle.color === "white") {
    //         setmystyle({
    //             color: 'rgb(46, 48, 46)',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setbtntext("Enable dark mode")
    //     }
    //     else {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'rgb(46, 48, 46)'
    //         })
    //         setbtntext("Disable dark mode")
    //     }
    // }
    
    let mystyle = {
        color: props.mode === "dark"? "white": "#26244d",
        backgroundColor: props.mode === "dark"? "#4375b5": "#80808042",
        border: props.mode === "dark"? "1px solid white" : "1px solid black"
    }

    return (
        <div className="container" style = {{backgroundColor: props.mode === "dark"? "#26244d": "white",
            color: props.mode === "dark"? "white": "#26244d"}}>
            <h1> About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
                        style = {mystyle}>
                            Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" 
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {mystyle}>
                            <strong>This is the first item's accordion body.</strong> 
                            It is shown by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees 
                            control the overall appearance, as well as the showing and hiding
                            via CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just 
                            about any HTML can go within the <code>.accordion-body</code>, 
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                        style = {mystyle}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden 
                            by default,until the collapse plugin adds the appropriate classNamees 
                            that we use to style each element. These classNamees control the overall
                            appearance, as well as the showing and hiding via CSS transitions.
                            You can modify any of this with custom CSS or overriding our default 
                            variables. It's also worth noting that just about any HTML can go 
                            within the <code>.accordion-body</code>, though the transition does 
                            limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" 
                        style = {mystyle}> Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classNamees that we use to style 
                                each element. These classNamees control the overall appearance, as well as the 
                                showing and hiding via CSS transitions. You can modify any of this with custom
                                CSS or overriding our default variables. It's also worth noting that just about
                                any HTML can go within the <code>.accordion-body</code>, though the transition
                                does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick = {togglestyle} type="button" className="btn btn-primary my-2" >{btntext}</button> */}
        </div> 
    )
}  

// onClick = {togglestyle}