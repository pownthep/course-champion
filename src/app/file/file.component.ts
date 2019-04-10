import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  public subject = "";
  public selected = false;

  items: Observable<any[]>;
  
  constructor(private db: AngularFirestore) {
    this.items = db.collection('files', ref => ref.limit(5)).valueChanges()
  }

  ngOnInit() {
  }

  subjectSearch(subject: string) {
    this.selected = false;
    if(subject.length == 0) {
      this.items = this.db.collection('files', ref => ref.limit(5)).valueChanges();
    } 
    else {
      this.items = this.db.collection('files', ref => ref.orderBy('name')
      .startAt(subject)
      .endAt(subject+"\uf8ff")).valueChanges();
    }
  }

  test() {
    console.log("Hello world");
  }
}
