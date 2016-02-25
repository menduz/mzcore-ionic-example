/// <reference path="../scripts/mz/mz.d.ts" />

@AboutPage.Template('@views/modules/about.xml')
class AboutPage extends mz.app.Page {
    back(){
        history.back();
    }
}

export = AboutPage; 