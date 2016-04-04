export class HomescreenController {
  constructor () {
    'ngInject';
    this.items = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
    this.selectedItem = this.items[0];

    this.chartData=[
        {x: 1,y: 34},
        {x: 2,y: 66},
        {x: 3,y: 77},
        {x: 4,y: 70},
        {x: 5,y: 10},
        {x: 6,y: 63},
        {x: 7,y: 55},
        {x: 8,y: 27},
        {x: 9,y: 55},
        {x: 10,y: 30}
    ];
  }
}
