import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent {

  htmlContent: string;

  @ViewChild('dataContainer') dataContainer: ElementRef;
  @ViewChild('previewTemplate') modal: ModalDirective;
  constructor(private sanitizer: DomSanitizer,) { }

  modalShow(){
    this.dataContainer.nativeElement.innerHTML = this.htmlContent;
    this.modal.show();
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
