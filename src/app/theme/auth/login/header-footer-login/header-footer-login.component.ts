import { Component, OnInit } from '@angular/core';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DetailService } from 'src/app/theme/dashboard/detail/detail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-footer-login',
  templateUrl: './header-footer-login.component.html',
  styleUrls: ['./header-footer-login.component.scss'],
  animations: [
    trigger('notificationBottom', [
      state('an-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('an-animate',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('an-off <=> an-animate', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('mobileHeaderNavRight', [
      state('nav-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('nav-on',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('nav-off <=> nav-on', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderFooterLoginComponent implements OnInit {
  public navType: string;
  public themeLayout: string;
  public verticalPlacement: string;
  public verticalLayout: string;
  public pcodedDeviceType: string;
  public verticalNavType: string;
  public verticalEffect: string;
  public vnavigationView: string;
  public freamType: string;
  public sidebarImg: string;
  public sidebarImgType: string;
  public layoutType: string;

  public headerTheme: string;
  public pcodedHeaderPosition: string;

  public liveNotification: string;
  public liveNotificationClass: string;

  public profileNotification: string;
  public profileNotificationClass: string;

  public searchWidth: number;
  public searchWidthString: string;

  public navRight: string;
  public windowWidth: number;
  maxAttempts = 3
  userName: string
  passWord: string
  angForm: FormGroup;
  passType: string = 'password';
  bankname = null
  url = environment.base_url

  constructor(
    private router: Router,
    private _detailService: DetailService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.navType = 'st2';
    this.themeLayout = 'vertical';
    this.verticalPlacement = 'left';
    this.verticalLayout = 'wide';
    this.pcodedDeviceType = 'desktop';
    this.verticalNavType = 'expanded';
    this.verticalEffect = 'shrink';
    this.vnavigationView = 'view1';
    this.freamType = 'theme1';
    this.sidebarImg = 'false';
    this.sidebarImgType = 'img1';
    this.layoutType = 'light';

    this.headerTheme = 'theme1';

    this.liveNotification = 'an-off';
    this.profileNotification = 'an-off';

    this.searchWidth = 0;

    this.navRight = 'nav-on';


    this.windowWidth = window.innerWidth;
    this.setHeaderAttributes(this.windowWidth);
  }

  myData: any

  ngOnInit() {
    // this.http.get(this.url + '/gst-app/date').subscribe((data: any[]) => {
    //   this.myData = data
    //   this.bankname=this.myData[0]
    // })

    this.createForm()

  }

  createForm() {
    this.angForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.setHeaderAttributes(this.windowWidth);
  }

  setHeaderAttributes(windowWidth) {
    if (windowWidth < 992) {
      this.navRight = 'nav-off';
    } else {
      this.navRight = 'nav-on';
    }
  }

  toggleHeaderNavRight() {
    this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
  }

  toggleLiveNotification() {
    this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
  }

  toggleProfileNotification() {
    this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
  }

  notificationOutsideClick(ele: string) {
    if (ele === 'live' && this.liveNotification === 'an-animate') {
      this.toggleLiveNotification();
    } else if (ele === 'profile' && this.profileNotification === 'an-animate') {
      this.toggleProfileNotification();
    }
  }

  searchOn() {
    document.querySelector('#main-search').classList.add('open');
    const searchInterval = setInterval(() => {
      if (this.searchWidth >= 200) {
        clearInterval(searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth + 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  searchOff() {
    const searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList.remove('open');
        clearInterval(searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth - 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }


  login() {

    let myForm = this.angForm.value
    let obj = {
      "username": myForm.userName,
      "password": myForm.password
    }

    this._detailService.userLogin(obj).subscribe(response => {
      // this.myResponse = response
      // console.log(response.LOGGEDIN_STATUS)
      if (response.LOGGEDIN_STATUS == 1) {
        Swal.fire({
          title: '',
          text: "User Already Logged",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })
      }
      else {


        let obj = {
          id: myForm.userName
        }
        localStorage.setItem('user', JSON.stringify(obj));
        localStorage.setItem('userData', JSON.stringify(response));
        this.router.navigate(['/dashboard/default']);
      }
    },
      err => {
        // if (err.error.statusCode == 400) {
        //   Swal.fire({
        //     title: '',
        //     text: err.error.message,
        //     icon: 'error',
        //     confirmButtonColor: '#229954',
        //     confirmButtonText: 'OK'
        //   })
        // } else {
        //   Swal.fire({
        //     title: '',
        //     text: "Please Check Your Username And Password",
        //     icon: 'error',
        //     confirmButtonColor: '#229954',
        //     confirmButtonText: 'OK'
        //   })
        // }
        Swal.fire({
          title: '',
          text: "Please Check Your Username And Password",
          icon: 'error',
          confirmButtonColor: '#229954',
          confirmButtonText: 'OK'
        })

      })
  }
  showHidePassword() {
    if (this.passType == 'password') {
      this.passType = 'text';
    }
    else {
      this.passType = 'password';
    }
  }
}

