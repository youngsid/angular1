import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICart } from '../cautrucdata';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-thanh-toan', 
  imports: [FormsModule],
  templateUrl: './thanh-toan.component.html', 
  styleUrl: './thanh-toan.component.css'
})
export class ThanhToanComponent {
  constructor(public cartService: CartService, private ngZone: NgZone) {}

  donhang = { ho_ten: "", email: "", ghi_chu: "" };
  thong_bao: string = "";

  async luudonhang() {
    let listSP: ICart[] = this.cartService.listSP();
    console.log("Danh sách sản phẩm:", listSP);

    if (listSP.length == 0) {
      this.thong_bao = "Chưa có sản phẩm nào nên chưa lưu đơn hàng";
      console.log(this.thong_bao);
      return;
    }

    if (this.donhang.ho_ten.trim() == "") {
      this.thong_bao = "Chưa nhập họ tên";
      console.log(this.thong_bao);
      return;
    }

    let opt = {
      method: "POST",
      body: JSON.stringify(this.donhang),
      headers: { "Content-Type": "application/json" },
    };

    console.log("Gửi dữ liệu lên server:", this.donhang);

    try {
      let res = await fetch("http://localhost:3000/api/luudonhang", opt);
      
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      let data = await res.json();
      console.log("Response data:", data);

      this.ngZone.run(() => {
        this.thong_bao = data.thong_bao;
      });

      if (data.dh != undefined) {
        let id_dh = data.dh.id;

        for (let sp of listSP) {
          let t = { id_dh: id_dh, id_sp: sp.id, so_luong: sp.so_luong };
          let opt = {
            method: "POST",
            body: JSON.stringify(t),
            headers: { "Content-Type": "application/json" },
          };

          console.log("Lưu sản phẩm:", t);

          try {
            let resSP = await fetch("http://localhost:3000/api/luugiohang", opt)
            if (!resSP.ok) throw new Error(`Lỗi lưu sản phẩm ${sp.id}`);
          } catch (err) {
            console.log("Lỗi lưu sản phẩm:", sp, err);
          }
        }
      }
    } catch (err) {
      console.log("Lỗi kết nối API:", err);
      this.ngZone.run(() => {
        this.thong_bao = "Không thể kết nối server";
      });
    }
  } // luudonhang
} // class
