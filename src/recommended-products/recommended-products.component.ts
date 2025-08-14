import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { MyPipePipe } from '../my-pipe.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [DatePipe, DecimalPipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, PercentPipe, MyPipePipe],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {

  constructor (private _ProductsService: ProductsService) {}

  products: Iproduct[] = this._ProductsService.products
}
