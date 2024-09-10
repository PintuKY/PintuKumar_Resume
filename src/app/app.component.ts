import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { data } from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit {
  title = 'Pintukumar-resume';
  currentProgress: number = 50;
  ipAddress: string = ''  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadUserInfo();
  }
  loadUserInfo(){
   
    this.http
    .get<{ ip: string }>('https://jsonip.com')
    .pipe(
      switchMap((value:any) => {
        this.ipAddress = value.ip;  
        let url =`https://api.ipstack.com/${this.ipAddress}?access_key=969b80f4d1f2badf41ff3ebb7feda531`;
        return this.http.get(url);
      })
    )
    .subscribe(
      (data) => {
        //this.ipAddress = data.ip;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching IP address', error);
      }
    );
  }
}
