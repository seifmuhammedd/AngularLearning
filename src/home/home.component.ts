import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MyPipePipe } from '../my-pipe.pipe';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { Iproduct } from '../iproduct';
import { RecommendedProductsComponent } from "../recommended-products/recommended-products.component";
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, DecimalPipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, PercentPipe, MyPipePipe, RecommendedProductsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor (private _Router: Router, private _ProductsService: ProductsService) { }

  products:Iproduct[] = this._ProductsService.products

  isAdmin: boolean = true

  navigateTOGallery():void{
    if(this.isAdmin){
      this._Router.navigate(["/gallery"])
      // navigate to gallery
    }else{
      this._Router.navigate(["/shop"])
      // navigate to shop
    }
  }

}
