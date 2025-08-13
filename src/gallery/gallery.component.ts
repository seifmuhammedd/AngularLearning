import { Component } from '@angular/core';
import { Demo1Component } from "../demo1/demo1.component";
import { Demo2Component } from "../demo2/demo2.component";
import { Demo3Component } from "../demo3/demo3.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
