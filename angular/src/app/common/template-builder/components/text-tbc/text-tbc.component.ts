import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TbComponet } from '../tbc-base';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-text-tbc',
  templateUrl: './text-tbc.component.html',
  styleUrls: ['../../template-builder.component.less'],
})
export class TextTbcComponent implements OnInit, TbComponet {

  type: string = "text";
  text: string;
  isEditMode: boolean;

  @Input() index: number;
  @Input() metadata: any;
  @Output() setted = new EventEmitter<any>();
  @Output() removed = new EventEmitter();

  constructor(private sanitizer: DomSanitizer, ) { }

  ngOnInit() {
    if (this.metadata) {
      this.text = this.metadata.text;
    } else { //init with dummy text
      this.text = "";
      this.isEditMode=true;
    }
  }

  getHtmlPreview() {
    let previewText = '<p style="text-align:center;">' + this.text +'</p>';
    if (previewText.length>300){
      previewText=previewText.substring(0, 297)+"..."
    }
    return previewText;
  }
  getHtmlResult() {
    return '<p style="text-align:center; margin-bottom: 20px;">' + this.text +'</p>';
  }
  getMetadata() {
    return {
      index: this.index,
      text: this.text,
      type: this.type,
      html: this.getHtmlResult(),
    }
  }

  public edit() {
    this.isEditMode = true;
  }

  public save(): boolean {
    this.isEditMode = false;
    this.setted.emit(this.getMetadata())
    return true;
  }

  public remove() {
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
