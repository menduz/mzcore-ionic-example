/// <reference path="scripts/mz/mz.d.ts" />

import ionic = require('scripts/mzcore-ionic/components');
import uikit = require('scripts/mzcore-uikit/index');
import menuButton = require('components/MenuButton');

menuButton.activatePlugin();
uikit.activatePlugin();
ionic.activatePlugin();

mz.alias('views', 'views');



@App.Template('@views/index.xml')
class App extends mz.app.PageCoordinator {
    menu: uikit.MzSidebar;

    constructor() {
        super({
            pages: /* 'pages.json' */[
                {
                    "name": "index",
                    "module": "modules/index",
                    "routes": {
                        "": "index"
                    }
                }, {
                    "name": "login",
                    "module": "modules/login",
                    "routes": {
                        "account/logout": "logout",
                        "account": "login"
                    }
                }, {
                    "name": "about",
                    "module": "modules/about",
                    "routes": {
                        "about": "about"
                    }
                }
            ]
        });
    }

    closeMenu() {
        this.menu.opened = false;
    }
}

export var app = new App;