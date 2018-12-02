import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem-vindo ao AluraPic';

  photos = [
    {
      url: 'http://animais.culturamix.com/blog/wp-content/gallery/animais-mais-inteligentes-do-mundo/5a-leao-africano.jpg',
      description: 'Leão Africano'
    },
    {
      url: 'https://www.sobiologia.com.br/figuras/Curiosidades/sentido_animais2.jpg',
      description: 'Hamster'
    }
  ];
}
