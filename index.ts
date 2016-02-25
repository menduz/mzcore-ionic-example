/// <reference path="scripts/mz/mz.d.ts" />

import ionic = require('scripts/mzcore-ionic/components');
import uikit = require('scripts/mzcore-uikit/index');
import menuButton = require('components/MenuButton'); 

menuButton.activatePlugin();
uikit.activatePlugin();
ionic.activatePlugin();

mz.alias('views', module.getPath('./views/'));



@App.Template('@views/index.xml')
class App extends mz.app.PageCoordinator {
    menu: uikit.MzSidebar;

    constructor() {
        super({
            pages: 'pages.json'
        });
    }
    
    closeMenu(){
        this.menu.opened = false;
    }
}

export var app = new App;