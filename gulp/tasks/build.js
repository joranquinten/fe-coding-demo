module.exports = function(
    gulp, settings, confFileMap, confGlobal, runSequence, notify
) {
    return function() {
        settings.isDevelop = false;

        // Build
        settings.sourceFolder = confFileMap.env.prod.base;
        settings.targetFolder = confFileMap.env.prod.dest;


        notify('Running build script...', 'title');

        if (settings.serve) {
            notify('Serving enabled.', '');
            runSequence('test', 'html:assets', 'html', 'rev', 'serve'); // 'rev' before serve
        } else {
            notify('Serving disabled. Enable with argument: --serve', '');
            runSequence('test', 'html:assets', 'html', 'rev'); // 'rev' before serve
        }

    };
};