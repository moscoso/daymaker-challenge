import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    readonly SLIDE_TIMER_IN_MS = 10000;

    timerStarted = false;

    currentImageIndex = 0;
    images = [
        'assets/home/1.jpg',
        'assets/home/2.jpg',
        'assets/home/3.jpg',
        'assets/home/4.jpg',
    ];

    constructor() {}

    ngOnInit(): void {
        this.startTimer();
    }

    displayNextImage(): void {
        this.currentImageIndex = (this.currentImageIndex === this.images.length - 1) ? 0 : this.currentImageIndex + 1;
    }

    startTimer() {
        this.timerStarted = true;
        setInterval(() => { this.displayNextImage();  }, this.SLIDE_TIMER_IN_MS);
    }
}
