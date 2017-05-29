var fs = require('fs');
function getPaths(name){
    fs.readdirSync('./src/').forEach( function(name) {
            console.log(name);
            if ( !!~name.indexOf('.js') ){
                fs.writeFileSync('./module.js', 'import * from ".\\src\\' + name);
                return true;
            }
            getPaths(name);
        }
    )
}
(function(){
    getPaths('/');
})();