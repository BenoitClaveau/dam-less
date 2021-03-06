
const { promisify } = require("util");
const stream = require("stream");
const { Writable, Transform } = require("stream");
const pipeline = promisify(stream.pipeline);

const DamLess = require('../../index');
new DamLess()
    .cwd(__dirname)
    .config({
        http: {
            port: 3001
        }
    })
    .get("/", async (context, stream, headers) => {
        stream
            .respond({
                statusCode: 200,
                contentType: "text/plain"
            });
            stream.write("Hello\n")
            stream.end("World");
    })
    .get("/json", async (context, stream, headers) => {
        stream
            .respond({
                statusCode: 200,
                contentType: "application/json"
            });
        stream.write({ name:"ben" })
        stream.end();
    })
    .post("/", async (context, stream, headers) => {
        stream.respond({ contentType: "application/json" }).mode("object")

        stream
            .on("finish", () => console.log("* finish"))
            .on("end", () => console.log("* end"))
            .on("close", () => console.log("* close"))

        await pipeline(
            stream,
            new Transform({
                objectMode: true,
                transform(chunk, encoding, callback) {
                    callback(null, chunk);
                }
            }),
            stream
        )
    })
    .post("/error", async (context, s, headers) => {
        s.respond({ contentType: "application/json" }).mode("object")
        stream.pipeline(
            s,
            new Transform({
                objectMode: true,
                transform(chunk, encoding, callback) {
                    callback(new Error("reading error"));
                }
            }),
            s,
            err => {
                // await new Promise(res => setTimeout(res, 1000))
                s.respond({ statusCode: 403 }).end();
            }
        )
    })
    .post("/error2", async (context, s, headers) => {
        await pipeline(
            s,
            new Transform({
                objectMode: true,
                transform(chunk, encoding, callback) {
                    callback(new Error("reading error"));
                }
            }),
            s
        );
    })
    .use((context, stream, headers) => {
        if ("404" in context.route) {
            stream.end("404")
        }
    })
    .start();