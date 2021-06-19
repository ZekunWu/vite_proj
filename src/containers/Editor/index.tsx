import React, { FC, useEffect, useState } from 'react'
import {Header} from '../../component/Header'
import {Controlled as Codemirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/clike/clike'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/neat.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/addon/hint/show-hint'

import styles from './index.module.css'

const Editor: FC = () => {
  const [model, setModel] = useState('just for test!')
  const [mode, setMode] = useState('text/x-java')
  const [theme, setTheme] = useState('monokai')
  let sampleMode = () => {
    return {
      startState: function () {
        return {inString: false};
      },
      token: function (stream, state) {
        // If a string starts here
        if (!state.inString && stream.peek() == '"') {
          stream.next();            // Skip quote
          state.inString = true;    // Update state
        }
  
        if (state.inString) {
          if (stream.skipTo('"')) { // Quote found on this line
            stream.next();          // Skip quote
            state.inString = false; // Clear flag
          } else {
            stream.skipToEnd();    // Rest of line is string
          }
          return "string";          // Token style
        } else {
          stream.skipTo('"') || stream.skipToEnd();
          return null;              // Unstyled token
        }
      }
    };
  };  
  return (
    <div className={styles.homePage}>
      <Header />
      <div style={{marginTop: '60px'}}>
        <Codemirror
          value={model}
          defineMode={{name: 'strings', fn: sampleMode}}
          options={{
            mode: mode,
            theme: theme,
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            // console.log('controlled', {value});
            setModel(value);
          }}
          onChange={(editor, data, value) => {
            // console.log(value);
          }}
        />
      </div>
    </div>
  )
}

export default Editor