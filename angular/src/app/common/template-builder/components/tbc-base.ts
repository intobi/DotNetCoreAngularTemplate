import { Input } from "@angular/core";

export interface TbComponet {
    
    getHtmlResult(): any;
    getMetadata(): any;
    getHtmlPreview(): any;
    type: string;
    index: number;

    save();
    edit();
    remove();
}