var fs = require('fs');
const path = require('path');
/**
 * Clear module.js before adding imports
 */
fs.truncateSync('./module.js', 0);

(function getPaths(url) {
    fs.readdirSync(url).forEach(function (name) {
            if (!!~name.indexOf('.js')) {
                fs.appendFileSync('./module.js', 'import * as '+name.split('.')[0] +' from "' + url + path.sep + name + '";\n');
                return;
            }
            getPaths(url + path.sep + name);
        }
    )
})('.' + path.sep + 'src');

