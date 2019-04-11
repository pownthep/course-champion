import { Component, OnInit, ViewChild } from '@angular/core';
import { FileComponent } from '../file/file.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-course-champion',
  templateUrl: './course-champion.component.html',
  styleUrls: ['./course-champion.component.scss']
})
export class CourseChampionComponent implements OnInit {
  @ViewChild(FileComponent) private fileComponent: FileComponent;
  public placeholder = "Search course";
  public subject = "";

  constructor() {
    
  }

  ngOnInit() {
    
  }

  search(value: string) {
    this.fileComponent.subjectSearch(value);
    //console.log(value);
  }
  home() {
    this.fileComponent.toggle();
  }

}
