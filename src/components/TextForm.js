import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  
  function handleLowClick () {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }

  function handleClrClick() {
    setText("");
    props.showAlert("Text has been cleared", "success");
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied", "success");
  }

  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  }

  function handleOnChange(event) {
    const newText = event.target.value;
    setText(newText);
    const trimmedText = newText.trim();
    const newWordCount = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
    setWordCount(newWordCount);
    const newCharCount = trimmedText.length;
    setCharCount(newCharCount);
  }

  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");
  
  return (
    <>
      <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
          <h2 className='mb-3'>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.mode === "dark"?"#5e5a66":"white", color: props.mode === "dark"?"white":"black"}} placeholder='Enter your text here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Conver to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Exrta Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark"?"white":"black"}}>
        <h3>Your Text Summary</h3>
        <p>{wordCount} words {charCount} characters</p>
        <p>{0.192*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} seconds or {0.0032*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes taken to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter your heading"
}