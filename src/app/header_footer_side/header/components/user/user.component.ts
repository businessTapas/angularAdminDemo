import { Component, EventEmitter, Input, Output } from '@angular/core';

import { routes } from '../../../../app_consts';
import { Email, User } from '../../../../_models';
import { AccountService, EmailService } from "../../../../service/";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  //@Input() user: User;
  public user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";
  constructor(
    private accountService: AccountService,
  ) {
    accountService.user.subscribe( x => this.user = x );
  }
  public signOutEmit(): void {
    this.signOut.emit();
  }
}
