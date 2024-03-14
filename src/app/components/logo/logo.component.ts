import { Component } from '@angular/core';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [],
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.scss'
})
export class LogoComponent {
    title: string = 'MUGT';
    subtitle: string = 'My User Generated for Testing';
}
