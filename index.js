module.exports = function(fis, opts) {
    fis.on('compile:start', function(file) {
        if (!file.isJsLike || file.isPartial) {
            return;
        }
        var content = file.getContent() || '';
        if (content.match(/\/\*([\s\S]+?)\*\//) && RegExp.$1.match(/@noWrap/)) {
            file.wrap = false;
        }
    });
};
