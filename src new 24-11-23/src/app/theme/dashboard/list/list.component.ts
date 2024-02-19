import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from './list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isloader : boolean = true;
  showData : boolean = false;
  custid
  schemetype
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _ListService: ListService
  ) {
    this.route.params.subscribe(params => {
      this.custid = params['id'];
      this.schemetype = params['type'];
    })
  }
listarray = []
sname : any

  ngOnInit(): void {
    this.isloader = true;

    let obj = {
      "ac_custid": this.custid,
      "AC_ACNOTYPE": this.schemetype
    }
    this._ListService.listofaccounts(obj).subscribe(response => {
      this.sname = response[0].S_NAME
      
      this.listarray = response
      this.isloader = false
      this.showData = true
    });
  }

  back() {
    this.router.navigate(['/dashboard/default']);

  }

  routepage(data:any) {
    this.router.navigateByUrl('/dashboard/detail' + "/" + this.custid + "/" + this.schemetype + "/" + data.ac_no);

  }
}
