import { Directive, HostListener } from '@angular/core';//HostListener is the class which deals withlistens to events raised by DOM element which 
//host/contain this directive as attribute

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }

}
