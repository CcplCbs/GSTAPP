import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  showData: boolean = false
  isloader: boolean = true
  LNCC: boolean = false
  SBCAGS: boolean = false
  TD: boolean = false
  PG: boolean = false
  SH: boolean = false
  custid
  schemetype
  acNo
  actype
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _detailService: DetailService) {
    this.route.params.subscribe(params => {
      this.custid = params['id'];
      this.schemetype = params['type'];
      this.acNo = params['ac_no'];
      this.actype = params['ac_type'];
    })
  }
  detailarray = [];

  ngOnInit(): void {

    this.isloader = true

    if (this.schemetype == 'SB' || this.schemetype == 'CA' || this.schemetype == 'GS') {
      this.LNCC = false
      this.SBCAGS = true
      this.TD = false
      this.PG = false
      this.SH = false
    } else if (this.schemetype == 'LN' || this.schemetype == 'CC') {
      this.LNCC = true
      this.SBCAGS = false
      this.TD = false
      this.PG = false
      this.SH = false
    } else if (this.schemetype == 'TD') {
      this.LNCC = false
      this.SBCAGS = false
      this.TD = true
      this.PG = false
      this.SH = false
    } else if (this.schemetype == 'PG') {
      this.LNCC = false
      this.SBCAGS = false
      this.TD = false
      this.PG = true
      this.SH = false
    }
    else if (this.schemetype == 'SH') {
      this.LNCC = false
      this.SBCAGS = false
      this.TD = false
      this.PG = false
      this.SH = true
    }
    let obj = {
      "ac_custid": this.custid,
      "AC_ACNOTYPE": this.schemetype,
      "BANKACNO": this.acNo,
      "AC_TYPE": this.actype
    }
    this._detailService.getAccountDetail(obj).subscribe(response => {
      this.detailarray = response
      this.isloader = false;
      this.showData = true
      // console.log(response)
    });
  }


  isShow: boolean = false;
  ishide: boolean = true;

  viewMore() {
    this.isShow = true;
    this.ishide = false;
  }

  viewStatement() {
    this.router.navigateByUrl('/dashboard/viewstatement' + "/" + this.custid + "/" + this.schemetype + "/" + this.acNo + "/" + this.actype);

  }

}
