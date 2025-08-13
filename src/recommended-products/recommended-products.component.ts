import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { MyPipePipe } from '../my-pipe.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [DatePipe, DecimalPipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, PercentPipe, MyPipePipe],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {

  products:Iproduct[]=[
    {id:0, name:"iphone 16", price:40000, imgSrc:"./assets/61V7NjE8V+L._UF1000,1000_QL80_.jpg",onSale:true, title:"Good iphone", category:"phone"},
    {id:1, name:"iphone 15", price:30000, imgSrc:"./assets/iPhone_15_Green_PDP_Image_Position-1__en-IN.webp",onSale:true, title:"Very Good iphone", category:"phone"},
    {id:2, name:"LG TV", price:20000, imgSrc:"./assets/LG-55-Class-4K-UHD-2160P-Smart-TV-55UN6955ZUF_acc9f107-0056-4f6a-88a0-5ac0324e11e1.c31fabd3fd73c94c7f8cad8d04e0cd0e.webp",onSale:false, title:"Good TV", category:"television"},
  ]

}
