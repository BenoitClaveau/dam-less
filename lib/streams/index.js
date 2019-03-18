module.exports.transform = require("./streamify").transform;
module.exports.streamify = require("./streamify").streamify;
module.exports.noop = require("./streamify").noop;
module.exports.getFirst = require("./promise-readable").getFirst;
module.exports.getAll = require("./promise-readable").getAll;
module.exports.getBuffer = require("./promise-readable").getBuffer;
module.exports.ending = require("./promise-readable").ending;
module.exports.ArrayToStream = require("./array-to-stream");
module.exports.StreamToArray = require("./stream-to-array");
module.exports.StreamWorkflow = require("stream-workflow");