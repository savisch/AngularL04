import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'Scott Gasparick';
      city = 'Tulsa, OK';
      tagline = 'Make time for sleep; then coffee.';
      aboutMe = 'I was born in the Upper Peninsula of Michigan, moved around the country for a number of years, and am currently settled in Tulsa with my wife Marti. I have worked as an auto mechanic, bicycle repairman, luthier, music instructor, carpenter/painter/drywaller/electrician/plumber, professional musician, yoga teacher/kettlebell instructor/nutrition coach, and web developer/software engineer.'
    }