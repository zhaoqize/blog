var os = require('os');

console.log('[arch] 操作系统CPU架构'+os.arch());
console.log('[cpus] 每个CPU/内核的信息:'+JSON.stringify(os.cpus()));
console.log('[endianness] CPU 的字节序:'+os.endianness());
console.log('[freemem] 操作系统空闲内存量:'+os.freemem());
console.log('[homedir] 当前用户使用的文件夹:'+os.homedir());
console.log('[hostname] 操作系统的主机名:'+os.hostname());
console.log('[loadavg] 平均负载:'+os.loadavg());
console.log('[networkInterfaces] 网络接口:'+JSON.stringify(os.networkInterfaces()));
console.log('[platform] 操作系统名:'+os.platform());
console.log('[release] 操作系统的发行版本:'+os.release());
console.log('[tmpdir] 操作系统的默认临时文件夹:'+os.tmpdir());
console.log('[totalmem] 系统内存总量:'+os.totalmem());
console.log('[type] 操作系统名:'+os.type());
console.log('[uptime] 操作系统运行的时间:'+os.uptime());