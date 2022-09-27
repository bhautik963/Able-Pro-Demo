import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { ToastService } from '../components/toast/toast.service';

import { Observable, from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router, private toastService: ToastService) { }

  public emailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  public usernameRegex = '^[a-z0-9_-]{3,15}'
  public fulNameRegex = '^[a-zA-Z\\s]{3,15}'
  public passwordRegex = '.{5,}';
  public phoneRegex = '^[0-9]{10}$';
  public phoneNoRegex = '^([+]\d{2})?\d{10}$';
  public numRegex = '^[0-9][0-9.]*$';
  public numCheck = '^[0-9]*$';
  public pincodeRegex = '^[0-9]{6}$';
  public decimalnumber = '^[0-9]*(\.[0-9]{0,2})?$';
  public searchValue: Subject<String> = new Subject();
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public sum(array, key) {
    if (!array.length) { return 0; }
    return array.reduce((a, b) => a + (b[key] || 0), 0);
  }


  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public getChangedFormValues(form: any) {
    const dirtyValues = {};
    Object.keys(form.controls).forEach(c => {
      const currentControl = form.get(c);
      if (currentControl.dirty) {
        dirtyValues[c] = currentControl.value;
      }
    });
    return dirtyValues;
  }

  public doRouting(params?: any) {
    this.router.navigate([params]);
  }

  public validateForm(form: any) {
    this.validateAllFormFields(form);
  }

  public onAuthSuccess(response: any, action?: string) {
    if (action) { this.doRouting(action); }
  }

  public notifyError(msg) {


    this.toastService.show(`${msg} 🚫`, {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      // headertext: 'Error!!!'
    });
  }

  public notifySuccess(msg) {
    this.toastService.show(`${msg} 👍`, {
      classname: 'bg-success text-light',
      delay: 3000,
      autohide: true,
      // headertext: 'Success'
    });
  }
  public getSearchFilterValue(value) {
    this.searchValue.next(value);
    return this.searchValue.asObservable();
  }

  public notifyWarning(msg) {
    // this.addToast({ title: 'Warning', type: 'warning', msg: `${msg} ⚠` });
    this.toastService.show(`${msg} ⚠`, {
      classname: 'bg-warning text-light',
      delay: 3000,
      autohide: true
    });
  }
  public notifyInfo(msg) {
    this.toastService.show(`${msg} 📢`, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
  public notifyWaiting(msg) {
    this.toastService.show(`${msg}...⏳`, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }





  public generateInterval(size, number: any) {
    number = number / 3;
    if (number > 5) {
      size.push(parseInt(number));
      return this.generateInterval(size, number);
    }
    return size.sort((a, b) => a - b).map((e) => ({ value: e.toString(), name: e.toString() }));
  }

  public handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      const err = error.error ? error.error.msg : error;

      this.notifyError(err);
      return from(result);
    };
  }


  public pick(obj, array) {
    const clonedObj = this.clone(obj);
    return array.reduce((acc, elem) => {
      if (elem in clonedObj) { acc[elem] = clonedObj[elem]; }
      return acc;
    }, {});
  }

  public omit(obj, array, deepCloning = false) {
    const clonedObject = deepCloning ? this.deepClone(obj) : this.clone(obj);
    const objectKeys = Object.keys(clonedObject);
    return objectKeys.reduce((acc, elem) => {
      if (!array.includes(elem)) { acc[elem] = clonedObject[elem]; }
      return acc;
    }, {});
  }

  public clone(data: any) {
    const originalData = data.toObject ? data.toObject() : data; // for mongodb result operations
    const eType = originalData ? originalData.constructor : 'normal';
    if (eType === Object) { return { ...originalData }; }
    if (eType === Array) { return [...originalData]; }
    return data;
    // return JSON.parse(JSON.stringify(data));
  }

  public deepClone(data) {
    const originalData = !!data.toObject || !!data._doc ? data._doc : data;
    if (originalData.constructor === Object) { return this.cloneObject(originalData); }
    if (originalData.constructor === Array) { return this.cloneArray(originalData); }
    return originalData;
  }

  public cloneObject(object) {
    const newData = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i += 1) {
      const eType = object[keys[i]] ? object[keys[i]].constructor : 'normal';
      switch (eType) {
        case 'normal':
          newData[keys[i]] = object[keys[i]];
          break;
        case Array:
          newData[keys[i]] = this.cloneArray(object[keys[i]]);
          break;
        case Object:
          newData[keys[i]] = this.cloneObject(object[keys[i]]);
          break;
        default:
          newData[keys[i]] = object[keys[i]];
          break;
      }
    }
    return newData;
  }

  public cloneArray(array) {
    const newData = [];
    for (let i = 0; i < array.length; i += 1) {
      const eType = array[i] ? array[i].constructor : 'normal';
      switch (eType) {
        case 'normal':
          newData.push(array[i]);
          break;
        case Array:
          newData.push(this.cloneArray(array[i]));
          break;
        case Object:
          newData.push(this.cloneObject(array[i]));
          break;
        default:
          newData.push(array[i]);
          break;
      }
    }
    return newData;
  }
}
