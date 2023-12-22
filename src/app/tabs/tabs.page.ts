import { Component } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController
  ) {}

  navToStudent() {
    this.navCtrl.navigateForward('/add-etudiant');
  }
}
