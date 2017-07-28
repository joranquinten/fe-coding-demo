module.exports = function(
    gulp, settings, plugins, confGlobal, confFileMap, karmaServer, pathFiles, notify
) {
    return function(done) {

        notify('Running unit tests... (singleRun: ' + !settings.tdd + ')', '');

        return new karmaServer({
            configFile: settings.relativePath + '/karma.conf.js',
            singleRun: !settings.tdd // When test driven development, disable single run
        }, function(code) {
            if (code == 1) {
                notify('Unit Test fails, exiting process', 'error');
                var error = error ? new Error('Karma returned with the error code: ' + error) : undefined;
                if (!settings.isDevelop) process.exit(code);
                done(error);
            } else {
                notify('Unit Tests passed', 'success');
                done();
            }
        }).start();

    };
};