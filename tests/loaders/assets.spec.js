/*!
 * damless
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

const expect = require("expect.js");
const DamLess = require("../../index");

describe("Load assets", () => {

    let damless;
    beforeEach(async () => {
        damless = await new DamLess()
            .cwd(__dirname)
            .config("./damless.json")
            .start();
    })
    afterEach(async () => await damless.stop());

    it("assets", async () => {
        const isitasset = await damless.resolve("isitasset");
        expect(isitasset.nodes.length).to.be(2);
        expect(isitasset.nodes[0].token).to.be("main.html");
        expect(isitasset.nodes[1].token).to.be("assets");
        expect(isitasset.nodes[1].nodes[0].token).to.be("user.svg");
    });
})