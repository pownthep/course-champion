import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  public subject = "";
  public selected = false;
  items: Observable<any[]>;
  public src: string;
  
  constructor(public db: AngularFirestore) {
    this.items = db.collection('assignments', ref => ref.limit(4)).valueChanges()
  }

  ngOnInit() {
  }

  subjectSearch(subject: string) {
    this.selected = false;
    if(subject.length == 0) {
      this.items = this.db.collection('assignments', ref => ref.limit(4)).valueChanges();
    } 
    else {
      this.items = this.db.collection('assignments', ref => ref.orderBy('name')
      .startAt(subject)
      .endAt(subject+"\uf8ff")).valueChanges();
    }
  }

  show(src: string, file_name) {
    this.src = src;
    this.selected = true;
    this.subject = file_name;
  }

  toggle() {
    this.selected = false;
  }
}
