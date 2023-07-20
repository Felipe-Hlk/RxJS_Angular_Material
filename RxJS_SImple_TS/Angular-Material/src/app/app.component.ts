import { Component, ViewChild } from '@angular/core'
import {BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public smallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver){ }

  ngAfterContentInit(): void{
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {                 //res = retorno
        if (res.matches){
          this.smallScreen = true;
        }else{
          this.smallScreen = false;
        }
      }
    })
  }


  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side';
  }

}
