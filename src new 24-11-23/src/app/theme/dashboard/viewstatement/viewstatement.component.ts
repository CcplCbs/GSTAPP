import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from '../detail/detail.service';
import * as moment from 'moment';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';
import { data } from 'jquery';

@Component({
  selector: 'app-viewstatement',
  templateUrl: './viewstatement.component.html',
  styleUrls: ['./viewstatement.component.scss']
})
export class ViewstatementComponent implements OnInit {

  // @ViewChild('myIframe') myIframe: ElementRef;
  @ViewChild('pdfIframe') pdfIframe: ElementRef;
  showRepo: boolean = true;
  pdfUrl = environment.base_url;

  isButtonEnabled: boolean = true;
  iframe1url1: any = '';
  custid
  schemetype
  acNo
  fromDate
  toDate
  getfromDate
  gettoDate
  angForm: FormGroup;
  // report_url = environment.report_url;
  report_url1 = environment.report_url1;

  data: any[] = [];
  pageSize = 5;
  currentPage = 1;
dataNotLoaded: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _detailService: DetailService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private http: HttpClient,

  ) {
    this.route.params.subscribe(params => {
      this.custid = params['id'];
      this.schemetype = params['type'];
      this.acNo = params['ac_no'];
    })
  }

  isloader: boolean = true;
  showData: boolean = false;
  detailarray = []
  ngOnInit(): void {
    this.isloader = true;
    this.createForm();
    let obj = {
      "ac_custid": this.custid,
      "AC_ACNOTYPE": this.schemetype,
      "BANKACNO": this.acNo
    }
    this._detailService.getAccountDetail(obj).subscribe(response => {
      console.log('response', response)
      this.detailarray = response
      this.isloader = false
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.loadPage();
  }

  loadPage() {
    const startIndex = this.data.length; 
    const endIndex = startIndex+1;

    if (endIndex <= this.statementArray.length) {
      const endIndex1 = startIndex + 5;
      const nextData = this.statementArray.slice(startIndex, endIndex1);
      this.data = this.data.concat(nextData);
    } 
    // else {
      
    //   console.log('No data');
    // }

  }
 


  createForm() {
    this.angForm = this.fb.group({
      FROM: [""],
      TO: [""],
      dateradio: [],
    })
  }


  isShowDate: boolean = false
  showDate() {
    this.isShowDate = true;
    this.angForm.patchValue({ dateradio: null })
  }

  selectDate() {
    this.isButtonEnabled = false
  }


  changeDate(val) {

    this.isButtonEnabled = true
    this.isShowDate = false
    if (val == 1) {
      this.toDate = moment().format('DD/MM/YYYY')
      this.fromDate = moment().subtract(1, "month").format('DD/MM/YYYY')
    } else if (val == 2) {
      this.toDate = moment().format('DD/MM/YYYY')
      this.fromDate = moment().subtract(2, "month").format('DD/MM/YYYY')
    } else if (val == 3) {
      this.toDate = moment().format('DD/MM/YYYY')
      this.fromDate = moment().subtract(3, "month").format('DD/MM/YYYY')
    }


    let obj = {
      "tranacnotype": this.schemetype,
      "BANKACNO": this.acNo,
      "fromDate": this.fromDate,
      "toDate": this.toDate
    }
    this._detailService.getstatement(obj).subscribe(response => {
      this.statementArray = response
      console.log(response)
      if (this.statementArray.length > 0) {
        this.isButtonEnabled = false
      }
      else {
        this.isButtonEnabled = true
      }
      this.loadPage();
    });
    this.data = [];
  }




  statementArray = []
  viewstatement() {

    const formVal = this.angForm.value;
    if (formVal.FROM > formVal.TO) {
      Swal.fire('Warning', 'From date always smaller than To date', 'info')
      this.angForm.controls['FROM'].reset();
    } else if (formVal.TO < formVal.FROM) {
      Swal.fire('Warning', 'To date always greater than From date', 'info')
      this.angForm.controls['TO'].reset();
    } else {

      this.fromDate = moment(formVal.FROM, 'YYYY-MM-DD').format('DD/MM/YYYY')
      this.toDate = moment(formVal.TO, 'YYYY-MM-DD').format('DD/MM/YYYY')

      let obj = {
        "tranacnotype": this.schemetype,
        "BANKACNO": this.acNo,
        "fromDate": this.fromDate,
        "toDate": this.toDate
      }
      this._detailService.getstatement(obj).subscribe(response => {
        this.statementArray = response
        console.log(response)
        this.currentPage = 1;
        this.loadPage();
      });
      this.data = [];
    }
  }

  isAble: boolean = true
  download() {
    this.iframe1url1 = this.report_url1 + "examples/MyStatement.php?fromdate='" + this.fromDate + "'&todate='" + this.toDate + "'&BankAcNo=" + this.acNo + "&tranacnotype='" + this.schemetype + "'";
    console.log(this.iframe1url1)
    this.iframe1url1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url1);
  }

}
