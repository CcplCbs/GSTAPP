import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DefaultService } from './default.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent implements OnInit, AfterViewInit {
  options: any = {
    position: ['bottom', 'right'],
  };

  public thisMonthData: any;
  public thisMonthOption: any;
  url = environment.base_url

  constructor(private router: Router, private _DefaultService: DefaultService, private http: HttpClient

  ) { // private servicePNotify: NotificationsService
  }

  myData: any
  date: any

  ngOnInit() {
    this.http.get(this.url + '/gst-app/getdate').subscribe((data: any) => {
      // console.log(data)
      this.myData = data
      this.date = this.myData[0].CURRENT_DATE
    })
  }

  ngAfterViewInit() {
    /* setTimeout(() => {
      this.options  = {
        position : ['bottom', 'right'],
        maxStack: 8,
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        lastOnBottom: true,
        clickToClose: true,
        preventDuplicates: false,
        preventLastDuplicates: false,
        theClass: 'bg-c-red no-icon',
        rtl: false,
        animate: 'rotate'
      };
      this.servicePNotify.html(
        '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="icon-settings"></i> for apply live styles very first time in Angular 5.</p>',
        'success'
      );
    }, 75); */
  }

  isactive: boolean = false
  sbcount
  cacount
  tdcount
  lncount
  cccount
  pgcount
  shcount
  gscount

  sbamount = 0;
  caamount = 0;
  tdamount = 0;
  lnamount = 0;
  ccamount = 0;
  pgamount = 0;
  shamount = 0;
  gsamount = 0;
  date1: any
  type
  actype
  check() {
    // debugger
    this.isactive = !this.isactive
    this.date1 = this.date
    let data: any = localStorage.getItem("userData");
    let result = JSON.parse(data);
    if (this.isactive == true) {
      this._DefaultService.getAmountandcount(result.AC_NO).subscribe(response => {
        // console.log('response', response)
        this.actype = response

        let sb = 0;
        let ca = 0;
        let ln = 0;
        let cc = 0;
        let pg = 0;
        let gs = 0;
        let td = 0;
        let sh = 0;
        for (let i = 0; i < response.length; i++) {
          if (response[i].total_ledger_balance != 0) {
            if (response[i].ac_acnotype == "SB") {
              sb++;
              this.sbamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "CA") {
              ca++;
              this.caamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "TD") {
              td++;
              this.tdamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "LN") {
              ln++;
              this.lnamount += response[i].total_ledger_balance
              // console.log(this.lnamount, 'from ln')
            }
            if (response[i].ac_acnotype == "CC") {
              cc++;
              this.ccamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "SH") {
              sh++;
              this.shamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "PG") {
              pg++;
              this.pgamount += response[i].total_ledger_balance
            }
            if (response[i].ac_acnotype == "GS") {
              gs++;
              this.gsamount += response[i].total_ledger_balance;
            }
          }
        }

        // console.log(sb, 'sbcount')

        if (response.length != 0) {
          let obj = response.find(o => o.ac_acnotype === 'SB');
          let obj1 = response.find(o => o.ac_acnotype === 'CA');
          let obj2 = response.find(o => o.ac_acnotype === 'TD');
          let obj3 = response.find(o => o.ac_acnotype === 'LN');
          let obj4 = response.find(o => o.ac_acnotype === 'CC');
          let obj5 = response.find(o => o.ac_acnotype === 'PG');
          let obj6 = response.find(o => o.ac_acnotype === 'SH');
          let obj7 = response.find(o => o.ac_acnotype === 'GS');

          if (obj != undefined) {
            this.sbcount = sb
            // this.sbamount = obj.total_ledger_balance
            this.type = obj.ac_type

          } else {
            this.sbcount = 0
            this.sbamount = 0.00
          }

          if (obj1 != undefined) {
            this.cacount = ca
            // this.caamount = obj1.total_ledger_balance
            this.type = obj1.ac_type

          } else {
            this.cacount = 0
            this.caamount = 0.00
          }

          if (obj2 != undefined) {
            this.tdcount = td
            // this.tdamount = obj2.total_ledger_balance
            this.type = obj2.ac_type

          } else {
            this.tdcount = 0
            // this.tdamount = '0.00'
          }

          if (obj3 != undefined) {
            this.lncount = ln
            // this.lnamount = obj3.total_ledger_balance
            this.type = obj3.ac_type

          } else {
            this.lncount = 0
            // this.lnamount = '0.00'
          }

          if (obj4 != undefined) {
            this.cccount = cc
            // this.ccamount = obj4.total_ledger_balance
            this.type = obj4.ac_type
          } else {
            this.cccount = 0
            // this.ccamount = '0.00'
          }

          if (obj5 != undefined) {
            this.pgcount = pg
            // this.pgamount = obj5.total_ledger_balance
            this.type = obj5.ac_type
          } else {
            this.pgcount = 0
            // this.pgamount = '0.00'
          }
          if (obj6 != undefined) {
            this.shcount = sh
            // this.shamount = obj6.total_ledger_balance
            this.type = obj6.ac_type
          } else {
            this.shcount = 0
            // this.shamount = '0.00'
          }
          if (obj7 != undefined) {
            this.gscount = gs
            // this.gsamount = obj7.total_ledger_balance
            this.type = obj7.ac_type
          } else {
            this.gscount = 0
            // this.gsamount = '0.00'
          }
        } else {
          this.sbcount = '0'
          this.cacount = '0'
          this.tdcount = '0'
          this.lncount = '0'
          this.cccount = '0'
          this.pgcount = '0'
          this.shcount = '0'
          this.gscount = '0'
          this.sbamount = 0.00
          this.caamount = 0.00
          this.tdamount = 0.00
          this.lnamount = 0.00
          this.ccamount = 0.00
          this.pgamount = 0.00
          this.shamount = 0.00
          this.gsamount = 0.00
        }
      });
    } else {
      this.sbcount = null
      this.cacount = null
      this.tdcount = null
      this.lncount = null
      this.cccount = null
      this.pgcount = null
      this.shcount = null
      this.gscount = null
      this.sbamount = null
      this.caamount = null
      this.tdamount = null
      this.lnamount = null
      this.ccamount = null
      this.pgamount = null
      this.shamount = null
      this.gsamount = null
      this.date1 = null
    }

  }
  a
  routePage(val) {
    // debugger
    if (this.isactive == true) {
      let data: any = localStorage.getItem("userData");
      let result = JSON.parse(data);
      let count = false

      switch (val) {
        case 'SB':
          if (this.sbamount > 0) {
            count = true
          }
          break;
        case 'CA':
          if (this.caamount > 0) {
            count = true
          }
          break;
        case 'TD':
          if (this.tdamount > 0) {
            count = true
          }
          break;
        case 'LN':
          if (this.lnamount > 0) {
            count = true
          }
          break;
        case 'CC':
          if (this.ccamount > 0) {
            count = true
          }
          break;
        case 'PG':
          if (this.pgamount > 0) {
            count = true
          }
          break;
        case 'SH':
          if (this.shamount > 0) {
            count = true
          }
          break;
        case 'GS':
          if (this.shamount > 0) {
            count = true
          }
          break;
      }
      if (count == true) {
        for (let i = 0; i < this.actype.length; i++) {
          if (this.actype[i].ac_acnotype == val) {
            this.a = this.actype[i].ac_type;
            break;
          }
        }
        this.router.navigateByUrl('/dashboard/list' + "/" + result.AC_NO + "/" + val + "/" + this.a);

      }
      else {
        Swal.fire({
          title: "0 Balance Account!",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }

    }

  }



}

function avgValChart(a, b, f) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: '#fff',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}
function buildChartOption() {
  return {
    title: {
      display: !1
    },
    tooltips: {
      position: 'nearest',
      mode: 'index',
      intersect: false,
      yPadding: 10,
      xPadding: 10,
    },
    legend: {
      display: !1,
      labels: {
        usePointStyle: !1
      }
    },
    responsive: !0,
    maintainAspectRatio: !0,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: !0
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
}

import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Directive({
  selector: '[appToDoListRead]',
})
export class AppToDoListReadDirective {
  constructor(public el: ElementRef) { }

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement).classList.toggle('done-task');
  }
}

@Directive({
  selector: '[appToDoListRemove]',
})
export class AppToDoListRemoveDirective {
  constructor(public el: ElementRef) { }

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
  }

}
