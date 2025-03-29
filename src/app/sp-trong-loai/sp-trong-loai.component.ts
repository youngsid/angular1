// sp-trong-loai.component.ts
import { Component } from '@angular/core';
import { ILoai, ISanPham } from '../cautrucdata';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sp-trong-loai', imports: [CommonModule],
  templateUrl: './sp-trong-loai.component.html',
  styleUrl: './sp-trong-loai.component.css'
})
export class SpTrongLoaiComponent {
  constructor(private route: ActivatedRoute) {}

  sp_arr: ISanPham[] = [];
  id: number = 0; //id loại sản phẩm
  loai: ILoai = {} as ILoai;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    fetch(`http://localhost:3000/api/sptrongloai/${this.id}`)
      .then(res => res.json())
      .then(data => this.sp_arr = data as ISanPham[])
      .catch(error => console.error('Lỗi khi fetch SP Hot:', error));

    fetch(`http://localhost:3000/api/loai/${this.id}`)
      .then(res => res.json())
      .then(data => this.loai = data as ILoai)
      .catch(error => console.error('Lỗi khi fetch Loai:', error));
  }
}