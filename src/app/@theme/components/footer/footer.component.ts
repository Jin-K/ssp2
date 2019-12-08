import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://www.instagram.com/angelito90s" target="_blank">Jin-K</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/Jin-K" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/AngEl1601" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/AngelMu33404483" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/angel-muñoz-a24175109" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
