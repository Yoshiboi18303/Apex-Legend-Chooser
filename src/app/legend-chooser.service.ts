import { Injectable } from '@angular/core';
import { Legend } from './legend';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class LegendChooserService {
  legends: any = {
    offensive: [
      {
        name: "Ash",
        infoLink: "https://apexlegends.fandom.com/wiki/Ash",
      },
      {
        name: "Bangalore",
        infoLink: "https://apexlegends.fandom.com/wiki/Bangalore",
      },
      {
        name: "Fuse",
        infoLink: "https://apexlegends.fandom.com/wiki/Fuse",
      },
      {
        name: "Horizon",
        infoLink: "https://apexlegends.fandom.com/wiki/Horizon",
      },
      {
        name: "Mad Maggie",
        infoLink: "https://apexlegends.fandom.com/wiki/Mad_Maggie",
      },
      {
        name: "Mirage",
        infoLink: "https://apexlegends.fandom.com/wiki/Mirage",
      },
      {
        name: "Octane",
        infoLink: "https://apexlegends.fandom.com/wiki/Octane",
      },
      {
        name: "Revenant",
        infoLink: "https://apexlegends.fandom.com/wiki/Revenant",
      },
      {
        name: "Wraith",
        infoLink: "https://apexlegends.fandom.com/wiki/Wraith",
      }
    ],
    defensive: [
      {
        name: "Catalyst",
        infoLink: "https://apexlegends.fandom.com/wiki/Catalyst",
      },
      {
        name: "Caustic",
        infoLink: "https://apexlegends.fandom.com/wiki/Caustic",
      },
      {
        name: "Gibraltar",
        infoLink: "https://apexlegends.fandom.com/wiki/Gibraltar",
      },
      {
        name: "Newcastle",
        infoLink: "https://apexlegends.fandom.com/wiki/Newcastle",
      },
      {
        name: "Rampart",
        infoLink: "https://apexlegends.fandom.com/wiki/Rampart",
      },
      {
        name: "Wattson",
        infoLink: "https://apexlegends.fandom.com/wiki/Wattson",
      }
    ],
    recon: [
      {
        name: "Bloodhound",
        infoLink: "https://apexlegends.fandom.com/wiki/Bloodhound",
      },
      {
        name: "Crypto",
        infoLink: "https://apexlegends.fandom.com/wiki/Crypto",
      },
      {
        name: "Pathfinder",
        infoLink: "https://apexlegends.fandom.com/wiki/Pathfinder",
      },
      {
        name: "Seer",
        infoLink: "https://apexlegends.fandom.com/wiki/Seer",
      },
      {
        name: "Valkyrie",
        infoLink: "https://apexlegends.fandom.com/wiki/Valkyrie",
      },
      {
        name: "Vantage",
        infoLink: "https://apexlegends.fandom.com/wiki/Vantage",
      }
    ],
    support: [
      {
        name: "Lifeline",
        infoLink: "https://apexlegends.fandom.com/wiki/Lifeline",
      },
      {
        name: "Loba",
        infoLink: "https://apexlegends.fandom.com/wiki/Loba"
      }
    ]
  };

  origLegends: any = {
    offensive: [
      {
        name: "Ash",
        infoLink: "https://apexlegends.fandom.com/wiki/Ash",
      },
      {
        name: "Bangalore",
        infoLink: "https://apexlegends.fandom.com/wiki/Bangalore",
      },
      {
        name: "Fuse",
        infoLink: "https://apexlegends.fandom.com/wiki/Fuse",
      },
      {
        name: "Horizon",
        infoLink: "https://apexlegends.fandom.com/wiki/Horizon",
      },
      {
        name: "Mad Maggie",
        infoLink: "https://apexlegends.fandom.com/wiki/Mad_Maggie",
      },
      {
        name: "Mirage",
        infoLink: "https://apexlegends.fandom.com/wiki/Mirage",
      },
      {
        name: "Octane",
        infoLink: "https://apexlegends.fandom.com/wiki/Octane",
      },
      {
        name: "Revenant",
        infoLink: "https://apexlegends.fandom.com/wiki/Revenant",
      },
      {
        name: "Wraith",
        infoLink: "https://apexlegends.fandom.com/wiki/Wraith",
      }
    ],
    defensive: [
      {
        name: "Catalyst",
        infoLink: "https://apexlegends.fandom.com/wiki/Catalyst",
      },
      {
        name: "Caustic",
        infoLink: "https://apexlegends.fandom.com/wiki/Caustic",
      },
      {
        name: "Gibraltar",
        infoLink: "https://apexlegends.fandom.com/wiki/Gibraltar",
      },
      {
        name: "Newcastle",
        infoLink: "https://apexlegends.fandom.com/wiki/Newcastle",
      },
      {
        name: "Rampart",
        infoLink: "https://apexlegends.fandom.com/wiki/Rampart",
      },
      {
        name: "Wattson",
        infoLink: "https://apexlegends.fandom.com/wiki/Wattson",
      }
    ],
    recon: [
      {
        name: "Bloodhound",
        infoLink: "https://apexlegends.fandom.com/wiki/Bloodhound",
      },
      {
        name: "Crypto",
        infoLink: "https://apexlegends.fandom.com/wiki/Crypto",
      },
      {
        name: "Pathfinder",
        infoLink: "https://apexlegends.fandom.com/wiki/Pathfinder",
      },
      {
        name: "Seer",
        infoLink: "https://apexlegends.fandom.com/wiki/Seer",
      },
      {
        name: "Valkyrie",
        infoLink: "https://apexlegends.fandom.com/wiki/Valkyrie",
      },
      {
        name: "Vantage",
        infoLink: "https://apexlegends.fandom.com/wiki/Vantage",
      }
    ],
    support: [
      {
        name: "Lifeline",
        infoLink: "https://apexlegends.fandom.com/wiki/Lifeline",
      },
      {
        name: "Loba",
        infoLink: "https://apexlegends.fandom.com/wiki/Loba"
      }
    ]
  };

  public legendTypesAllowed: Array<Type> = [
    {
      type: "Offensive Legends",
      enabled: true,
    },
    {
      type: "Defensive Legends",
      enabled: true,
    },
    {
      type: "Recon Legends",
      enabled: true,
    },
    {
      type: "Support Legends",
      enabled: true,
    }
  ];

  public selectRandomLegend(): Legend | null {
    let type: any = Object.keys(this.legends)[Math.floor(Math.random() * Object.keys(this.legends).length)]
    let legends = this.legends[type];
    let legendValid = false;
    let legend: Legend | null = null;
    let time = 0;
    while(!legendValid && time < 100) {
      if(legends.length <= 0) {
        type = Object.keys(this.legends)[Math.floor(Math.random() * Object.keys(this.legends).length)]
        legends = this.legends[type];
      } else {
        legend = legends[Math.floor(Math.random() * legends.length)];
        legendValid = true;
      }
      time += 1
    }

    return legend;
  }
}
