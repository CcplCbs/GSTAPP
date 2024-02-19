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

  constructor(private router: Router, private _DefaultService: DefaultService,

  ) { // private servicePNotify: NotificationsService
  }

  ngOnInit() {

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
  sbamount
  caamount
  tdamount
  lnamount
  ccamount
  pgamount
  check() {
    this.isactive = !this.isactive

    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    if (this.isactive == true) {
      this._DefaultService.getAmountandcount(result.id).subscribe(response => {
        if (response.length != 0) {
          let obj = response.find(o => o.ac_acnotype === 'SB');
          let obj1 = response.find(o => o.ac_acnotype === 'CA');
          let obj2 = response.find(o => o.ac_acnotype === 'TD');
          let obj3 = response.find(o => o.ac_acnotype === 'LN');
          let obj4 = response.find(o => o.ac_acnotype === 'CC');
          let obj5 = response.find(o => o.ac_acnotype === 'PG');

          if (obj != undefined) {
            this.sbcount = obj.ac_number
            this.sbamount = obj.total_ledger_balance
          } else {
            this.sbcount = 0
            this.sbamount = '0.00'
          }

          if (obj1 != undefined) {
            this.cacount = obj1.ac_number
            this.caamount = obj1.total_ledger_balance
          } else {
            this.cacount = 0
            this.caamount = '0.00'
          }

          if (obj2 != undefined) {
            this.tdcount = obj2.ac_number
            this.tdamount = obj2.total_ledger_balance
          } else {
            this.tdcount = 0
            this.tdamount = '0.00'
          }

          if (obj3 != undefined) {
            this.lncount = obj3.ac_number
            this.lnamount = obj3.total_ledger_balance
          } else {
            this.lncount = 0
            this.lnamount = '0.00'
          }

          if (obj4 != undefined) {
            this.cccount = obj4.ac_number
            this.ccamount = obj4.total_ledger_balance
          } else {
            this.cccount = 0
            this.ccamount = '0.00'
          }

          if (obj5 != undefined) {
            this.pgcount = obj5.ac_number
            this.pgamount = obj5.total_ledger_balance
          } else {
            this.pgcount = 0
            this.pgamount = '0.00'
          }
        } else {
          this.sbcount = '0'
          this.cacount = '0'
          this.tdcount = '0'
          this.lncount = '0'
          this.cccount = '0'
          this.pgcount = '0'
          this.sbamount = '0.00'
          this.caamount = '0.00'
          this.tdamount = '0.00'
          this.lnamount = '0.00'
          this.ccamount = '0.00'
          this.pgamount = '0.00'
        }
      });
    } else {
      this.sbcount = null
      this.cacount = null
      this.tdcount = null
      this.lncount = null
      this.cccount = null
      this.pgcount = null
      this.sbamount = null
      this.caamount = null
      this.tdamount = null
      this.lnamount = null
      this.ccamount = null
      this.pgamount = null
    }

  }

  routePage(val) {
    if (this.isactive == true) {
      let data: any = localStorage.getItem("user");
      let result = JSON.parse(data);
      let count = false

      switch (val) {
        case 'SB':
          if (this.sbcount > 0) {
            count = true
          }
          break;
        case 'CA':
          if (this.cacount > 0) {
            count = true
          }
          break;
        case 'TD':
          if (this.tdcount > 0) {
            count = true
          }
          break;
        case 'LN':
          if (this.lncount > 0) {
            count = true
          }
          break;
        case 'CC':
          if (this.cccount > 0) {
            count = true
          }
          break;
        case 'PG':
          if (this.pgcount > 0) {
            count = true
          }
          break;
      }
      if (count == true) {
        this.router.navigateByUrl('/dashboard/list' + "/" + result.id + "/" + val);

      }
      else {
        Swal.fire({
          title: "No Accounts!",
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
