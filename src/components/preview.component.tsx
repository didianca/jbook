import './preview.component.css';
import React, { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
  error: string;
}

const iframeHtml = `
       <html lang="">
            <head>
                <title></title>
                <style> html { background-color: white; }
            </style>
            </head>
            <body>
                <div id="root"></div>
                <script>
                    const handleError = (e) => {
                        const root = document.querySelector('#root');
                        root.innerHTML = '<div style= "color: red"> <h4>Runtime Error</h4>' + e + '</div>'
                        console.error(e);
                    }
                    window.addEventListener('error',(event) => {
                        event.preventDefault();
                        handleError(event.error)
                    })
                    window.addEventListener('message', (event) => {
                           eval(event.data);             
                    }, false);
                </script>
            </body>
        </html>
    `;

const PreviewComponent: React.FunctionComponent<PreviewProps> = ({
  code,
  error,
}) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = iframeHtml;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        srcDoc={iframeHtml}
        sandbox="allow-scripts"
      />
      {error && <div className="preview-error">{error}</div>}
    </div>
  );
};

export default PreviewComponent;
