import { Component, OnInit, Input } from '@angular/core';
import { ExperienceItem } from 'src/app/models/ExperienceItem';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() experienceItem: ExperienceItem = {name: '', company: '', startDate: '', endDate: '', description: '', terminated: true};

  constructor() { }

  ngOnInit(): void {
  }

}