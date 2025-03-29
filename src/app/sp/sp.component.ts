// sp.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISanPham } from '../cautrucdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sp', imports: [CommonModule],
  templateUrl: './sp.component.html', styleUrl: './sp.component.css'
})
export class SpComponent {
  constructor(private route: ActivatedRoute) {}
  id: number = 0; //id sản phẩm
  sp: ISanPham = {} as ISanPham;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    fetch(`http://localhost:3000/api/sp/${this.id}`)
      .then(res => res.json())
      .then(data => this.sp = data as ISanPham)
      .catch(error => console.error('Lỗi khi fetch SP Hot:', error));
  }
}
