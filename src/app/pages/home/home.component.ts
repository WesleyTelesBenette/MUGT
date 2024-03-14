import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { AttributesComponent } from '../../components/attributes/attributes.component';
import { LinksComponent } from '../../components/links/links.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, AttributesComponent, LinksComponent, ButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  generatedClick(): void {

  }

}
