import { Component,OnInit,ViewChild ,ElementRef} from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  subscribeTimer: number;
  timeLeft: number = 180;
  @ViewChild("left", { read: ElementRef, static: true }) leftDiv;
  @ViewChild("right", { read: ElementRef, static: true }) rightDiv;
  
  swapDivs() {
    let leftDiv = this.leftDiv.nativeElement;
    let rightDiv = this.rightDiv.nativeElement;

    leftDiv.insertBefore(rightDiv, leftDiv.childNodes[0]);
 }

  ngOnInit() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
    });
  }
}
