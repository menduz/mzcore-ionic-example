/// <reference path="../scripts/mz/mz.d.ts" />

@IndexPage.Template('@views/modules/index.xml')
class IndexPage extends mz.app.Page {
    componentInitialized() {
        $('body').css("background", "#fff");
    }
}

export = IndexPage; 