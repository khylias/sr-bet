import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPasswordInspector]'
})
export class PasswordInspectorDirective implements OnInit {
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    const parent = this.el.nativeElement.parentNode;
    const button = this.renderer.createElement('button');
    button.className += 'material-icons large siimple-btn siimple-btn--grey';
    button.innerHTML = 'visibility';

    button.addEventListener('click', () => {
      this.isVisible = !this.isVisible;
      this.renderer.setAttribute(this.el.nativeElement, 'type', this.isVisible ? 'text' : 'password');
    });

    this.renderer.appendChild(parent, button);
  }
}
