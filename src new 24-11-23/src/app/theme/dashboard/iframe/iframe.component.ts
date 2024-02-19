import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @Input() url: any;
  // @ViewChild('myIframe') myIframe: ElementRef;



  constructor(private sanitizer: DomSanitizer) {
    debugger
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // const iframe: HTMLIFrameElement = this.myIframe.nativeElement;

    // const downloadLink = document.createElement('a');
    // downloadLink.href = this.url;
    // downloadLink.download = 'statement.pdf';

    // downloadLink.click();


  }

  ngOnInit(): void {
  }

  // download(){}
  isLoaded() {
    var pdfFrame = window.frames["pdf"];
    pdfFrame.focus();
    pdfFrame.print();
  }

}
