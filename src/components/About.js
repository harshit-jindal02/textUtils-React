import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
    let myStyle = {
        backgroundColor: props.mode === "dark"?"#457b9d":"white", //457b9d
        // color: props.mode === "dark"?"white":"black"
    }

    let abtStyle = {
        backgroundColor: props.mode === "dark"?"#2f2b3a":"white", //457b9d
        color: props.mode === "dark"?"white":"black"
    }
    
    let btnStyle = {
        backgroundColor: props.mode === "dark"?"#5e5a66":"", //5e5a66
        color: props.mode === "dark"?"white":""
    }
  return (
    <div className='container'>
        <h2 className='my-3'style={abtStyle}>About us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={btnStyle}>
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                    <div className="accordion-body">
                      <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={btnStyle}>
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils is a free character counter tool </strong> that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={btnStyle}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                    <div className="accordion-body">
                        <strong>This word counter software</strong> works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

About.propTypes = {
    mode: PropTypes.string.isRequired
}