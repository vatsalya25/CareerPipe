/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomescreenController } from './homescreen/homescreen.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { DropdownDirective } from '../app/components/dropdown/dropdown.directive';
// import { DlineDirective } from '../app/components/dline/dline.directive';
var dLine = require('../app/components/dline/dline.directive').DlineDirective;

angular.module('careerPipe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngRoute', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('HomescreenController', HomescreenController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('dropDown', DropdownDirective)
  .directive('dLine', dLine);
