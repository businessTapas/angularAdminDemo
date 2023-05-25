import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email, User } from '../../../../_models';
import { AccountService, EmailService } from "../../../../service/";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user: User;
  public emails$: Observable<Email[]>

  constructor(
    private accountService: AccountService,
    private emailService: EmailService,
    private router: Router
  ) {
    accountService.user.subscribe( x => this.user = x );
    this.emails$ = this.emailService.loadEmails();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.accountService.logout();
  }
}
