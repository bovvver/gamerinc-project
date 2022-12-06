const Autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
  const originalFn = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    get() {
      const bindFn = originalFn.bind(this);
      return bindFn;
    },
  };
  return adjDescriptor;
};

class Nav {
  nav: HTMLDivElement;
  navBtn: HTMLElement;
  mobileNav: HTMLDivElement;
  xmark: HTMLElement;

  constructor() {
    this.nav = document.querySelector(".nav")!;
    this.navBtn = document.querySelector(".nav__mobile-btn")!;
    this.mobileNav = document.querySelector(".nav-mobile")!;
    this.xmark = document.querySelector(".nav-mobile__xmark")!;
    const mobileLinks = document.querySelectorAll(".mobile-link")!;
    let lastScroll = 0;

    this.navBtn.addEventListener("click", this.showNav);
    this.xmark.addEventListener("click", this.hideNav);
    window.addEventListener("scroll", () => {
      lastScroll = this.navBehavior(lastScroll);
    });

    mobileLinks.forEach((el: Element) => {
      el.addEventListener("click", this.hideNav);
    });
  }

  @Autobind
  showNav() {
    this.mobileNav.classList.add("show-nav");
    this.mobileNav.classList.remove("hide-nav");
  }

  @Autobind
  hideNav() {
    this.mobileNav.classList.add("hide-nav");
    this.mobileNav.classList.remove("show-nav");
  }

  navBehavior(lastScroll: number) {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) this.nav.classList.remove("scroll-up");

    if (
      currentScroll > lastScroll &&
      !this.nav.classList.contains("scroll-down")
    ) {
      this.nav.classList.remove("scroll-up");
      this.nav.classList.add("scroll-down");
    }

    if (
      currentScroll < lastScroll &&
      this.nav.classList.contains("scroll-down")
    ) {
      this.nav.classList.remove("scroll-down");
      this.nav.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
    return lastScroll;
  }
}

class Footer {
  footYear: HTMLSpanElement;

  constructor() {
    this.footYear = document.querySelector(".footer-year")!;

    this.dynamicYear();
  }

  dynamicYear() {
    const year = new Date().getFullYear();

    this.footYear.textContent = year.toString();
  }
}
new Nav();
new Footer();
