import { Component } from '@angular/core';
import { MatSelect, MatFormField, MatLabel, MatOption } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface CardList {
  id: number;
  title: string;
  img: string;
  price: string;
  oldprice?: string;
  choice?: boolean;
  link: string;
}

@Component({
  selector: 'app-card',
  imports: [MatSelect, MatFormField, MatLabel, MatOption, MatIcon, RouterLink],
  template: `
    <section class="mt-7">
      <div class="bg-[#32373A] text-white p-3">
        <h4 class="font-bold">已選購區</h4>
      </div>
      <div class="p-4 border border-[E5E5E5]"></div>

      <div class="grid grid-cols-4 gap-5 p-7 my-7 border border-[#e5e5e5]">
        @for (item of cardItems; track item.id) {
          @if (item.choice) {
            <div class="p-2 flex flex-col border border-[#e5e5e5]">
              <a [routerLink]="item.link"
                ><img [src]="item.img" [alt]="item.title" class="aspect-square"
              /></a>
              <div class="flex-grow">
                <h3 class="line-clamp-2 mt-2">{{ item.title }}</h3>
              </div>

              <div class="text-right flex flex-col mt-2">
                <span class="text-gray-400 line-through">{{ item.oldprice }}</span>
                <span class="text-red-700 font-bold text-base">{{ item.price }}</span>
              </div>

              <div class="flex flex-col gap-2 text-[#808080] mt-2">
                <button class="border border-[#e5e5e5] px-2 py-1">
                  <div class="flex items-center justify-between">
                    <p class="font-medium">請選擇</p>
                    <mat-icon>arrow_drop_down</mat-icon>
                  </div>
                </button>
                <button class="border border-[#e5e5e5] px-2 py-1">
                  <div class="flex items-center justify-between">
                    <mat-icon>remove</mat-icon>
                    <p class="font-medium text-black">1</p>
                    <mat-icon class="text-red-700">add</mat-icon>
                  </div>
                </button>
                <button class="border border-[#c14847] text-[#C14847] px-2 py-1">選購</button>
              </div>
            </div>
          } @else {
            <div class="p-2 flex flex-col border border-[#e5e5e5]">
              <a [routerLink]="item.link"
                ><img [src]="item.img" [alt]="item.title" class="aspect-square"
              /></a>
              <div class="flex-grow">
                <h3 class="line-clamp-2 mt-2">{{ item.title }}</h3>
              </div>
              <div class="grow">
                <div class="text-right flex flex-col mt-2">
                  <span class="text-gray-400 line-through">{{ item.oldprice }}</span>
                  <span class="text-red-700 font-bold text-base">{{ item.price }}</span>
                </div>
              </div>
              <div class="flex flex-col gap-2 text-[#808080] mt-2">
                <button class="border border-[#e5e5e5] px-2 py-1 invisible">
                  <div class="flex items-center justify-between">
                    <p class="font-medium">請選擇</p>
                    <mat-icon>arrow_drop_down</mat-icon>
                  </div>
                </button>
                <button class="border border-[#e5e5e5] px-2 py-1">
                  <div class="flex items-center justify-between">
                    <mat-icon>remove</mat-icon>
                    <p class="font-medium text-black">1</p>
                    <mat-icon class="text-red-700">add</mat-icon>
                  </div>
                </button>
                <button class="border border-[#c14847] text-[#C14847] px-2 py-1">選購</button>
              </div>
            </div>
          }
        }
      </div>

      <div class="bg-[#32373A] text-white p-3">
        <h4 class="font-bold">已選購區</h4>
      </div>
      <div class="p-4 border border-[E5E5E5] mb-12"></div>
    </section>
  `,
  styles: ``,
})
export class Card {
  cardItems: CardList[] = [
    {
      id: 1,
      title:
        '壁貼式衛生紙盒 (節省空間)紙巾盒 衛生紙盒 免釘 免打孔 壁掛 面紙盒 可倒掛 黏貼式 衛生紙',
      img: '/tissue.jpg',
      price: '$299 ~ 1,490',
      oldprice: '$ 299 ~ 1,794',
      choice: true,
      link: '/tissue',
    },
    {
      id: 2,
      title:
        '床邊收納袋 (沙發床邊隨手取物) 免安裝 多格內袋 置物袋 沙發收納袋 手機收納 筆電 遙控器收納 加厚毛氈 懶人床邊收納',
      img: '/bedbag.jpg',
      price: '$385',
      oldprice: '$ 290',
      choice: true,
      link: '/bedbag',
    },
    {
      id: 3,
      title:
        '吹風機收納套 (免釘免貼膠) 整線 萬用款 吹風機置物架 衛浴收納 戴森 收納架 免鑽孔 吹風機架',
      img: '/fan.jpg',
      price: '$310',
      oldprice: '$ 220',
      link: '/fan',
    },
    {
      id: 4,
      title: '風扇清潔刷(2入)',
      img: '/fanclean.jpg',
      price: '$ 149',
      oldprice: '$ 280',
      link: '/fanclean',
    },
    {
      id: 5,
      title: '壁貼式衛生紙盒(節省空間)紙巾盒 衛生紙盒 免釘 免打孔 壁掛 面紙盒 可倒掛 黏貼式 衛生紙',
      img: '/tissue.jpg',
      price: '$299 ~ 1,490',
      oldprice: '$ 299 ~ 1,794',
      choice: true,
      link: '/tissue',
    },
    {
      id: 6,
      title:
        '床邊收納袋 (沙發床邊隨手取物) 免安裝 多格內袋 置物袋 沙發收納袋 手機收納 筆電 遙控器收納 加厚毛氈 懶人床邊收納',
      img: '/bedbag.jpg',
      price: '$385',
      oldprice: '$ 290',
      choice: true,
      link: '/bedbag',
    },
    {
      id: 7,
      title:
        '吹風機收納套 (免釘免貼膠) 整線 萬用款 吹風機置物架 衛浴收納 戴森 收納架 免鑽孔 吹風機架',
      img: '/fan.jpg',
      price: '$310',
      oldprice: '$ 220',
      link: '/fan',
    },
    {
      id: 8,
      title: '風扇清潔刷(2入)',
      img: '/fanclean.jpg',
      price: '$ 149',
      oldprice: '$ 280',
      link: '/fanclean',
    },
    {
      id: 9,
      title: '壁貼式衛生紙盒(節省空間)紙巾盒 衛生紙盒 免釘 免打孔 壁掛 面紙盒 可倒掛 黏貼式 衛生紙',
      img: '/tissue.jpg',
      price: '$299 ~ 1,490',
      oldprice: '$ 299 ~ 1,794',
      choice: true,
      link: '/tissue',
    },
    {
      id: 10,
      title:
        '床邊收納袋 (沙發床邊隨手取物) 免安裝 多格內袋 置物袋 沙發收納袋 手機收納 筆電 遙控器收納 加厚毛氈 懶人床邊收納',
      img: '/bedbag.jpg',
      price: '$385',
      oldprice: '$ 290',
      choice: true,
      link: '/bedbag',
    },
    {
      id: 11,
      title:
        '吹風機收納套 (免釘免貼膠) 整線 萬用款 吹風機置物架 衛浴收納 戴森 收納架 免鑽孔 吹風機架',
      img: '/fan.jpg',
      price: '$310',
      oldprice: '$ 220',
      link: '/fan',
    },
    {
      id: 12,
      title: '風扇清潔刷(2入)',
      img: '/fanclean.jpg',
      price: '$ 149',
      oldprice: '$ 280',
      link: '/fanclean',
    },
    {
      id: 13,
      title: '壁貼式衛生紙盒(節省空間)紙巾盒 衛生紙盒 免釘 免打孔 壁掛 面紙盒 可倒掛 黏貼式 衛生紙',
      img: '/tissue.jpg',
      price: '$299 ~ 1,490',
      oldprice: '$ 299 ~ 1,794',
      choice: true,
      link: '/tissue',
    },
    {
      id: 14,
      title:
        '床邊收納袋 (沙發床邊隨手取物) 免安裝 多格內袋 置物袋 沙發收納袋 手機收納 筆電 遙控器收納 加厚毛氈 懶人床邊收納',
      img: '/bedbag.jpg',
      price: '$385',
      oldprice: '$ 290',
      choice: true,
      link: '/bedbag',
    },
    {
      id: 15,
      title:
        '吹風機收納套 (免釘免貼膠) 整線 萬用款 吹風機置物架 衛浴收納 戴森 收納架 免鑽孔 吹風機架',
      img: '/fan.jpg',
      price: '$310',
      oldprice: '$ 220',
      link: '/fan',
    },
    {
      id: 16,
      title: '風扇清潔刷(2入)',
      img: '/fanclean.jpg',
      price: '$ 149',
      oldprice: '$ 280',
      link: '/fanclean',
    },
  ];
}
