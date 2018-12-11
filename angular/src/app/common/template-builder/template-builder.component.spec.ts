import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { DndDropEvent } from 'ngx-drag-drop';

import { TbComponet } from './components/tbc-base';
import { TemplatePreviewComponent } from './template-preview/template-preview.component';

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.less'],
  animations: [appModuleAnimation()],
})
export class TemplateBuilderComponent implements OnInit {

  @Output() outMetadata = new EventEmitter<HtmlComponent[]>();
  @Input() template: HtmlComponent[] = [];
  @ViewChild('templatePreview') templatePreview: TemplatePreviewComponent;
  @ViewChildren('editors') editors: QueryList<TbComponet>;

  public components: HtmlComponent[] = [];
  constructor() { }

  ngOnInit() {
    let tbcText = new HtmlComponent();
    tbcText.name = "Add Text";
    tbcText.type = "text";
    tbcText.icon = "../assets/images/template-builder/text-component.svg";
    this.components.push(tbcText)

    let tbcButton = new HtmlComponent();
    tbcButton.name = "Add Button";
    tbcButton.type = "button";
    tbcButton.icon = "../assets/images/template-builder/button-component.svg";
    this.components.push(tbcButton)

    let tbcImage = new HtmlComponent();
    tbcImage.name = "Add Image";
    tbcImage.type = "image";
    tbcImage.icon = "../assets/images/template-builder/image-component.svg";
    this.components.push(tbcImage)

    let tbcVideo = new HtmlComponent();
    tbcVideo.name = "Add Video";
    tbcVideo.type = "video";
    tbcVideo.icon = "../assets/images/template-builder/video-component.svg";
    this.components.push(tbcVideo)

  }

  onDraggedMove(component: HtmlComponent, all: HtmlComponent[]) {
    console.log("onDraggedMove");
    const index = all.indexOf(component);
    all.splice(index, 1);
    this.outMetadata.emit(this.template);
  }

  onDrop(event: DndDropEvent, all: HtmlComponent[]) {
    console.log("onDrop");
    let index = event.index;
    if (typeof index === "undefined") {
      index = all.length;
    }
    all.splice(index, 0, event.data);
  }

  onSetted(metadata: any) {
    this.template[metadata.index].metadata = metadata;
    this.template[metadata.index].isEditMode=false;
    this.outMetadata.emit(this.template);
  }

  onRemove(index: number) {
    this.template.splice(index, 1);
    this.outMetadata.emit(this.template);
  }

  preview() {
    let html = "";
    for (let item of this.template) {
      if (item.metadata !== undefined)
        html += item.metadata.html;
    }
    this.templatePreview.htmlContent = html;
    this.templatePreview.modalShow();
  }

  editorSave(index: number, item: HtmlComponent)
  {
    let editor = this.editors.find(x => x.index == index);
     editor.save()
  }

  editorEdit(index: number, item: HtmlComponent){
    let editor = this.editors.find(x => x.index == index);
    item.isEditMode = true;
    editor.edit();
  }

  editorRemove(index: number){ 
    let editor = this.editors.find(x => x.index == index);
    editor.remove();
  }
}

export class HtmlComponent {
  public type: string;
  public name: string;
  public metadata: any;
  public html: string;
  public icon: string;
  public isEditMode: boolean = true;
}
