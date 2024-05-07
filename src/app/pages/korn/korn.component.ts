import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CardComponent } from '../../components/card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-korn',
  standalone: true,
  imports: [ToolbarComponent, CardComponent, MatGridListModule],
  templateUrl: './korn.component.html',
  styleUrl: './korn.component.css'
})
export class KornComponent {
  jonanthanName = 'Jonanthan Daves';
  jonanthanPosition = 'Vocalista';
  jonanthanImage = 'https://i.pinimg.com/originals/09/65/f4/0965f4e405f00a01b118b80d73257cf4.jpg';
  fieldName = 'Field';
  fieldPosition = 'Baixista';
  fieldImage = 'https://i.pinimg.com/originals/5c/1c/65/5c1c65ee9418ff4f35b937f7af305078.jpg';
  rayName = 'Ray Luzier';
  rayPosition = 'Baterista';
  rayImage = 'https://i.pinimg.com/originals/c0/14/54/c0145426f91689ec1a70246440154c23.jpg';
  bryanName = 'Bryan Head';
  bryanPosition = 'Guitarrista 1';
  bryanImage = 'https://i.pinimg.com/originals/6c/46/65/6c4665d32467f243829f3841cc8bf5ad.jpg';
  jamesName = 'James Munky Shaffer';
  jamesPosition = 'Guitarrista 2';
  jamesImage = 'https://i.pinimg.com/originals/e7/ff/66/e7ff664b4cf8c3f4acf30e025aa8045b.jpg';
}
