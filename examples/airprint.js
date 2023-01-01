'use strict';

// Usage:
// node airprint.js > airprint.mobileconfig

const mobileconfig = require('../index');
const fs = require('fs');

mobileconfig.getSignedAirPrintConfig(
    {
        organization: 'Some Company',
        displayName: 'My AirPrint Network',
        printer: {
            ip: '100.0.8.1',
            path: '/net/print/printer33'
        },
        keys: {
            key: fs.readFileSync(__dirname + '/../test/fixtures/key.pem'),
            cert: fs.readFileSync(__dirname + '/../test/fixtures/cert.pem'),
            ca: []
        }
    },
    (err, data) => {
        if (err) {
            process.stderr.write(err.stack);
            return process.exit(1);
        }
        process.stdout.write(data);
    }
);
