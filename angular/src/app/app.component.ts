import { Component } from '@angular/core';
import { FormControl, Validators , FormGroup } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  defaultBrowser: string|undefined;
  name: FormControl;
  age: FormControl;
  form: FormGroup = new FormGroup({});

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.defaultBrowser = this.translate.getBrowserLang();
    this.translate.use(this.defaultBrowser != undefined ? this.defaultBrowser : 'en');

    this.name = new FormControl("",Validators.required);
    this.age = new FormControl("",Validators.required); 
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
