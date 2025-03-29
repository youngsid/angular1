import { Component } from '@angular/core';
import { ICart } from '../cautrucdata';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  listSP: ICart[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.listSP = this.cartService.listSP();
  }

  // 🛠 Thêm hàm cập nhật số lượng sản phẩm
  suaSL(id: number, soLuongMoi: number) {
    const sp = this.listSP.find(item => item.id === id);
    if (sp) {
      sp.so_luong = soLuongMoi;
    }
  }

  // 🛠 Thêm hàm xóa sản phẩm khỏi giỏ hàng
  xoaSP(id: number) {
    this.listSP = this.listSP.filter(item => item.id !== id);
  }

  // 🛠 Thêm hàm xóa toàn bộ giỏ hàng
  xoaGH() {
    this.listSP = [];
  }
}
