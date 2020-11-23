import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { FirestoreDataService } from '../services/firestore-data.service';

interface Item {
  userId: string;
  type: string;
  goal: any;
}

interface Goal {
  startDate: Date;
  endDate: Date;
  amount: number;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
  items;
  collectionId: { userId: string, type: string };
  ref: AngularFirestoreCollection<Item>;
  startDate: Date;
  endDate: Date;
  bookNum: number;
  updateStatus = false;
  goals: any;
  userId: string;
  selectedEntry: Item;

  constructor(
    private af: AngularFirestore,
    private auth: AuthService,
    public dataService: FirestoreDataService
  ) {}

  ngOnInit(): void {
    this.collectionId = { userId: this.auth.currentUserId, type: 'goalEntry' };
    this.items = this.dataService.getCollection(this.collectionId);
  }

  addGoal(): void {
    const createdId = this.auth.currentUserId + '_' + this.startDate + this.endDate + this.bookNum;
    console.log('Created book id: ', createdId);
    const goalEntry = {
      userId: this.auth.currentUserId,
      type: 'goalEntry',
      goal: {
        startDate: this.startDate,
        endDate: this.endDate,
        amount: this.bookNum,
        id: createdId
      },
    };
    const goalPost = this.dataService.post(goalEntry);
    console.log('Goal post status: ', goalPost);
  }

  onSubmit(): void {
    this.addGoal();
  }
}
