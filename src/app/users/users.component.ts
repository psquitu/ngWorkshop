import { Component, OnInit } from '@angular/core';
//import { GetUsersData } from './users';
import { UserService } from './users.service';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
    selector: 'app-user',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [ UserService ]
})

/*export class UserComponent extends GetUsersData{
    userLists:any;
    constructor(){
        super();
        this.userLists = this.getAllUser();
    }

}*/

export class UserComponent implements OnInit {
    userLists:any;
    showForm: boolean = false;
    editForm: boolean = false;
    addButton:string = 'Show Add';
    user:any;
    index: number;

    statusText = [
        {"stat": "InActive"},
        {"stat": "Active"}
    ];

    constructor(private _userList: UserService){
        
    }
    ngOnInit(){
        this.userLists = this._userList.getAllUser();
    }
    
    addUser(){
        this.showForm = !this.showForm;
        this.changeButtonText(this.showForm);
        this.user = {};
    }

    changeButtonText(formText){
        if(formText)
            this.addButton='Hide Add';
        else
            this.addButton='Show Add';
    }

    saveUser(formData){
        if(this.showForm){
            let newUser: any =  formData.value;
            newUser.id = Math.max.apply(Math,this.userLists.map(function(item){return item.id;}))+1;
            this.userLists.push(newUser);
            formData.reset();
            this.user = {};
            this.showForm = false;
            this.changeButtonText(this.showForm);
        }else{
            let newUser: any =  formData.value;
            newUser.id = Math.max.apply(Math,this.userLists.map(function(item){return item.id;}))+1;
            this.userLists[this.index]= newUser;
            formData.reset();
            this.user = {};
            this.editForm = false;
            this.changeButtonText(this.showForm);
        }
        
    }

    editData(item, uIndex){
        this.index = uIndex;
        this.editForm = true;
        this.showForm = false;
        this.user = item;
    }

    deleteData(uIndex){
        this.userLists.splice(uIndex, 1);
    }

}



