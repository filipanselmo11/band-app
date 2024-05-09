import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-linkin-park',
  standalone: true,
  imports: [FooterComponent, ToolbarComponent, MatGridListModule, CardComponent],
  templateUrl: './linkin-park.component.html',
  styleUrl: './linkin-park.component.css'
})
export class LinkinParkComponent {
  chesterName = 'Chester Bennington';
  chesterPosition = 'Vocalista';
  chesterImage = 'https://i.pinimg.com/originals/3d/62/80/3d6280cbd2ebcf5e6e7d10d4f6345b79.jpg';
  mikeName = 'Mike Shinoda';
  mikePosition = 'Vocalista 2';
  mikeImage = 'https://i.pinimg.com/originals/be/e3/0f/bee30ffed74e7e8890404cf6d00e1321.jpg';
  davidName = 'David Farrel';
  davidPosition = 'Baixista';
  davidImage = 'https://i.pinimg.com/originals/42/1b/88/421b8863d094be672b162a263ff8993f.jpg';
  joeName = 'Joe Han';
  joePosition = 'Dj';
  joeImage = 'https://i.pinimg.com/originals/f1/79/05/f17905755812759d2556d269de13b8e3.jpg';
  bradName = 'Brad Delson';
  bradPosition = 'Guitarrista';
  bradImage = 'https://i.pinimg.com/originals/24/b5/93/24b5933ddd12eaf24d585531dd7fd0f8.jpg';
  robName = 'Rob Bourdon';
  robPosition = 'Baterista';
  robImage = 'https://i.pinimg.com/originals/14/5e/7d/145e7d65bc24ea30e98b287f36d6e053.jpg';
}
