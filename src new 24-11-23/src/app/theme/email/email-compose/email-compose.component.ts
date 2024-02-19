import { Component, OnInit } from '@angular/core';
import '../../../../../node_modules/tinymce/tinymce.min.js';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {
  public basicContent: string;

  constructor() { }

  ngOnInit() {
    this.basicContent = '<p>Hello...</p>';
  }

}
