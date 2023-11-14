import 'bulmaswatch/superhero/bulmaswatch.min.css';
import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import {unpkgPathPlugin} from "./plugins/unpackage-path.plugin";
import {fetchPlugin} from "./plugins/fetch.plugin";
import React from 'react';
import CodeEditorComponent from "./components/code-editor.component";

const App = () => {
    const [input, setInput] = useState('');
    const ref = useRef<any>();
    const iframe = useRef<any>();

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
        })
    };

    useEffect(() => {
       startService()
    }, []);

    const onClick = async () => {
        if (!ref.current) {
            return
        }

        iframe.current.srcdoc = iframeHtml;

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(input)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
            }
        });
        iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
    };

    const iframeHtml = `
       <html lang="">
            <head><title></title></head>
            <body>
                <div id="root"></div>
                <script>
                    window.addEventListener('message', (event) => {
                        try {
                           eval(event.data);                                
                        } catch (e) {
                          const root = document.querySelector('#root');
                          root.innerHTML = '<div style= "color: red"> <h4>Runtime Error</h4>' + e + '</div>'
                          console.error(e);
                        }
                    }, false);
                </script>
            </body>
        </html>
    `

    return <div>
        <CodeEditorComponent initialValue={"// Start your code here; "} onChange = {(value) => setInput(value)}/>
        <textarea value={input} onChange={(event) => setInput(event.target.value)}/>
        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <iframe  title= "preview" ref={iframe} srcDoc={iframeHtml} sandbox="allow-scripts" />
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);