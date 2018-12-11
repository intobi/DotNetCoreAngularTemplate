import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { TbComponet } from '../tbc-base';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-video-tbc',
  templateUrl: './video-tbc.component.html',
  styleUrls: ['../../template-builder.component.less']
})
export class VideoTbcComponent implements OnInit, TbComponet {

  getHtmlPreview() {

    return '<p style="text-align: center;"><embed src="https://www.facebook.com/plugins/video.php?href=' + this.source + '&width=500&show_text=false&appId=707239062959572&height=350" width="auto" height="200" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></embed></p><p style="text-align: center;">' + this.description + '</p>';
  }

  type: string = "video";

  source: string;
  description: string;
  isEditMode: boolean = false;

  @Input() index: number;
  @Input() metadata: any;
  @Output() setted = new EventEmitter<any>();
  @Output() removed = new EventEmitter();
  @ViewChild('dataContainer') dataContainer: ElementRef;
  @ViewChild('videoForm') public form: NgForm;


  constructor(private sanitizer: DomSanitizer, ) { }

  ngOnInit() {
    if (this.metadata) {
      this.source = this.metadata.source;
      this.description = this.metadata.description;
    } else { //init with dummy text
      this.source = "";
      this.description = "";
      this.isEditMode = true;

    }
    console.log(this.metadata)
    this.dataContainer.nativeElement.innerHTML = this.getHtmlPreview();
  }

  getHtmlResult() {
    return '<p style="text-align: center;  margin-bottom: 20px;"><iframe src="https://www.facebook.com/plugins/video.php?href=' + this.source + '&width=500&show_text=false&appId=707239062959572&height=280" width="500" height="280" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe></p><p style="text-align: center;">' + this.description + '</p>';
  }
  getMetadata() {
    return {
      index: this.index,
      source: this.source,
      type: this.type,
      description: this.description,
      html: this.getHtmlResult(),
    }
  }

  edit() {
    this.isEditMode = true;
  }

  // save(f: NgForm) {
  //   if (f.invalid)
  //     return;
  //   this.dataContainer.nativeElement.innerHTML = this.getHtmlPreview();
  //   this.isEditMode = false;
  //   this.setted.emit(this.getMetadata())
  // }


  //find way to validate form
  save(): boolean {
    if (this.form.invalid)
      return false;
    this.dataContainer.nativeElement.innerHTML = this.getHtmlPreview();
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
