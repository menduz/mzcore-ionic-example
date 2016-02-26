var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'scripts/mzcore-ionic/components', 'scripts/mzcore-uikit/index', 'components/MenuButton'], function (require, exports, ionic, uikit, menuButton) {
    menuButton.activatePlugin();
    uikit.activatePlugin();
    ionic.activatePlugin();
    mz.alias('views', 'views');
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this, {
                pages: [
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
        App.prototype.closeMenu = function () {
            this.menu.opened = false;
        };
        App = __decorate([
            App.Template('@views/index.xml'), 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    })(mz.app.PageCoordinator);
    exports.app = new App;
});
