import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-links',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './links.component.html',
    styleUrl: './links.component.scss'
})
export class LinksComponent {
    public currentCopied: string = "URL";

    public url: string = "Ainda não tem...";
    public route: string = "/generated/user";

    constructor(private cdr: ChangeDetectorRef) { }

    private copyToClipBoard(text: string): boolean {
        const toast = document.getElementById('toast');

        navigator.clipboard.writeText(text)
            .then(() => {
                toast?.classList.add('toast-on');
                this.cdr.detectChanges();
                setTimeout(() => {
                    toast?.classList.remove('toast-on')
                }, 6000);
            })
            .catch(err => {
                console.error('Erro ao copiar texto para a área de transferência: ', err);
                return false;
            });
        return toast?.classList.contains('toast-on').valueOf != null;
    }

    public copyUrl(): void {
        this.currentCopied = "URL";
        this.copyToClipBoard(this.url);
    }

    public copyRoute(): void {
        this.currentCopied = "ROTA";
        this.copyToClipBoard(this.route);
    }
}
