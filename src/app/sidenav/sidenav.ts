import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  imports: [MatIcon],
  template: `
    <section>
      <div class="flex items-center justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon>turn_left</mat-icon>
          <h3 class="mt-2 font-bold">首頁</h3>
        </div>
        <mat-icon class="invisible">home</mat-icon>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">臥室/客廳</h3>
        </div>
        <mat-icon>arrow_right</mat-icon>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">廚房/餐廳</h3>
        </div>
        <mat-icon>arrow_right</mat-icon>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">衛浴/陽台</h3>
        </div>
        <mat-icon>arrow_right</mat-icon>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">旅行/戶外</h3>
        </div>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">多件優惠區</h3>
        </div>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">home</mat-icon>
          <h3 class="mt-2 font-bold">全部商品</h3>
        </div>
      </div>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon
            class="text-base
"
            >sell</mat-icon
          >
          <h3 class="mt-2 font-bold">促銷活動</h3>
        </div>
        <mat-icon>arrow_drop_down</mat-icon>
      </div>
      <ul class="flex items-end justify-between cursor-pointer">
        <div class="flex items-end">
          <mat-icon class="invisible">sell</mat-icon>
          <div class="flex items-center text-red-700">
            <mat-icon>arrow_right</mat-icon>

            <span class="text-xs"> 消費滿1500元現折100元</span>
          </div>
        </div>
      </ul>
      <div class="flex items-end justify-between hover:text-red-700 cursor-pointer">
        <div class="flex items-end">
          <mat-icon
            class="text-base
"
            >home</mat-icon
          >
          <h3 class="mt-2 font-bold">關於</h3>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Sidenav {}
