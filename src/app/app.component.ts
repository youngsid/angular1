import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThanhmenuComponent } from './thanhmenu/thanhmenu.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , ThanhmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asm1-full';
  ho_ten = "Tuấn Nhi";
  sinh_vien = {
    ho_ten: "Nguyễn Hoàng Tuấn Nhi",
    tuoi: 20
  }
}
