import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LegendChooserService } from '../legend-chooser.service';
import { Type } from '../type';


@Component({
  selector: 'app-legend-chooser',
  templateUrl: './legend-chooser.component.html',
  styleUrls: ['./legend-chooser.component.css']
})
export class LegendChooserComponent implements OnInit {
  constructor(public legendChooserService: LegendChooserService) {}

  amountEnabled = this.legendChooserService.legendTypesAllowed.length;
  selectedLegend: Legend | null = null

  ngOnInit(): void {

  }

  selectLegend() {
    this.selectedLegend = this.legendChooserService.selectRandomLegend();
  }

  switchEnabled(legendType: Type) {
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
