function hello() {
    var job = 'work'
    var people = job + name;
    return people;
}
ok();
// http://s0.meituan.net/bs/tempfs/file/zhaoqize/hello.min.js.map
// uglifyjs hello.js -o hello.min.js --source-map "includeSources=true" -m toplevel=true 