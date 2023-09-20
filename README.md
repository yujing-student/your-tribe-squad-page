> Fork deze leertaak en ga aan de slag, de instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

## Squidpage 1D

hier vind je onze squad page voor klas 1d
https://yujing-student.github.io/your-tribe-squad-page/

## Uitleg
Wanneer je de site bezoekt zie je een lijstje mt allemaal vakjes.
Die vakjes Hebben allemaal en profilfoto van de student/ een linke naar hun github page en een linkje die naar hun visite kaartje leid

VOORBEELD<br>


<img src="https://github.com/yujing-student/your-tribe-squad-page/assets/144009667/5e3df269-b735-441a-bd18-c07589363c9a" width="500px">

HTML code van een vakje

``` html
<section class="grid__tile">
        <img data-birthday="" class="grid__birthdayimage hidden" src="assets/birthday.png" alt="Birthday cake!">
        <img class="grid__image" src="https://avatars.githubusercontent.com/u/100352887?v=4" alt="Github profile picture of Yu Jing.">
        <h1 class="grid__name">Yu Jing</h1>
        <div class="grid__socials">
          <a href="https://github.com/yujing-student" target="_blank"><i class="fa-brands fa-github" alt="Github logo linking to Yu Jing's profile."></i></a>
        </div>
        <div>
          <a href="https://yujing-student.github.io/your-tribe-profile-card/" target="_blank"><img src="assets/emojibutton.png" class="grid__profilecard" alt="Button shaped like a pointing finger, linking to Yu Jing's profile card."></a>
        </div>
      </section>
```

```<span>```

## Responsive for every device
Wij vinden het ook belangrijk dat je op elk apparaat onze squid page kunt bekijken daarom hebben wij met een media query ervoor gezorgd dat deze squidpage ook geschikt is voor telefoon en tablet
TABLET

<img src="https://github.com/yujing-student/your-tribe-squad-page/assets/144009667/c9034293-226e-4894-82b5-f93ed3689047" width="500px">



CODE TABLET

``` html
/* Media Query Tablet */
/* Kijkt naar de min en max width van de device, en geeft dan deze specifieke properties mee */
/* Only screen betekent dat hij alleen applied op een device met de type 'screen' en niet naar een andere type, bijv. print. */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
    .grid__container {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
 }
```

CODE MOBILE

``` html
  /*Shrinking for mobile*/
 @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }

    .content {
      height: 30vh;
    }
    
    h1 {
      font-size: 24px;
    }
}
```
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



