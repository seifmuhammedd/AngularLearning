import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { CartComponent } from '../cart/cart.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { Demo1Component } from '../demo1/demo1.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Demo3Component } from '../demo3/demo3.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path:"home", component: HomeComponent, title: "Home"},
    {path:"shop", component: ShopComponent, title: "Shop"},
    {path:"contact-us", component: ContactUsComponent, title: "Contact Us"},
    {path:"cart", component: CartComponent, title: "Cart"},
    {path:"product-details/:p_id", component: ProductDetailsComponent, title: "Product Details"},
    {path:"gallery", component: GalleryComponent, title: "Gallery", children: [
        {path: "", redirectTo: "demo1", pathMatch: "full"},
        {path:"demo1", component: Demo1Component, title: "demo1"},
        {path:"demo2", component: Demo2Component, title: "demo2"},
        {path:"demo3", component: Demo3Component, title: "demo3"},
    ]},
    {path:"**", component: NotFoundComponent, title: "Error 404"},
];
