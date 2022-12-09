import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponComboChooserService {
  weapons: Array<string> = [
    "Havoc",
    "VK-49 Flatline",
    "Hemlok",
    "R-301",
    "Alternator",
    "Prowler",
    "R-99",
    "Volt",
    "C.A.R",
    "Devotion",
    "L-Star",
    "M600 Spitfire",
    "G7 Scout",
    "Triple Take",
    "30-30 Repeater",
    "Charge Rifle",
    "Longbow DMR",
    "Sentinel",
    "EVA-8 Auto",
    "Mastiff",
    "Mozambique",
    "Peacekeeper",
    "P2020",
    "Wingman"
  ]

  specialWeapons: Array<string> = [
    "Rampage",
    "Bocek",
    "Kraber",
    "RE-45"
  ]

  constructor() { }

  generateWeaponCombo(specialWeaponsAllowed: boolean): Array<string> {
    let allWeapons = []

    if(specialWeaponsAllowed) {
      for(const weapon of this.specialWeapons) {
        allWeapons.push(weapon)
      }
    }

    for(const weapon of this.weapons) {
      allWeapons.push(weapon)
    }

    let timesRun = 0;
    let weaponCombo: Array<string> = []

    while(timesRun < 2) {
      let selected = allWeapons[Math.floor(Math.random() * allWeapons.length)] 
      weaponCombo.push(selected)
      allWeapons.splice(allWeapons.findIndex(value => value == selected), 1)
      timesRun += 1
    }

    return weaponCombo;
  }
}
