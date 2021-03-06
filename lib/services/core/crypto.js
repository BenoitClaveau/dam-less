/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
 
"use strict";

const crypto = require("crypto");

class CryptoService {
    constructor() {
    };

    encrypt(text, encryptionKey, iv) {
        let cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
        return Buffer.concat([
            cipher.update(text),
            cipher.final()
        ]);
    };

    decrypt(encryptedBuffer, encryptionKey, iv) {
        let decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
        return Buffer.concat([
            decipher.update(encryptedBuffer),
            decipher.final()
        ]);
    };

    encryptBase64(text, encryptionKey, iv) {
        return this.encrypt(text, encryptionKey, iv).toString("base64");
    }

    decryptBase64(encryptedText, encryptionKey, iv) {
        return this.decrypt(new Buffer(encryptedText, "base64"), encryptionKey, iv).toString();
    }

    randomBytes(length = 16) {
        return crypto.randomBytes(length);
    };

    pbkdf2(text, salt, iterations = 1000, bytes = 32, digest = "sha1") {
        return crypto.pbkdf2Sync(text, salt, iterations, bytes, digest);
    }

    hash(text, algorithm = "md5") {
        return crypto.createHash(algorithm).update(text, "utf-8").digest("hex");
    }

    get iv() {
        return crypto.randomBytes(16);
    }
};

exports = module.exports = CryptoService;
