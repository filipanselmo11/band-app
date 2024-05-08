import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, MatButtonModule, MatGridListModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  homeToolbarTitle = 'Band App';

  slipknotPage() {
    this.router.navigateByUrl('slipknot');
  }

  linkinParkPage() {
    this.router.navigateByUrl('linkin-park');
  }

  soadPage() {
    this.router.navigateByUrl('soad');
  }

  kornPage() {
    this.router.navigateByUrl('korn');
  }

}
