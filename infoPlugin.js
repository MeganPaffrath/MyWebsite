// myPlugin.js
function infoPlugin() {
  return function(files, metalsmith, done){
    setImmediate(done); // For asynchronous operation, schedules done callback
    console.log(JSON.stringify(files, replacer4Buffer, 2));
    // console.log("hello");
    Object.keys(files).forEach(function(file){
      let data = files[file];
      console.log(data.contents.toString());
    });
  };
}

// Helps JSON.stringify deal with Node.js *Buffer*
function replacer4Buffer(key, value) {
   if (key === 'contents') {
       return this[key].toString();
   } else {
       return value;
   }
}

module.exports = infoPlugin; // How we "export" from a module in Node.js
