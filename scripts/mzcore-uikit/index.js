define(["require", "exports", './mz-sidebar'], function (require, exports, mz_sidebar_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    mz.loadCss(module.getPath('./uikit.css'));
    function activatePlugin() { }
    exports.activatePlugin = activatePlugin;
    __export(mz_sidebar_1);
});
