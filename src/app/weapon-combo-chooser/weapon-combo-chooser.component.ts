import { Component, OnInit } from '@angular/core';
import { WeaponComboChooserService } from '../weapon-combo-chooser.service';

@Component({
  selector: 'app-weapon-combo-chooser',
  templateUrl: './weapon-combo-chooser.component.html',
  styleUrls: ['./weapon-combo-chooser.component.css']
})
export class WeaponComboChooserComponent implements OnInit {
  specialWeaponsAllowed = false;
  weaponCombo: Array<string> = []

  constructor(public weaponComboChooserService: WeaponComboChooserService) {}

  ngOnInit(): void {
    
  }

  generateCombo(): void {
    this.weaponCombo = this.weaponComboChooserService.generateWeaponCombo(this.specialWeaponsAllowed);
  }
}
