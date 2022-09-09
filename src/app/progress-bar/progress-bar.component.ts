import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progressBar',
  template: `
    <div class = "progress-bar-container"
     [style.backgroundColor] = "backgroundColor">
      <div
      class = "progress"
      [style] = "{
        backgroundColor: progressColor,
        width: progress+'%'
      }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress{
        height:20px;
      }
      .progress-bar-container{
        width: 100%
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges{
 @Input() progress = 50;
 @Input() backgroundColor = '#ccc';
 @Input() progressColor = 'tomato';

 constructor(){}
 ngOnInit(){}
 ngOnChanges(changes: SimpleChanges){}
}
