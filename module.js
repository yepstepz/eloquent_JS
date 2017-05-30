var fs = require('fs');
const path = require('path');
/**
 * Clear module.js before adding imports
 */
fs.truncateSync('./index.js', 0);

(function getPaths(url) {
    fs.readdirSync(url).forEach(function (name) {
            if (!!~name.indexOf('.js')) {
                fs.appendFileSync('./index.js', 'import * as '+name.split('.')[0] +' from "' + url + '\\\\' + name + '";\n');
                return;
            }
            getPaths(url + '\\\\' + name);
        }
    )
})('.\\\\src');
