import { Component, OnInit, Input, Output, EventEmitter, Injector, ViewEncapsulation, ViewChild } from '@angular/core';
import { TbComponet } from '../tbc-base';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadEvent, FileSystemFileEntry, UploadFile } from 'ngx-file-drop';
// import { FileServiceProxy } from '@shared/service-proxies/file-service-proxy';
import { ActivatedRoute } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-image-tbc',
  templateUrl: './image-tbc.component.html',
  styleUrls: ['../../template-builder.component.less'],
})
export class ImageTbcComponent extends AppComponentBase implements OnInit, TbComponet {

  @Input() index: number;
  @Input() metadata: any;
  @ViewChild('imageForm') public form: NgForm;
  
  @Output() setted = new EventEmitter<any>();
  @Output() removed = new EventEmitter();
  urlYesOrNo;
  files: UploadFile[] = [];
  type: string = "image";
  src: string;
  url: string;
  isEditMode: boolean;
  //get from url
  id: number;

  constructor(
    injector: Injector,
    private sanitizer: DomSanitizer,
    // private fileService: FileServiceProxy,
    private route: ActivatedRoute) {
    super(injector)
  }

  ngOnInit() {
    if (this.metadata) {
      this.src = this.metadata.src;
      this.url= this.metadata.url;
      this.urlYesOrNo=this.metadata.urlYesOrNo;
    } else {
      this.src = "";
      this.url= "";
      this.urlYesOrNo=false;
      this.isEditMode=true;
    }

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getHtmlPreview() {
    if (!this.urlYesOrNo)
    return '<p style="text-align: center;"><img style="max-width: 100%; max-height: 220px;" src="' + this.src + '"/></p>';
    else{
      return '<p style="text-align: center;"><a href="'+this.url+'" target="_blank"><img style="max-width: 100%; max-height: 220px;" src="' + this.src + '"/></a></p>';
    }
  }
  getHtmlResult() {
    if (!this.urlYesOrNo)
      return '<p style="text-align: center;  margin-bottom: 20px;"><img style="max-width:400px" src="' + this.src + '"/></p>';
    else
      return '<p style="text-align: center;  margin-bottom: 20px;"><a href="'+this.url+'" target="_blank"><img style="max-width:400px" src="' + this.src + '"/></a></p>';
  }

  getMetadata() {
    return {
      index: this.index,
      src: this.src,
      url: this.url,
      urlYesOrNo: this.urlYesOrNo,
      type: this.type,
      html: this.getHtmlResult(),

    }
  }

  edit() {
    this.isEditMode = true;
  }

  dropped(event: UploadEvent) {
    this.files = event.files;
    for (let droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        let fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          let extension = file.name.split('.').pop()
          if (!(extension == "png" || extension == "jpg" || extension == "jpeg")) {
            this.notify.error('Incorrect file format!', 'Error');
            return;
          }
          let formData = new FormData();
          formData.append('file', file, file.name);
          // this.fileService.uploadFile(formData, this.id)
            // .subscribe(
            //   result => {
            //     this.src = result.url;
            //   }
            // );

        });
      }
      break;
    }
  }

  uploadImg(e: any) {
    let fileList: FileList = e.target.files;
    let extension = fileList[0].name.split('.').pop()
    if (!(extension == "png" || extension == "jpg" || extension == "jpeg")) {
      this.notify.error('Incorrect file format!', 'Error');
      return;
    }
    let formdata = new FormData();
    formdata.append('file', fileList[0], fileList[0].name);
    // this.fileService.uploadImage(formdata, this.id)
    //   .subscribe(
    //     (result: any) => {
    //       this.src = result.url;
    //     }
    //   );
  }

  // save(f: NgForm) {
  //   if (f.invalid || (!this.urlYesOrNo  && !this.src))
  //     return;
  //   this.isEditMode = false;
  //   this.setted.emit(this.getMetadata())
  // }
  
  //find way to validate form
  save(): boolean {
    if (this.form.invalid || (!this.urlYesOrNo  && !this.src))
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
