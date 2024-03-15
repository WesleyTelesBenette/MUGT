import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';
import { AttributesComponent } from '../../components/attributes/attributes.component';
import { LinksComponent } from '../../components/links/links.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LogoComponent, AttributesComponent, LinksComponent, ButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('buttons') buttons: ButtonsComponent | any;
  @ViewChild('attributes') attributes: AttributesComponent | any;

  updateList() {
    if ((this.attributes != null) && (this.buttons != null)) {
      this.attributes.attributesList = this.buttons.currentAttributes;
    }
  }
}
