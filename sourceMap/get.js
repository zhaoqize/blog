const sourceMap = require('source-map')

async function start() {
    let smc = await new sourceMap.SourceMapConsumer({"version":3,"sources":["hello.js"],"names":["hello","job","people","name","ok"],"mappings":"AAAA,SAASA,IACL,IAAIC,EAAM,OACV,IAAIC,EAASD,EAAME,KACnB,OAAOD,EAEXE","sourcesContent":["function hello() {\n    var job = 'work'\n    var people = job + name;\n    return people;\n}\nok();"]});
    let originPos = smc.originalPositionFor({
        line: 1,
        column: 2
    })
    console.log(originPos)
}
start();