//example.js
import React, { Component } from "react";
import media from "../../../theme/Device";
const ExampleContainer = styled.div`
    font-size: 2em;
    
    ${media.phoneL`
        padding-left: 84px;
    `}
    
    ${media.laptop`
        padding-left: 184px;
    `}
    
    ${media.laptopLL`
        padding-left: 200px;
    `}
`;
