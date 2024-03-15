import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component
({
    selector: 'app-buttons',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.scss'
})
export class ButtonsComponent
{
    @Output() parentMethod = new EventEmitter<void>();

    attributesList: string[] = ["Nome", "Idade", "CPF", "RG", "Telefone", "Gênero", "Nacionalidade", "Religião"];
    currentAttributesIndex: number[] = [];
    currentAttributes: string[] = [];

    isExistInCurrentList(attribute: string): boolean
    {
        return this.currentAttributes.includes(attribute);
    }

    updateAttributes(): void
    {
        this.currentAttributes = [];
        this.currentAttributesIndex.forEach((index) => {
            const newAttribute: string | any = this.attributesList.at(index);
            if (newAttribute) {
                this.currentAttributes.push(newAttribute);
            }
        });

        this.parentMethod.emit();
    }

    changedAttribute(attribute: string)
    {
        const attributeIndex: number = (this.attributesList.includes(attribute)) ? this.attributesList.indexOf(attribute) : -1;
        const attributeCurrentIndex: number = (this.isExistInCurrentList(attribute)) ? this.currentAttributes.indexOf(attribute) : -1 ;
        if (attributeIndex == -1) return;

        if (attributeCurrentIndex == -1)
        {
            this.currentAttributesIndex.push(attributeIndex);
            this.currentAttributesIndex.sort((a, b) =>
            {
                if ((typeof a !== 'number') || (typeof b !== 'number')) throw new Error();
                return a - b;
            });
        }
        else
            this.currentAttributesIndex.splice(attributeCurrentIndex, 1);

        this.updateAttributes();
    }

    generatedClick()
    {
        console.log("fhg");
    }
}
