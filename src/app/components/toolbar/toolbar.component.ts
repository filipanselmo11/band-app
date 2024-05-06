import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() toolbarTitle!: string;
}
