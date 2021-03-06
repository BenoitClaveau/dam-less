/*!
 * damless
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

const expect = require("expect.js");
const { StreamToArray } = require("../../lib/streams");
const stream = require("stream");
const { Transform, Readable } = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);

describe("stream-to-array", () => {

    it("Write stream to an array", async () => {
        const data = new Array(10).fill(0).map((e, i) => i);
        const input = new Readable({
            objectMode: true,
            read() {
                const ret = data.shift();
                if (ret === undefined) this.push(null);
                else this.push(ret);
            }
        });
        const output = new StreamToArray();
        await pipeline(
            input,
            new Transform({ 
                objectMode: true, 
                transform(chunk, encoding, callback) {
                    callback(null, chunk);
                }
            }),
            output
        );
        expect(output.array).to.eql([0,1,2,3,4,5,6,7,8,9]);
    });
})