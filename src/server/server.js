import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";

import App from "../shared/App";
import htmlRemplate from "../shared/html-template";

const server = express();;

server.use('/static/', express.static("static"));

// 127.0.0.1:3000/
server.get("/", (req, res) => {

    const initialState = {};
    const body = ReactDOM.renderToString(<App {...initialState} />);

    res.send(
        htmlRemplate({
            body,
            title: "Crypto Power",
            initialState: JSON.stringify(initialState)
        })
    );
});

server.listen(3000);
