
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DepartmentService, AlertService } from '../service';

@Component({ templateUrl: 'dialog-add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private departmentService: DepartmentService,
        private alertService: AlertService,
        private _dialogRef: MatDialogRef<AddEditComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {}

    ngOnInit() {
    //    this.id = this.route.snapshot.params['id'];
    if ( this.data !=null ) {
        this.id = this.data.id;
    }
        this.isAddMode = !this.id;
        
        this.form = this.formBuilder.group({
            departmentname: ['', Validators.required],
            description: ['', Validators.required],
        });

        if (!this.isAddMode) {
            this.departmentService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createDepartment();
        } else {
            this.updateDepartment();
        }
    }

    private createDepartment() {
        this.departmentService.create(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                //    this.alertService.success('User added successfully', { keepAfterRouteChange: true });
                //    this.router.navigate(['../'], { relativeTo: this.route });
                    this.alertService.success('Department added successfully');
                    this._dialogRef.close(true);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updateDepartment() {
        this.departmentService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                   // this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  //  this.router.navigate(['../../'], { relativeTo: this.route });
                  this.alertService.success('Department updated successfully');
                    this._dialogRef.close(true);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
