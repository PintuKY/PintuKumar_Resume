import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/Profile.pdf';  // Path to your PDF in the assets folder
    link.download = 'Profile.pdf';     // The name to give the downloaded PDF
    link.click();
  }
}
