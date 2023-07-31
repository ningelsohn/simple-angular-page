import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  /* Collapses the expanded NavBar on small displays
   * 
   * Bootstrap itself does not collapse the navbar automatically when a navItem is clicked
   * Adding bootstraps toggle-logic however, results in toggling the navbar on every click (not convenient, toggle state is not clear)
   */
  public onNavItemClick() {

    // Check if the navBar is currently expanded
    if(this.toggleButton!.nativeElement.ariaExpanded == 'true'){
      
      // Only then trigger toggle Button to collapse
      this.toggleButton!.nativeElement.click();

      // solution above seems to not work with firefox - attempt to get it working with getting the button a different way failed!
      // let button: HTMLElement = document.querySelector('.navbar-toggler')!;
      // button.click();
    }
  }

}
