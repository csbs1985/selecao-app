import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  proxy<T>(obj: object, keys: string): T | undefined {
    return keys.split('.').reduce((value: any, key: any): any | undefined => {
      return value && key in value ? value[key] as T : undefined;
    }, obj);
  }
}
