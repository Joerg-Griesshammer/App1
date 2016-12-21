import { Component } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'my-app',
    template: '<h1>Hello from the {{componentName}}.</h1>'
})

export class AppComponent {
    componentName: 'My first angular2 component !!!'
}

bootstrap(AppComponent);