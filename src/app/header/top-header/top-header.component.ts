import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinks} from "../../common/social-links/social-links";

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
  socialLinksItems=SocialLinks;
}
