import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LefSideComponent } from "./lef-side/lef-side.component";
import { RightSideComponent } from "./right-side/right-side.component";

@Component({
  selector: 'main-footer',
  standalone: true,
  imports: [CommonModule,LefSideComponent,RightSideComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
