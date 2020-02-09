import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-level-hemi',
  templateUrl: './level-hemi.component.html',
  styleUrls: ['./level-hemi.component.sass']
})
export class LevelHemiComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() specific: boolean;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    if (!this.specific) {
      this.min = 1;
      this.max = 40;
    }
    this.draw();
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(75, 75, 60, Math.PI, 0);
    this.ctx.strokeStyle = '#aaaaaa';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();

    let min_angle = (this.min / 40 ) * 180;
    let x = 75 - 60 * Math.cos(-min_angle*Math.PI/180);
    let y = 75 + 60 * Math.sin(-min_angle*Math.PI/180);

    let max_angle = (this.max / 40) * 175.5;
    let x2 = 75 - 60 * Math.cos(-max_angle*Math.PI/180);
    let y2= 75 + 60 * Math.sin(-max_angle*Math.PI/180);

    const gradient = this.ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, '#faa');
    gradient.addColorStop(0.5, '#ffa');
    gradient.addColorStop(1.0, '#afa');

    this.ctx.beginPath();
    this.ctx.arc(75, 75, 60, (min_angle * Math.PI / 180) + Math.PI, (max_angle * Math.PI / 180) + Math.PI);
    this.ctx.strokeStyle = gradient;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(x, y, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#faa';
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(x2, y2, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#afa';
    this.ctx.fill();

    this.ctx.font = '12px Roboto,"Helvetica Neue",sans-serif';
    this.ctx.textAlign = 'center';

    if (this.specific) {
      let x_offset = x < 75 ? 15 : -15;
      let y_offset = y < 40 ? 15 : -15;
      this.ctx.fillStyle = '#faa';
      this.ctx.fillText(this.min + '', x + x_offset, y + y_offset);
      x_offset = x2 < 75 ? 15 : -15;
      y_offset = y2 < 40 ? -15 : 15;
      this.ctx.fillStyle = '#afa';
      this.ctx.fillText(this.max + '', x2 + x_offset, y2 + y_offset);
      this.ctx.fillStyle = '#fff';
      this.ctx.fillText('Requested Levels', 75, 70);
    } else {
      this.ctx.fillText('Any Level', 75, 70);
    }
  }

}
