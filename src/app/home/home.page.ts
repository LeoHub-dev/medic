import { Component } from '@angular/core';
import {
  faDog,
  faHospital,
  faAmbulance,
  faHeart,
  faUserMd, faMedkit, faHeartbeat, faReceipt, faPhone, faHandsHelping, faBiking
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  faReceipt = faReceipt;
  faPhone = faPhone;
  faHeartbeat = faHeartbeat;
  faDog = faDog;
  faHospital = faHospital;
  faAmbulance = faAmbulance;
  faHeart = faHeart;
  faUserMd = faUserMd;
  faMedkit = faMedkit;
  faHandsHelping = faHandsHelping;
  faBiking = faBiking;

  constructor() { }

}
