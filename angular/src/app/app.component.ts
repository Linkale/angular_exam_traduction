import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  defaultBrowser: string|undefined;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.defaultBrowser = this.translate.getBrowserLang();
    this.translate.use(this.defaultBrowser != undefined ? this.defaultBrowser : 'en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
