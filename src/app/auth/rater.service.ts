import { Injectable } from "@angular/core";
import { Rater, RaterInfo } from "./rater.model";
import { HttpClient, HttpHeaders,  } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { map, flatMap } from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable ({
    providedIn: 'root'
    
})
export class RaterSrvice {
    BaseUrl = "http://rquestelb-1648503862.us-east-1.elb.amazonaws.com:6210/api/PointViewSurvey/";

   
    constructor(
        private route: ActivatedRoute,
        private _http: HttpClient
    ){
         
    }
    getRater(rtr: string): Observable<RaterInfo>{
        return this._http.get<RaterInfo>(this.BaseUrl + 'GetPointViewRaterinfo/' + rtr);
    }

}