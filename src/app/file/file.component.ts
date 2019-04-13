import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  public subject = "";
  public selected: boolean = false;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  public showLoading: boolean = true;
  public files:string[] = [];
  
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('assignments', ref => ref.limit(4));
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(() => this.showLoading = false);
  }

  ngOnInit() {
  }

  subjectSearch(subject: string) {
    this.selected = false;
    if(subject.length == 0) {
      this.items = this.itemsCollection.valueChanges();
    } 
    else {
      this.items = this.afs.collection('assignments', ref => ref.orderBy('name')
      .startAt(subject)
      .endAt(subject+"\uf8ff")).valueChanges();
    }
  }

  show(name: string, files: string[]) {
    this.files = files;
    this.selected = true;
    this.subject = name;
  }

  toggle() {
    this.selected = false;
    this.items = this.itemsCollection.valueChanges();
  }
}
