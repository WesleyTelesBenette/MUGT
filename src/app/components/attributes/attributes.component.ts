import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-attributes',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './attributes.component.html',
    styleUrl: './attributes.component.scss'
})
export class AttributesComponent {
    attributesList: string[] = [];
}
