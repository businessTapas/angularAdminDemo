import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map, first } from 'rxjs/operators';

import { AccountService } from '../../../../service';
import { environment } from "src/environments/environment";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEditComponent } from './add-edit.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({ 
        selector: 'app-employee-table',
      templateUrl: './seller-table.component.html',
      styleUrls: ['./seller-table.component.scss']
      })
export class SellerTableComponent implements OnInit {
    users = null;
    public isShowFilterInput = false;

    displayedColumns: string[] = ['imagefile', 'departmentname', 'firstname', 'lastname', 'username', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private accountService: AccountService, public dialog: MatDialog) {}

    ngOnInit() {
      this.getEmployeeList();        
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe({ 
              next: (res) => {
                this.getEmployeeList();        
              }
            })
   //         .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }

    openDialog(data: any) {
      //console.log(data);
        const dailogRef = this.dialog.open(AddEditComponent, {
          data,
          width: "40%"
        });
        dailogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getEmployeeList();
            }
          }
        })
      }

      getEmployeeList() {
        this.accountService.getAll()
            .pipe(map((res) => {
                const source = { departmentId: { departmentname: '' }};
                for ( const key in res ) {
                    if ('imagefile' in res[key] == true && res[key].imagefile != '') {
                    res[key].imagefile = `${environment.apiUrl}/`+res[key].imagefile;
                    }
                    if ('departmentId' in res[key] !== true) {      // ( in or hasOwnProperty )
                        Object.assign(res[key], source);
                    }
                }
            //    console.log(res)
                return res;
            }))
           // .subscribe(users => this.users = users);
            .subscribe({ next: (res) =>{
              this.users = res;
                this.dataSource = new MatTableDataSource(this.users);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            });
      }

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }

      public showFilterInput(): void {
        this.isShowFilterInput = !this.isShowFilterInput;
        this.dataSource = new MatTableDataSource(this.users);
      }
}