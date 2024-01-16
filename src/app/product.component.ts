import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('collapsed', style({
        height: 0,
        display: 'none',
        overflow: 'hidden'
      })),
      state('expanded',   style({
        height: 'auto',
        display: 'block',
        overflow: 'none'
      })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms ease-out'))
    ])
  ]
})

export class ProductComponent {
  // Define the product properties
  title = 'Camera - EOS 6D';
  imageSrc = 'https://cdn.explorecams.com/storage/products/canon-eos-6d~120.png?v=1612224143';
  price = 19.99;
  showShippingDetail = false;
  showShippingTerms = true;

  // Toggle the shipping detail button visibility
  toggleShippingDetail() {
    this.showShippingDetail = !this.showShippingDetail;
  }
}
