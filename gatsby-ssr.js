import React from "react";

export function onRenderBody({ setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {

    // Add something into <head>
    setHeadComponents([
    <script  dangerouslySetInnerHTML={{ __html: ` console.log("heelo")'`}} />,
    ]);

}
