import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { City } from 'src/app/shared/models/City';
import { Weather } from 'src/app/shared/models/Weather';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent implements OnInit {

  @Input() city: City;
  @Input() weatherList: Weather[];

  constructor() { }

  ngOnInit() {
  }

  getImgUrlForIcon(iconName: string): string {
    return `${environment.openWeatherMapIconsUrl}/${iconName}@2x.png`;
  }

}
