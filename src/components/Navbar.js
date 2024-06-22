import React from 'react'
import PropTypes from 'prop-types'
// import { BsMoonStars } from "react-icons/bs";
// import { useState } from 'react'
import { Link } from 'react-router-dom';

const handleSearchClick = ()=>{
    const paragraph = Text;

// Function to search for a word in the paragraph
    function searchWord(word, paragraph) {
        // check that if the para is a string or not 
        if (typeof paragraph !== 'string') {
            console.error('Paragraph should be a string.');
            return false;
        }
        // Convert both the word and paragraph to lowercase for case-insensitive search
        const lowerCaseWord = word.toLowerCase();
        const lowerCaseParagraph = paragraph.toLowerCase();
        // Split the paragraph into an array of words
        const words = lowerCaseParagraph.split(' ');
        // Loop through the words to find the match
        for (let i = 0; i < words.length; i++) {
            // If the word is found, return true
            if (words[i] === lowerCaseWord) { 
                return true;
            }
        }
        
        // If the word is not found, return false
        return false;
    }

    // Function to prompt user for input and search for the word
    function findWordInParagraph() {
        // Prompt user for input
        const wordToFind = prompt("Enter a word to search in the paragraph:");
        
        // Check if the user entered a word
        if (wordToFind !== null && wordToFind !== "") {
            // Search for the word in the paragraph
            const wordFound = searchWord(wordToFind, paragraph);
            // Display the result
            if (wordFound) {
                alert(`The word "${wordToFind}" is found in the paragraph.`);
            } else {
                alert(`The word "${wordToFind}" is not found in the paragraph.`);
            }
        } else {
            // If the user didn't enter a word
            alert("Please enter a word to search.");
        }
    }

// Call the function to start the search
    findWordInParagraph();
}

export default function Navbar(props) {
    
    return ( 
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-body-tertiary ${props.mode}`} data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">{props.aboutText}</Link>
                    </li>
                </ul> 
                <form className="d-flex" role="search" onClick={handleSearchClick}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <div className={`form-check form-switch mb-2 text-${props.Mode === 'light'? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>
        </div>
        </nav>    
        </>
    )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired
                    
}


Navbar.defaultProps = {
    title : "Set tilte here",
    aboutText : "About text here"

}