import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase");
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        console.log("UpperCase");
        setText(text.toLowerCase())
    }
    const handleClearClick = () => {
        console.log("Clear text");
        setText("");
    }
    const handleCopy = () => {
        console.log("Copy text");
        let text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        console.log("Remove extra spaces");
        let newText = text.split(/[" "]+/);
        setText(newText.join(" "));
    }
    const handleRevertClick = () => {
        console.log("Revert text");
        setText("Enter text here!");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here!");
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode === 'light'? 'white': 'grey'}} id="myBox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
            <button className='btn btn-primary mx-1' onClick={handleRevertClick}>Revert changes</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>
        </>
    )
}
