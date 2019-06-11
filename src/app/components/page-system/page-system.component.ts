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
  listSystem = [
    {
      sysCode:"CRV",
      sysName:"SystemA"
    },{
      sysCode:"SFEF",
      sysName:"SystemB"
    },{
      sysCode:"FES",
      sysName:"SystemC"
    },{
      sysCode:"WEQ",
      sysName:"SystemD"
    }
  ]
  sysName:string = "SystemA";
  sysCode:String = "CRV";
  constructor() {   }

  ngOnInit() {
    
    
  }
  editSystem(code:string,name:string){
      this.name.setValue(code);
      this.code.setValue(name);
  }

  delSystem(system:any){
    console.log(system);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this '+system.sysName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your '+system.sysName+' has been deleted.',
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
