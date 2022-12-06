"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const Autobind = (_, _2, descriptor) => {
    const originalFn = descriptor.value;
    const adjDescriptor = {
        get() {
            const bindFn = originalFn.bind(this);
            return bindFn;
        },
    };
    return adjDescriptor;
};
class Nav {
    constructor() {
        this.nav = document.querySelector(".nav");
        this.navBtn = document.querySelector(".nav__mobile-btn");
        this.mobileNav = document.querySelector(".nav-mobile");
        this.xmark = document.querySelector(".nav-mobile__xmark");
        const mobileLinks = document.querySelectorAll(".mobile-link");
        let lastScroll = 0;
        this.navBtn.addEventListener("click", this.showNav);
        this.xmark.addEventListener("click", this.hideNav);
        window.addEventListener("scroll", () => {
            lastScroll = this.navBehavior(lastScroll);
        });
        mobileLinks.forEach((el) => {
            el.addEventListener("click", this.hideNav);
        });
    }
    showNav() {
        this.mobileNav.classList.add("show-nav");
        this.mobileNav.classList.remove("hide-nav");
    }
    hideNav() {
        this.mobileNav.classList.add("hide-nav");
        this.mobileNav.classList.remove("show-nav");
    }
    navBehavior(lastScroll) {
        const currentScroll = window.scrollY;
        if (currentScroll <= 0)
            this.nav.classList.remove("scroll-up");
        if (currentScroll > lastScroll &&
            !this.nav.classList.contains("scroll-down")) {
            this.nav.classList.remove("scroll-up");
            this.nav.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll &&
            this.nav.classList.contains("scroll-down")) {
            this.nav.classList.remove("scroll-down");
            this.nav.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
        return lastScroll;
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Nav.prototype, "showNav", null);
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Nav.prototype, "hideNav", null);
class Footer {
    constructor() {
        this.footYear = document.querySelector(".footer-year");
        this.dynamicYear();
    }
    dynamicYear() {
        const year = new Date().getFullYear();
        this.footYear.textContent = year.toString();
    }
}
new Nav();
new Footer();
