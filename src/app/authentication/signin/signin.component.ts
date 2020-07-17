import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  sections;
  visible = false;
  index: number = 0;
  animationDuration = 1700;
  lastTime = 0;
  event;
  email: string = '';
  password: string = '';
  visibleBtn = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section');

    // this.init();
    this.scrollSection();
    this.keyDown();
  }
  init = () => {
    this.sections.forEach((section, i) => {
      if (i === 0) {
        section.querySelector('.section-wrapper').classList.add('show');
      }
    });
  };

  onVisible = () => {
    this.visible = this.visible === true ? false : true;
    this.visibleBtn = this.visibleBtn === true ? false : true;
  };

  toggleSection = (index, state) => {
    if (state === 'show') {
      this.sections.forEach((section, i) => {
        if (i === index) {
          section.querySelector('.section-wrapper').classList.add('show');
        }
      });
    } else {
      this.sections.forEach((section, i) => {
        if (i === index) {
          section.querySelector('.section-wrapper').classList.remove('show');
        }
      });
    }
  };

  scrollSection = () => {
    window.addEventListener(
      'wheel',
      (e) => {
        const delta = e.deltaY;
        const currentTime = new Date().getTime();

        if (currentTime - this.lastTime < this.animationDuration) {
          e.preventDefault();
          return;
        }
        if (delta > 0) {
          // down wheel
          if (this.index >= 1) return;
          this.toggleSection(this.index, 'hide');
          this.index++;
          this.sections.forEach((section, i) => {
            if (i === this.index) {
              this.toggleSection(i, 'show');
              section.scrollIntoView({ behaviour: 'smooth' });
            }
          });
        } else {
          // up wheel
          if (this.index < 1) return;
          this.toggleSection(this.index, 'hide');
          this.index--;
          this.sections.forEach((section, i) => {
            if (i === this.index) {
              this.toggleSection(i, 'show');
              section.scrollIntoView({ behaviour: 'smooth' });
            }
          });
        }
        this.lastTime = currentTime;
      },
      { passive: false }
    );
  };

  keyDown = () => {
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.keyCode === 13) {
          const currentTime = new Date().getTime();

          if (currentTime - this.lastTime < this.animationDuration) {
            e.preventDefault();
            return;
          }
          if (this.index >= 1) {
            this.onSignIn();
            return;
          }

          this.toggleSection(this.index, 'hide');
          this.index++;
          this.sections.forEach((section, i) => {
            if (i === this.index) {
              this.toggleSection(i, 'show');
              section.scrollIntoView({ behaviour: 'smooth' });
            }
          });

          this.lastTime = currentTime;
        }
      },
      { passive: false }
    );
  };
  onSignIn = () => {
    // backend part of signin does here
    console.log(this.email, this.password);
    this.router.navigate(['/main']);
  };
}
