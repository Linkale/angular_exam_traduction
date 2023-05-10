import { Component, EventEmitter, Output } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolBarComponent {
  languages: Array<string> = ['en', 'fr'];

  @Output("useLanguage") useLanguage: EventEmitter<any> = new EventEmitter();
  constructor() {
    
  }

  handleUseLanguage(lang: string) {
    this.useLanguage.emit(lang)
  }
  
}
