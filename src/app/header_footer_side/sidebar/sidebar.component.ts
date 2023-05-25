import { Component } from '@angular/core';
import { routes } from '../../app_consts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements:boolean = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
