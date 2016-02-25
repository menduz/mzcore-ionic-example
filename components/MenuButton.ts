import uikit = require('scripts/mzcore-uikit/index');

export function activatePlugin() { }

@mz.Widget.RegisterComponent('menu-button')
@mz.Widget.Template('<button class="button button-icon icon ion-navicon" onclick="{this.toggle}"/>')
export class MenuButton extends uikit.MzSidebarToggler { }