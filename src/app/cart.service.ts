import { Injectable } from '@angular/core';
import { ISanPham, ICart } from './cautrucdata';

@Injectable({  
  providedIn: 'root'})


export class CartService {

  // thêm vào giỏ hàng  
  themVaoGio(sp: ISanPham) {
    let sp_arr = JSON.parse(localStorage.getItem("cart") || "[]") as ICart[];
    let index = sp_arr.findIndex(s => s.id === sp.id);
    if (index >= 0) sp_arr[index].so_luong++;
    else {
        let c: ICart = {id: sp.id, ten_sp: sp.ten_sp, gia_mua: sp.gia_km, hinh: sp.hinh, so_luong: 1};
        sp_arr.push(c);
    }
    localStorage.setItem("cart", JSON.stringify(sp_arr));
    console.log("Đã thêm sp");
}

  // Danh sách sản phẩm
  listSP() {
    return JSON.parse(localStorage.getItem("cart") || "[]") as ICart[];
  }

  // Sửa số lượng sản phẩm
  suaSL(id: number, so_luong: number): void {
    let sp_arr = JSON.parse(localStorage.getItem("cart") || "[]") as ICart[];
    let index = sp_arr.findIndex(sp => sp.id === id);
    if (index !== -1 && so_luong > 0) {
      sp_arr[index].so_luong = so_luong;
    } else if (index !== -1 && so_luong <= 0) {
      sp_arr.splice(index, 1); // Nếu số lượng <= 0 thì xóa luôn
    }
    localStorage.setItem("cart", JSON.stringify(sp_arr));
  }

  // Xóa sản phẩm
  xoaSP(id: number): void {
    let sp_arr: ICart[] = JSON.parse(localStorage.getItem("cart") || "[]") as ICart[];
    let index = sp_arr.findIndex(sp => sp.id === id);
    if (index >= 0) sp_arr.splice(index, 1); //xóa sp
    localStorage.setItem("cart", JSON.stringify(sp_arr));
  }

  // Xóa giỏ hàng
  xoaGH() { 
    localStorage.removeItem("cart"); 
  }  
}
