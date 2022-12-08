import { Component, OnInit } from '@angular/core';
import { LegendChooserService } from '../legend-chooser.service';


@Component({
  selector: 'app-legend-chooser',
  templateUrl: './legend-chooser.component.html',
  styleUrls: ['./legend-chooser.component.css']
})
export class LegendChooserComponent implements OnInit {
  constructor(public legendChooserService: LegendChooserService) {}

  amountEnabled = this.legendChooserService.legendTypesAllowed.length;
  selectedLegend: any = null

  ngOnInit(): void {
    
  }

  selectLegend() {
    let legend = this.legendChooserService.selectRandomLegend();
    this.selectedLegend = legend;
  }

  switchEnabled(legendType: any) {
    legendType.enabled = !legendType.enabled;
    let type = legendType.type.split(" ")[0].toLowerCase();

    if(!legendType.enabled) {
      this.amountEnabled -= 1;
      this.legendChooserService.legends[type] = []
    } else {
      this.amountEnabled += 1;
      this.legendChooserService.legends[type] = this.legendChooserService.origLegends[type]
    }
  }
}
