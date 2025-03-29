import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap', 
  imports: [FormsModule], 
  templateUrl: './dang-nhap.component.html', 
  styleUrl: './dang-nhap.component.css'
})
export class DangNhapComponent {
  user = { email:"", mat_khau:"" }
  thong_bao:string = "";

  dangnhap(){
    if (this.user.email==""){ 
      this.thong_bao ="Chưa nhập email mà"; 
      return; 
    }
    let opt = {
      method:"post", 
      body: JSON.stringify(this.user),
      headers: {'Content-type':'application/json' }
    }
    fetch("http://localhost:3000/api/dangnhap", opt)
    .then( res => res.json())
    .then( data => {
      console.log("data=", data)
      if (data.thong_bao==undefined) return this.thong_bao= data.thong_bao;
      let expiresIn = data.expiresIn; //"1h"
      let user = data.info; //{"id": 2,"ho_ten":"AA","email":"aa@aa","vai_tro":1}
      let token = data.token;
      sessionStorage.setItem("user", JSON.stringify(user))
      sessionStorage.setItem("token", token)
      sessionStorage.setItem("expiresIn", expiresIn)
      this.thong_bao= "Đăng nhập thành công";
      //chuyển hướng
    })
  }
}
