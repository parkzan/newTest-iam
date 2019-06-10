import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-page-system',
  templateUrl: './page-system.component.html',
  styleUrls: ['./page-system.component.scss']
})
export class PageSystemComponent implements OnInit {
  myTest:any;
  name = new FormControl();
  code = new FormControl();
  sysName:string = "SystemA";
  sysCode:String = "CRV";
  constructor() {   }

  ngOnInit() {
    
    
  }
  editSystem(){
      this.name.setValue(this.sysName);
      this.code.setValue(this.sysCode);
  }

  delSystem(systemName:String){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this '+systemName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your '+systemName+' has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  } 

}
