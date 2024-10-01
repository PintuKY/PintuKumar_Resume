import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'jquery';  // Ensure jQuery is imported
declare var Waypoint: any;

@Component({
  selector: 'app-my-resume-page',
  templateUrl: './my-resume-page.component.html',
  styleUrls: ['./my-resume-page.component.css']
})
export class MyResumePageComponent implements OnInit {

  constructor() { }
  currentProgress: number = 75.8;
  currentProgress1:number =68.5;
  currentProgress2:number =63.8;
  currentProgress3:number =62.4;
  ngOnInit(): void {


    const options = {
      strings: ["Web Apps", "HTML CSS JS JQuery AJAX BOOTSTRAP", "PHP(Laravel) VUE.JS API INTEGRATION", ".NET C# WPF", "MYSQL MS SQL", "GIT LINUX HOMESTEAD VM BOX"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    };
    const typed = new Typed('.typed-words', options);

      // Logic for dynamically updating progress bars if necessary
      // if (this.currentProgress > 100) {
      //   this.currentProgress = 100;
      // } else if (this.currentProgress < 0) {
      //   this.currentProgress = 0;
      // }
      const waypoint = new Waypoint({
        element: document.querySelector('.causes-progress') as HTMLElement,
        handler: (direction: string) => {
          if (direction === 'down') {
            // Animate progress when the section is scrolled into view
            $('.progress-bar').each((index, element) => {
              const progressBar = $(element);
              const targetValue = progressBar.attr('aria-valuenow');
              progressBar.css('width', targetValue + '%');
            });
          }
        },
        offset: '75%' // Trigger when the progress bar is 75% in view
      });

      if (this.currentProgress1 > 100) {
        this.currentProgress1 = 100;
      } else if (this.currentProgress1 < 0) {
        this.currentProgress1 = 0;
      }  
      if (this.currentProgress2 > 100) {
        this.currentProgress2 = 100;
      } else if (this.currentProgress2 < 0) {
        this.currentProgress2 = 0;
      }  
      if (this.currentProgress2 > 100) {
        this.currentProgress2 = 100;
      } else if (this.currentProgress2 < 0) {
        this.currentProgress2 = 0;
      }

  // Causes progress
  // $('.causes-progress').waypoint(function () {
  //   $('.progress .progress-bar').each(function () {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, {offset: '100%'});
  
  // //education list 
  // $(document).ready(function() {
  // $('#education-list').on('click',function(){
    
  //   //document.getElementsByClassName("progress-bar").innerHTML = "";
  //   //document.getElementsByClassName("progress-bar").innerHTML = "";
  // });
  // });
  }

}
