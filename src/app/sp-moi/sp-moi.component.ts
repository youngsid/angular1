import { Component } from '@angular/core';
import { ISanPham } from '../cautrucdata';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sp-moi',
  imports: [CommonModule],
  templateUrl: './sp-moi.component.html',
  styleUrl: './sp-moi.component.css'
})
export class SpMoiComponent {
  sp_arr:ISanPham[] = [];
    ngOnInit(){
      fetch("http://localhost:3000/api/spmoi/6")
      .then ( res => res.json())
      .then (data => this.sp_arr = data as ISanPham[])
      .catch(error => console.error('Lỗi khi fetch SP Hot', error));
    }
}
