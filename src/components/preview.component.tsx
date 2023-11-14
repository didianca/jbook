import React, { useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
}

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
    `;

const Preview: React.FunctionComponent<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = iframeHtml;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);
  return (
    <iframe
      title="preview"
      ref={iframe}
      srcDoc={iframeHtml}
      sandbox="allow-scripts"
    />
  );
};

export default Preview;
