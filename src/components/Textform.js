import React, { useState } from 'react';



export default function Textform(props) {
    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converting to UpperCase", "success");
    }
    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converting to LowerCase", "success");
    }
    const handleClclick = ()=>{
        let newText = '';
        setText(newText)
    }
    // const handlebOLclick = ()=>{
    //     let newText = text.replace();
    //     setText(newText)
    // }

    const handleOnChange = (event)=>{
        setText(event.target.value)
        
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="mybox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolor:props.mode === 'dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClclick}>Clear Text</button>
                {/* <button className="btn btn-primary mx-1" onClick={handlebOLclick}>Replace Text</button> */}
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
