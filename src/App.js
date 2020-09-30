import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

import { sampleText } from './exempleText'

function App() {
  
  const [text, setText] = useState([{
      text: sampleText
    }])

  const handleChange = event => {
    setText([{ text: event.target.value }])
  }
  
  return (
    <div className="App">
      <header>Markdown Editor</header>
      <div className="editor">
        <textarea 
          rows="35"
          onChange={handleChange}
          defaultValue={sampleText}
        />
      </div>
      <div className="render">
        <ReactMarkdown
          className="text"
          source={ text[0].text }
          escapeHtml={true}
        />
      </div>
    </div>
  );
}

export default App