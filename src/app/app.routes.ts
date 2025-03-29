import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpTrongLoaiComponent } from './sp-trong-loai/sp-trong-loai.component';
import { SpComponent } from './sp/sp.component';
import { CartComponent } from './cart/cart.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { CartService } from './cart.service';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Trang chủ' },
    { path: 'dang-ky', component: DangKyComponent, title: 'Đăng ký thành viên' },
    { path: 'dang-nhap', component: DangNhapComponent, title: 'Đăng nhập' },
    { path: 'lien-he', component: LienHeComponent, title: 'Liên hệ' },
    { path: 'sptrongloai/:id', component: SpTrongLoaiComponent},
    { path: 'sp/:id', component: SpComponent},
    { path:'gio-hang', component:CartComponent, title:"Giỏ hàng"},
    { path: 'dang-ky', component:DangKyComponent, title: "Đăng ký thành viên"},
    { path: 'dang-nhap', component:DangNhapComponent, title: "Đăng nhập"},
    { path: 'thanh-toan', component:ThanhToanComponent, title: "Thanh toán"},
    { path: '**', component: NotFoundComponent, title: 'Không tìm thấy' },
];
