import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'startsWiths'})
export class startsWithPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    let reg=new RegExp(term,'i');
    return value.filter((x:any) => reg.test(x))
  
 } 
}