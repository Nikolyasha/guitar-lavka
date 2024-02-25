import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'main-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})
export class MainServicesComponent {

  servicesItems=[
    {
      title:'обучение',
      text:'В нашей гитарной мастерской мы оказываем полный спектр услуг по ремонту и обслуживанию музыкальных инструментов, в том числе и изготовление на заказ. ',
      backgroundImage:'../../../assets/images/index-page/main-services/service-1.png',
    },
    {
      title:'трейд ин',
      text:'В нашей гитарной мастерской мы оказываем полный спектр услуг по ремонту и обслуживанию музыкальных инструментов, в том числе и изготовление на заказ. ',
      backgroundImage:'../../../assets/images/index-page/main-services/service-2.png',
    },
    {
      title:'ремонт',
      text:'В нашей гитарной мастерской мы оказываем полный спектр услуг по ремонту и обслуживанию музыкальных инструментов, в том числе и изготовление на заказ. ',
      backgroundImage:'../../../assets/images/index-page/main-services/service-3.png',
    },
  ]

}
