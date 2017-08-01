import { Directive, ElementRef, OnInit } from '@angular/core';

/*
* Works only for text without HTML tags. Such as headings.
*/
@Directive({
  selector: '[upper-camel]'
})
export class UpperCamelCaseDirective implements OnInit {

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    this.camelizeTextContent();
  }

  private camelizeTextContent() {
    const elem = this.el.nativeElement;
    elem.textContent = this.camelizeString(elem.textContent);
  }

  /*
  * Makes first letter of each word uppercase. Does not work with `-` between
  * words.
  */
  private camelizeString(str: string): string {
    return str.replace(/\b(\w)/g, (letter) => letter.toUpperCase());
  }
}
