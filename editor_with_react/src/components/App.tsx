import { time } from "console";
import React, {useState, useEffect} from "react";
import Editor from "./Editor";


function App(){
    const [html,setHtml]=useState('') 
    const [css,setCss]=useState('') 
    const [js,setJs]=useState('') 
    const [srcDoc,setSrcDoc] = useState('')

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>            
            </html>
        `)
        },250)
        return () => clearTimeout(timeout)//waits for 250 ms and then renders the component
    },[html,css,js])

    //const srcDoc  = 

    return (
        <>
            <div className="top-pane">Hello User,</div>
            <div className="top-pane">Click corresponding buttons to explore/operate the tabs :</div>
            <div className="pane top-pane">
            <Editor 
             language="xml"
             displayName="HTML"
             value={html}
             onChange={setHtml}
            />
            <Editor 
             language="css"
             displayName="CSS"
             value={css}
             onChange={setCss}
            />
            <Editor 
             language="javascript"
             displayName="JS"
             value={js}
             onChange={setJs}
            />             
            </div>

            <div className="pane">
                Display Section
                <iframe 
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    )
}
export default App;


