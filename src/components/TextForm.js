import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked"  + Text)
        let newText = Text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper case ", "success")
    }

    const handlelowClick = ()=>{
        console.log("LowerCase was clicked"  + Text)
        let newText = Text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lower case ", "success")
    }

    const handleOnChange = (event)=>{
        console.log("handle on change")
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText);
        props.showalert("All text written on the Textbox have been cleared", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(Text);
        props.showalert("Coppied to clickboard", "success")
    }


    const [Text, setText] = useState('Enter text here');
    console.log(useState('Enter the text here'))
    // Text = "Enter the new text";
    //setText("enter new text"); 
    return (
        <>
            <div className = "container" style = {{color: props.mode === 'dark'? 'white': '#26244d'}}> 
                <h2> {props.heading} </h2>
                <div className = "mb-3 ">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea className = "form-control" value={Text} onChange={handleOnChange} 
                        style = {{backgroundColor: props.mode === "dark"? "#4375b5": "#80808042",
                        color: props.mode === "dark"? "white": "#26244d"}} id="mb-3" rows="12"></textarea>
                </div>
                <button disabled={Text.length === 0} className = "btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button disabled={Text.length === 0} className = "btn btn-primary mx-2 my-1" onClick={handlelowClick}>
                    Convert to LowerCase
                </button>
                <button disabled={Text.length === 0} className = "btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear
                </button>      
                <button disabled={Text.length === 0} className = "btn btn-primary mx-2 my-1" onClick={handleCopy}>
                    Copy
                </button> 
            </div>
            <div className="continer my-2 mx-3" style = {{color: props.mode === 'dark'? 'white': '#26244d'}}>
                <h3 className='mx-1'>Your Text Summary</h3>
                {/* <h2>Your Text Summary</h2> */}

                <div className = "mx-3">
                    <p>{Text.split(" ").filter((element) => { return element.length !== 0}).length} words</p>
                    <p>{Text.length} characters</p>
                    <p>{0.008*Text.split(" ").filter((element) => { return element.length !== 0}).length} min 
                        of reading time</p>
                </div> 

                <h3 className='mx-1'>Preview </h3>
                <p className='mx-3'>{Text.length > 0? Text : "Enter something in the textbox to preview it here"}</p> 

            </div>
        </>
    )
}
