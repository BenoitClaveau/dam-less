/*!
 * dambreaker
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

const DamBreaker = require("../../index");
const request = require('request');

describe("get", () => {

    // it("get", done => {
    //     let server = null;
    //     return Promise.resolve().then(() => {
    //         let giveme = new GiveMeTheService({ dirname: __dirname, config: {}});
            
    //         giveme.inject("info", "../services/info");
    //         giveme.get("/get", "info", "getInfo");

    //         return giveme.load().then(() => {
    //             server = http.createServer((request, response) => {
    //                 return giveme.invoke(request, response).catch(error => {
    //                     return response.send({ statusCode: 500, request: request, content: error }); //close request
    //                 });
    //             }).listen(1337);
                
    //             let client = giveme.resolve("client");
    //             return client.get({ url: "http://localhost:1337/get", json: true }).then(res => {
    //                 expect(res.body.whoiam).toBe("I'm Info service.");
    //             });
    //         });
    //     }).catch(fail).then(() => {
    //         if (server) server.close();
    //         done();
    //     });
    // });
});
