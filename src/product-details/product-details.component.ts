import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor ( private _ActivatedRoute: ActivatedRoute ) {}

  private readonly _ProductsService = inject(ProductsService)

  product !: Iproduct | undefined

  productID !: number | null

// Observable -> State -> rxJS

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (productInfo)=>{
        this.productID = Number( productInfo.get("p_id"))
        //true
      },
      error: (err)=>{
        console.log(err)
        //false
      },
    })

    this.product = this._ProductsService.getProductByID(this.productID)

  }


}
