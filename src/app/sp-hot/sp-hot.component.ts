import { Component } from '@angular/core';
import { ISanPham } from '../cautrucdata';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sp-hot',
  imports: [CommonModule],
  templateUrl: './sp-hot.component.html',
  styleUrl: './sp-hot.component.css'
})
export class SpHotComponent {
  constructor( public cartService:CartService) {}
  sp_arr:ISanPham[] = [];
  ngOnInit(){
    fetch("http://localhost:3000/api/spHot/6")
    .then ( res => res.json())
    .then (data => this.sp_arr = data as ISanPham[])
    .catch(error => console.error('Lỗi khi fetch SP Hot', error));
  }
}
