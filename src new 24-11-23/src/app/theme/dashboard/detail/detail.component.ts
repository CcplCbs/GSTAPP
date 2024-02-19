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
  SBCA: boolean = false
  TD: boolean = false
  PG: boolean = false
  custid
  schemetype
  acNo
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _detailService: DetailService) {
    this.route.params.subscribe(params => {
      this.custid = params['id'];
      this.schemetype = params['type'];
      this.acNo = params['ac_no'];
    })
  }
  detailarray = [];

  ngOnInit(): void {
    this.isloader = true

    if (this.schemetype == 'SB' || this.schemetype == 'CA') {
      this.LNCC = false
      this.SBCA = true
      this.TD = false
      this.PG = false
    } else if (this.schemetype == 'LN' || this.schemetype == 'CC') {
      this.LNCC = true
      this.SBCA = false
      this.TD = false
      this.PG = false
    } else if (this.schemetype == 'TD') {
      this.LNCC = false
      this.SBCA = false
      this.TD = true
      this.PG = false
    } else if (this.schemetype == 'PG') {
      this.LNCC = false
      this.SBCA = false
      this.TD = false
      this.PG = true
    }
    let obj = {
      "ac_custid": this.custid,
      "AC_ACNOTYPE": this.schemetype,
      "BANKACNO": this.acNo
    }
    this._detailService.getAccountDetail(obj).subscribe(response => {
      this.detailarray = response
      this.isloader = false;
      this.showData = true
      console.log(response)
    });
  }


  isShow: boolean = false;
  ishide: boolean = true;

  viewMore() {
    this.isShow = true;
    this.ishide = false;
  }

  viewStatement() {
    this.router.navigateByUrl('/dashboard/viewstatement' + "/" + this.custid + "/" + this.schemetype + "/" + this.acNo);

  }

}
