import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';
import { MyPipePipe } from '../my-pipe.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [DatePipe, DecimalPipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, PercentPipe, MyPipePipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  constructor ( private _ProductsService: ProductsService ) { }

  products: Iproduct[] = this._ProductsService.products
}
