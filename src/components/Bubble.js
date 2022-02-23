/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import BubbleUI  from 'react-bubble-ui';
import React from 'react';
import "react-bubble-ui/dist/index.css";

function CompanyBubble(props) {
    return (
        <div
            style={{
                backgroundColor: props.backgroundColor + "d0",
            }}
            className={"companyBubble"}
        >
            {true ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        transition: "opacity 0.1s ease",
                        opacity: props.bubbleSize > 50 ? 1 : 0,
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={`./companyLogos/${props.symbol}.svg`}
                        alt=""
                        style={{
                            width: 50,
                            borderRadius: `50%`,
                            marginBottom: 10,
                        }}
                    ></img>
                    <p
                        style={{
                            color: props.textColor,
                            fontSize: 14,
                            marginBottom: 6,
                            fontWeight: 1000,
                            maxWidth: 150,
                            textAlign: "center",
                        }}
                    >
                        {props.name}
                    </p>
                    <p
                        style={{
                            color: props.textColor,
                            fontSize: 14,
                            marginBottom: 5,
                            maxWidth: 100,
                            opacity: 0.5,
                        }}
                    >
                        {props.symbol}
                    </p>
                </div>
            ) : null}
        </div>
    );
}

const companyData = [
    { "symbol": "MMM", "name": "3M Company", "backgroundColor": "#EE1B2D", "textColor": "white" },
    { "symbol": "ABT", "name": "Abbott Laboratories", "backgroundColor": "#0096D7", "textColor": "white" },
    { "symbol": "ABBV", "name": "AbbVie Inc.", "backgroundColor": "#00003A", "textColor": "white" },
    { "symbol": "ABMD", "name": "ABIOMED Inc", "backgroundColor": "#F0F3FA", "textColor": "black" },
    { "symbol": "ACN", "name": "Accenture plc", "backgroundColor": "#A100FF", "textColor": "white" }
];

export default function Bubble () {

    const getStockBubbles = () => {
        return companyData.slice(0, 20).map((company, i) => {
            return <CompanyBubble {...company} key={i} />;
        });
    };
    const stockBubbles = getStockBubbles();

    const handleInputChange = (key, value) => {
        console.log(key, value);
        let newOptions = {};
        Object.assign(newOptions, options);
        newOptions[key] = value;
        console.log(newOptions);
        setOptions(newOptions);
    };


    const [options, setOptions] = useState({
        size: 160,
        minSize: 26,
        gutter: 8,
        provideProps: true,
        numCols: 6,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 5,
    });

    return (
        <BubbleUI className="bubbleUI" options={options}>
            {stockBubbles}
        </BubbleUI>
    )
}