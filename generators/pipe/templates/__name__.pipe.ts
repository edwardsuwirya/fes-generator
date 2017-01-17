import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '<%= pipeName %>'})
export class <%= pipeName %>Pipe implements PipeTransform {
  transform(value: number, exponent: string): any {
    return null;
  }
}
