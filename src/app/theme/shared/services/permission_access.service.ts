'use strict';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class PermissionAccessService implements OnInit {
    url: string;
    view: boolean;
    edit: boolean;
    add: boolean;
    delete: boolean;
    changeStatus: boolean;
    permissions: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private adminService: AuthService
    ) {
        this.activatedRoute.url.subscribe(activeUrl => {
            this.url = window.location.pathname;
        });
    }

    ngOnInit() { }

    // permissionAccessDenied(name): Promise<any> {
    //     const storageValues = JSON.parse(localStorage.getItem('currentUser'));
    // if (storageValues !== null && storageValues !== "") {
    //     return this.adminService.viewPermissions(storageValues.Authorization).toPromise().then((res) => {
    //         res.data.map(singlePermissions => {
    //             singlePermissions.operations.map(singleOperations => {
    //                 if (singlePermissions.permissions === name) {
    //                     if (singleOperations.name === "View" && singleOperations.canOperate === "true") {
    //                         this.view = true;
    //                     }
    //                     if (singleOperations.name === "View" && singleOperations.canOperate === "") {
    //                         this.view = false;
    //                     }
    //                     if (singleOperations.name === "Edit" && singleOperations.canOperate === "true") {
    //                         this.edit = true;
    //                     }
    //                     if (singleOperations.name === "Edit" && singleOperations.canOperate === "") {
    //                         this.edit = false;
    //                     }
    //                     if (singleOperations.name === "Add" && singleOperations.canOperate === "true") {
    //                         this.add = true;
    //                     }
    //                     if (singleOperations.name === "Add" && singleOperations.canOperate === "") {
    //                         this.add = false;
    //                     }
    //                     if (singleOperations.name === "Delete" && singleOperations.canOperate === "true") {
    //                         this.delete = true;
    //                     }
    //                     if (singleOperations.name === "Delete" && singleOperations.canOperate === "") {
    //                         this.delete = false;
    //                     }
    //                     if (singleOperations.name === "Change Status" && singleOperations.canOperate === "true") {
    //                         this.changeStatus = true;
    //                     }
    //                     if (singleOperations.name === "Change Status" && singleOperations.canOperate === "") {
    //                         this.changeStatus = false;
    //                     }
    //                 }
    //             })
    //         })
    //         let permissions = {
    //             add: this.add,
    //             view: this.view,
    //             changeStatus: this.changeStatus,
    //             delete: this.delete,
    //             edit: this.edit,
    //         }
    //         return permissions;
    //     })
    // }
    // }
}