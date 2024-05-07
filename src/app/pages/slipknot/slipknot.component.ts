import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-slipknot',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatGridListModule,
    CardComponent
  ],
  templateUrl: './slipknot.component.html',
  styleUrl: './slipknot.component.css'
})
export class SlipknotComponent {
  slipknotTitle = 'Slipknot';
  coreyName = 'Corey Taylor';
  coreyPosition = 'Vocalista';
  coreyImage = 'https://i.pinimg.com/originals/6f/68/13/6f6813410b3fb1cf4bb64afb5da8b3b1.jpg';
  sidName = 'Sid Wilson';
  sidPosition = 'Dj';
  sidImage = 'https://i.pinimg.com/originals/f6/20/7d/f6207d1aaefe1c2ea1ddf772aa26892a.jpg';
  jimName = 'Jim Root';
  jimPosition = 'Guitarrista 1';
  jimImage = 'https://i.pinimg.com/originals/71/cf/ab/71cfabdb0bfb9f0f666bd6e093fa8c02.jpg';
  shawnName = 'Shawn Crahan';
  shawnPosition = 'Percussionista 1';
  shawnImage = 'https://i.pinimg.com/originals/08/58/3e/08583ee235efe3a5b9384f74b95fcb20.jpg';
  mickName = 'Mick Thomson';
  mickPosition = 'Guitarrista 2';
  mickImage = 'https://i.pinimg.com/originals/73/2f/77/732f7739ccdcdc2785dc812e611607d9.jpg';
  jayName = 'Jay Wenberg';
  jayPosition = 'Baterista';
  jayImage = 'https://i.pinimg.com/originals/70/f8/cb/70f8cbcaeea5cee9ae3380da78041923.jpg';
  alessandroName = 'Alessandro Venturela';
  alessandroPosition = 'Baixista';
  alessandroImage = 'https://i.pinimg.com/originals/29/95/29/2995292e17f26fdd1ff471e14d8b0ed7.jpg';
  craigName = 'Craig Jones';
  craigPosition = 'Sampler';
  craigImage = 'https://i.pinimg.com/originals/08/d9/6a/08d96a7432067626f218e7a9882dae94.jpg';
  tortillaName = 'Michael(Tortilla Man)';
  tortillaPosition = 'Percussionista 2';
  tortillaImage = 'https://i.pinimg.com/originals/38/37/f9/3837f96f8266dcbfdf28db56de6e6512.jpg';

}
