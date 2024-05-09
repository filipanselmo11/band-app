import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-soad',
  standalone: true,
  imports: [CardComponent, FooterComponent, ToolbarComponent, MatGridListModule],
  templateUrl: './soad.component.html',
  styleUrl: './soad.component.css'
})
export class SoadComponent {
  serjName = 'Serj Tankian';
  serjPosition = 'Vocalista';
  serjImage = 'https://i.pinimg.com/originals/d1/9a/da/d19adaea19f102e06ac9d0f55aa8c559.jpg';
  jonhName = 'Jonh Dolmayan';
  jonhPosition = 'Baterista';
  jonhImage = 'https://i.pinimg.com/originals/87/f9/63/87f9636073c2cc0f01a015279e5a3ce9.jpg';
  shavoName = 'Shavo Odadjian';
  shavoPosition = 'Baixista';
  shavoImage = 'https://i.pinimg.com/originals/03/83/1d/03831d22512bee248aeb32cb8abdc04d.jpg';
  daronName = 'Daron Malakian';
  daronPosition = 'Guitarrista';
  daronImage = 'https://i.pinimg.com/originals/55/31/c1/5531c19fc5bf7078f62b3af71ba6d0c4.jpg';
}
