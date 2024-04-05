import React from "react";

export function onRenderBody({ setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {

    // Add something into <head>
    setHeadComponents([
      <Link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
    <script type="text/javascript" id="vwoCode" dangerouslySetInnerHTML={{ __html: ` console.log("heelo")'`}} />,
    ]);

}
