import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {transition, trigger, style, animate} from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [
    './modal.component.scss',
    '../../../../../../node_modules/sweetalert2/src/sweetalert2.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  showDialog = false;
  @Input() visible: boolean;
  public config: any;

  constructor() {}

  ngOnInit() {
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  openBasicModal(event) {
    this.showDialog = !this.showDialog;
    setTimeout(() => {
      document.querySelector('#' + event).classList.add('md-show');
    }, 25);
  }

  closeBasicModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    setTimeout(() => {
      this.visible = false;
      this.showDialog = !this.showDialog;
    }, 300);
  }

  basicSwal() {
    Swal.fire('', 'Hello world!');
  }

  successSwal() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  warningSwal() {
    Swal.fire('Good job!', 'You clicked the button!', 'warning');
  }

  dangerSwal() {
    Swal.fire('Good job!', 'You clicked the button!', 'error');
  }

  infoSwal() {
    Swal.fire('Good job!', 'You clicked the button!', 'info');
  }

  // confirmAlert() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'Once deleted, you will not be able to recover this imaginary file!',
  //     type: 'warning',
  //     showCloseButton: true,
  //     showCancelButton: true
  //   }).then((willDelete) => {
  //     if (willDelete.dismiss) {
  //       Swal.fire('', 'Your imaginary file is safe!', 'error');
  //     } else {
  //       Swal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
  //     }
  //   });
  // }

  promptAlert() {
    Swal.fire({
      text: 'Write something here:',
      input: 'text',
    }).then((result) => {
      if (result.value) {
        Swal.fire('', `You typed: ${result.value}`);
      }
    });
  }

  ajaxAlert() {
    // Swal.fire({
    //   text: 'Submit your Github username',
    //   input: 'text',
    //   inputAttributes: {
    //     autocapitalize: 'off'
    //   },
    //   showCancelButton: true,
    //   confirmButtonText: 'Look up',
    //   showLoaderOnConfirm: true,
    //   preConfirm: (login) => {
    //     return fetch(`//api.github.com/users/${login}`)
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error(response.statusText);
    //         }
    //         return response.json();
    //       })
    //       .catch(error => {
    //         Swal.showValidationMessage(
    //           `Request failed: ${error}`
    //         );
    //       });
    //   },
    //   allowOutsideClick: () => !Swal.isLoading()
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire({
    //       title: `${result.value.login}'s avatar`,
    //       imageUrl: result.value.avatar_url
    //     });
    //   }
    // });
  }

}
