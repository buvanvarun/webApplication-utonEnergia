import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  sections;
  visible = false;
  index: number = 0;
  animationDuration = 1700;
  lastTime = 0;
  event;
  name: string = '';
  email: string = '';
  password: string = '';
  visibleBtn = false;
  constructor() {}

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section');
    this.sections.forEach((section, i) => {
      if (i === 0) {
        section.querySelector('.section-wrapper').classList.add('show');
      }
    });
    this.scrollSection();
    this.keyDown();
  }

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
          if (this.index >= 2) return;
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
          if (this.index >= 2) {
            this.onSignUp();
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
  onSignUp = () => {
    // backend part of signup can go here
    console.log(this.email, this.name, this.password);
  };
}
