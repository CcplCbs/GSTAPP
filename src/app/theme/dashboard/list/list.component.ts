import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from './list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isloader: boolean = true;
  showData: boolean = false;
  custid
  schemetype
  actype
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _ListService: ListService
  ) {
    this.route.params.subscribe(params => {
      this.custid = params['id'];
      this.schemetype = params['type'];
      this.actype = params['ac_type']
    })
  }
  listarray = []
  sname: any

  ngOnInit(): void {
    // debugger
    this.isloader = true;

    let obj = {
      "ac_custid": this.custid,
      "AC_ACNOTYPE": this.schemetype,
      "AC_TYPE": this.actype
    }
    this._ListService.listofaccounts(obj).subscribe(response => {
      // console.log('response', response)

      const filteredResponse = response.filter(item => item.total_ledger_balance !== 0);


      if (filteredResponse.length > 0) {
        this.sname = filteredResponse[0].SCHEMENAME;
        this.listarray = filteredResponse;
        this.isloader = false;
        this.showData = true;
      } else {
        this.sname = '';
        this.listarray = [];
        this.isloader = false;
        this.showData = false;
      }
    });
  }

  back() {
    this.router.navigate(['/dashboard/default']);

  }

  routepage(data: any) {
    // debugger
    this.router.navigateByUrl('/dashboard/detail' + "/" + this.custid + "/" + this.schemetype + "/" + data.ac_no + "/" + data.S_APPL);

  }
}
