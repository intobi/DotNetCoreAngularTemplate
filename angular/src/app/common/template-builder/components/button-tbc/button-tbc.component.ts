import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { TbComponet } from '@app/common/template-builder/components/tbc-base';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-button-tbc',
  templateUrl: './button-tbc.component.html',
  styleUrls: ['../../template-builder.component.less']
})
export class ButtonTbcComponent implements OnInit, TbComponet {

  getHtmlPreview() {
    return '<p style="text-align: center; margin-bottom: 20px;"><a class="btn btn-default rg-btn" target="_blank" href="' + this.url + '" rel="nofollow" style="box-sizing: border-box; background-color: #a6ce39; color: #ffffff; vertical-align: middle; font-size: 18px; line-height: 1.42857; transition: all 0.5s ease 0s; padding: 6px 12px; margin-bottom: 0px; white-space: nowrap; touch-action: manipulation; cursor: pointer; user-select: none; background-image: none; border: 1px solid #a6ce39;">' + this.text + '</a></p>'
   }

  url: string;
  text: string;
  isEditMode: boolean = false;
  @Input() index: number;
  @Input() metadata: any;
  @Output() setted = new EventEmitter<any>();
  @Output() removed = new EventEmitter();

  @ViewChild('buttonForm') public form: NgForm;


  getHtmlResult() {
    return '<p style="text-align: center;"><a class="btn btn-default rg-btn" target="_blank" href="' + this.url + '" rel="nofollow" style="box-sizing: border-box; background-color: #a6ce39; color: #ffffff; vertical-align: middle; font-size: 18px; line-height: 1.42857; transition: all 0.5s ease 0s; padding: 6px 12px; margin-bottom: 0px; white-space: nowrap; touch-action: manipulation; cursor: pointer; user-select: none; background-image: none; border: 1px solid #a6ce39;">' + this.text + '</a></p>'
  }
  getMetadata() {
    return {
      index: this.index,
      url: this.url,
      text: this.text,
      type: this.type,
      html: this.getHtmlResult(),
    }
  }

  type: string;
  constructor(private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    if (this.metadata) {
      this.text = this.metadata.text;
      this.url = this.metadata.url;
    } else { 
      this.text = "";
      this.url = "";
      this.isEditMode=true;
    }
  }
  
  edit() {
    this.isEditMode = true;
  }

  // save(f: NgForm) {
  //   if (f.invalid)
  //     return;
  //   this.isEditMode = false;
  //   this.setted.emit(this.getMetadata())
  // }

  //find way to validate form
  save(): boolean {
      if (this.form.invalid)
        return false;
    this.isEditMode = false;
    this.setted.emit(this.getMetadata())
    return true;
  }
  
  remove() {
    abp.message.confirm(
      "",
      "Delete section?",
      (result: boolean) => {
        if (result) {
          this.removed.emit()
        }
      });
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
