import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'pepperoni',
  template: `
  <h2>Pepperoni</h2>
  <img width=200 height=200 src="https://thumbs.dreamstime.com/b/salami-wurst-scheibe-lokalisiert-auf-einem-wei%C3%9Fen-hintergrund-30227795.jpg">
  `,
  styles: []
})

export class PepperoniComponent {
}

@Component({
  selector: 'everything',
  template: `
    <h2>Everything</h2>
    Size:{{size}}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UXyx2jQrCBBBw2N4ofFVw2oWz7keZjDVUB4UDrASE9JHwQdi">
  `,
  styles: []
})

export class EverythingComponent {

  private size: String = '';

  constructor(private route: ActivatedRoute){
    route.params.subscribe( (params: Object) => this.size = params['size'] );
  }

}

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Pizzas
    </h1>
    <a [routerLink]="['pepperoni']">Pepperoni</a> | 
    <a [routerLink]="['everything','small']">Everything Small</a> | 
    <a [routerLink]="['everything','large']">Everything Large</a>

    <router-outlet></router-outlet>
 
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

