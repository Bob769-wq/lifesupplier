import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CdkStepLabel } from '@angular/cdk/stepper';
import { RouterLink } from '@angular/router';
import { Card } from './card';

@Component({
  selector: 'app-hero-section',
  imports: [MatIcon, CdkStepLabel, RouterLink, Card],
  template: `
    <section class="flex flex-col">
      <div class="flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
          <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z"
          />
        </svg>
        <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
        <span>促銷活動</span>
        <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
        <span>消費滿1500元現折100元</span>
      </div>
      <div class="mt-4"><img src="/mainpic.jpg" alt="hero-section" /></div>
      <div class="p-8">
        <h1 class="text-3xl font-bold">消費滿1500元現折100元</h1>
        <div class="mt-14">
          <h2 class="text-lg font-bold">●全館滿750一律免運</h2>
          <p class="mt-4">超商取貨70元，一般宅配70元，宅配貨到付款100元，消費滿750元一律免運費!!</p>
        </div>
        <div class="mt-14">
          <h2 class="text-lg font-bold">●滿額優惠活動</h2>
          <p class="mt-4">滿額優惠活動：消費滿1500元現折100元！</p>
          <p class="mt-4">滿2000再送精美贈品！</p>
        </div>
      </div>
    </section>

<!--    TODO: 框框有陰影-->
    <div
      class="flex justify-between items-center p-7 border border-[#E5E5E5] bg-white sticky top-0"
    >
      <div class="flex flex-col justify-center gap-1">
<!--        TODO: 促銷跟後面的內容應該有間隔-->
        <p>
          <span class="text-white inline-block px-1 bg-[#E96759]">促銷</span>再＄<span
            class="text-red-700 font-bold"
            >1500</span
          >
          元，抵＄ <span class="text-red-700 font-bold">100</span> 元
        </p>
        <a class="block" routerLink="/more"
          ><div class="flex items-baseline">
            <span>更多優惠條件，請查閱詳情</span
            ><mat-icon class="text-[10px]">arrow_forward_ios</mat-icon>
          </div>
        </a>
      </div>
      <div class="flex items-center gap-2 ">
        <p>已選購 ＄ <span class="text-red-700">0</span> 元</p>
        <button
          disabled
          class="border border-[#E5E5E5] disabled:bg-[#FAFAFA] disabled:text-[#CCCCCC] px-3 py-2 rounded"
        >
          尚未符合
        </button>
      </div>
    </div>
    <app-card />
  `,
  styles: ``,
})
export class HeroSection {}
