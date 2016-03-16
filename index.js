module.exports = function(fis, opts) {
    fis.on('process:start', function(file) {
        if (!file.isJsLike || file.isPartial) {
            return;
        }
        var content = file.getContent() || '';
        if (content.match(/^\s*\/\*[\s\S]*@noWrap[\s\S]*\*\//)) {
            file.wrap = false;
        }
    });
};
