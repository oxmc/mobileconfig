'use strict';

const mobileconfig = require('../index');
const fs = require('fs');

mobileconfig.getWebclipConfig(
    {
        organization: 'Nascar',
        displayName: 'Nascar 2023 Schedule',
        label: "Nascar-2023-Schedule",
        url: "https://www.nascar.com/wp-content/uploads/sites/7/2023/01/05/2023-NationalSeriesSchedule-update.pdf"
    },
    (err, data) => {
        if (err) {
            process.stderr.write(err.stack);
            return process.exit(1);
        }
        process.stdout.write(data);
    }
);
