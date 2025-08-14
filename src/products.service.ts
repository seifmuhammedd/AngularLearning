import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:Iproduct[]=[
    {id:0, name:"iphone 16", price:40000, imgSrc:"./assets/61V7NjE8V+L._UF1000,1000_QL80_.jpg",onSale:true, title:"Good iphone", category:"phone"},
    {id:1, name:"iphone 15", price:30000, imgSrc:"./assets/iPhone_15_Green_PDP_Image_Position-1__en-IN.webp",onSale:true, title:"Very Good iphone", category:"phone"},
    {id:2, name:"LG TV", price:20000, imgSrc:"./assets/LG-55-Class-4K-UHD-2160P-Smart-TV-55UN6955ZUF_acc9f107-0056-4f6a-88a0-5ac0324e11e1.c31fabd3fd73c94c7f8cad8d04e0cd0e.webp",onSale:false, title:"Good TV", category:"television"},
    {id:3, name:"xiaomi redmi", price:20000, imgSrc:"./assets/xiaomi-redmi-note-13-black_rxxljzfgycpihkse.jpg",onSale:false, title:"Good phone", category:"phone"},
    {id:4, name:"Samsung", price:40000, imgSrc:"./assets/61lLjrvDEkL._UF1000,1000_QL80_.jpg",onSale:true, title:"Good samsung", category:"phone"},
    {id:5, name:"Samsung 2", price:40000, imgSrc:"./assets/4323ba4f92a8ce3479cdd29b02837b5247c16860e7812dd2faf18b97dac6981d.jpeg",onSale:true, title:"Good samsung", category:"phone"},
  ]

  getProductByID(id:number|null){
    return this.products.find( product=>product.id === id )
  }

}
