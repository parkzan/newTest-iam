import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-page-role',
  templateUrl: './page-role.component.html',
  styleUrls: ['./page-role.component.scss']
})
export class PageRoleComponent implements OnInit {

  roleCodeForm = new FormControl();
  roleNameForm = new FormControl();

  roleList = [
     {
      roleCode :"0551",
      roleName :"Admin"
     },{
      roleCode :"0536",
      roleName :"Admin524"
    },{
      roleCode :"452",
      roleName :"Admin53"
    },{
      roleCode :"345",
      roleName :"Admin4"
    },{
      roleCode :"3453",
      roleName :"Admin1"
    }
  ];
  newRole:any
  roleCode:string = "0551";
  roleName:string = "Admin";
  constructor() { 
     
  }
 
  ngOnInit() {
    
  }
  addRole(){
    this.newRole = {
      roleCode:this.roleCodeForm.value,
      roleName:this.roleNameForm.value
    }
    this.roleList.push(this.newRole);
    this.roleList.keys()
    console.log("roleCodeForm===>"+this.roleList);
  }
  editSystem(role:any){
    this.roleCodeForm.setValue(role.roleCode);
    this.roleNameForm.setValue(role.roleName);
  }
  saveRole(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save Role',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.addRole()
        Swal.fire(
          'Success!',
          'Your has been save',
          'success'
        )
        $('#modelAddRole').modal('hide');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  deleteRole(code:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Role',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your Role has been deleted.',
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
  clearFormInput(){
    this.roleCodeForm.setValue("");
    this.roleNameForm.setValue("");
  }

}
