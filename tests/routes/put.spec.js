/*!
 * dam-less
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const DamLess = require("../../index");
const request = require('request');

describe("put", () => {

    // it("put", done => {
    //     let server = null;
    //     return Promise.resolve().then(() => {
    //         let giveme = new GiveMeTheService({ dirname: __dirname, config: {}});
            
    //         giveme.inject("info", "../services/info");
    //         giveme.put("/update", "info", "update");

    //         return giveme.load().then(() => {
    //             server = http.createServer((request, response) => {
    //                 return giveme.invoke(request, response).catch(error => {
    //                     return response.send({ statusCode: 500, request: request, content: error }); //close request
    //                 });
    //             }).listen(1337);
            
    //             let client = giveme.resolve("client");
    //             return client.put({ url: "http://localhost:1337/update", json: { login: "test" }}).then(res => {
    //                 expect(res.body.status).toBe("updated");
    //             });
    //         });
    //     }).catch(fail).then(() => {
    //         if (server) server.close();
    //         done();
    //     });
    // });
});
