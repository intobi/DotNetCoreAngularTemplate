import { Component, OnInit, Injector } from '@angular/core';
import { HtmlComponent } from '@app/common/template-builder/template-builder.component.spec';
import { ActivatedRoute } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.css']
})
export class TaskControlComponent  extends AppComponentBase {

  template: HtmlComponent[];
  // event: RaceReportDto = new RaceReportDto();
  // id: number = parseInt(this.route.snapshot.paramMap.get('id'));
  // url = AppConsts.remoteServiceBaseUrl + "/api/Storage/UploadImage?raceId=" + this.id;
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '10rem',
    minHeight: '500px',
    translate: 'no'
  };

  constructor(
    injector: Injector,
    // private eventService: EventServiceProxy,
    private route: ActivatedRoute
  ) {
    super(injector);


    // this.eventService.getRaceReportHtmlTab(this.id)
    //   .subscribe((result: RaceReportDto) => {
    //     this.event = result;
    //     let parseMeta = <HtmlComponent[]>JSON.parse(result.raceReportMetaData);
    //     this.template = parseMeta!=null ? parseMeta: [];
    //   });
  }

  // save(): void {
  //   this.eventService.raceReportHtmlUpdate(this.event)
  //     .subscribe((result: RaceReportDto) => {
  //       this.event = result;
  //     });
  // }
  
  // getMetadata(template: HtmlComponent[]){
  //   this.event.raceReportMetaData=JSON.stringify(template);
  //   this.event.raceReport="";
  //   for(let item of template){
  //     if (item.metadata!==undefined)
  //     this.event.raceReport+=item.metadata.html;
  //   }
  //   this.save();
  // }

}
