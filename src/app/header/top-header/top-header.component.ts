import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
  cityName:string="Самара";
  phoneIcon:string="../../../assets/images/top-header/phone.png";
  phoneNumber:string="8 (800) 100 26 80";
  dayInfo:string="ЕЖЕДНЕВНО";
  scheduleInfo:string="10:00-20:00";
  socialLinks=[
    {
      name:"WhatsApp",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/whatsapp.svg",
    },
    {
      name:"Telegram",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/telegram.svg",
    },
    {
      name:"VK",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/vk.svg",
    },
    {
      name:"Viber",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/viber.svg",
    },
    {
      name:"YouTube",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/youtube.svg",
    },
    {
      name:"Instagram",
      linkAdress:"#",
      imgURL:"../../../assets/images/top-header/instagram.svg",
    }
  ];
}
