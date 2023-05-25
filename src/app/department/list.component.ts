import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEditComponent } from './add-edit.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { DepartmentService } from '../service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    departments = null;
    displayedColumns: string[] = ['departmentname', 'description', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private departmentService: DepartmentService, public dialog: MatDialog) {}

    ngOnInit() {
        this.getDepartmentList();
    }

    deleteDepartment(id: string) {
        const user = this.departments.find(x => x.id === id);
        user.isDeleting = true;
        this.departmentService.delete(id)
            .pipe(first())
            .subscribe({ 
                next: (res) => {
                  this.getDepartmentList();        
                }
              })
           // .subscribe(() => this.departments = this.departments.filter(x => x.id !== id));
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
                this.getDepartmentList();
              }
            }
          })
        }

    getDepartmentList() {
        this.departmentService.getAll()
        .pipe(first())
        .subscribe({
            next: (res) =>{
                this.departments = res;
                  this.dataSource = new MatTableDataSource(this.departments);
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
}