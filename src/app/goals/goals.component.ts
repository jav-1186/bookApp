import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { $ } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  key = 'items';
  ref: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  startDate: Date;
  endDate: Date;
  bookNum: number;
  updateStatus = false;
  goals: any;
  userId: string;
  collectionId: { userId: string; type: string };
  selectedEntry: Item;

  constructor(
    private af: AngularFirestore,
    private auth: AuthService,
    public dataService: FirestoreDataService
  ) {}

  ngOnInit(): void {
    this.goals = this.getAllGoals();
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
    this.goals = this.getAllGoals();
  }

  getAllGoals(): void {
    const collectionId = { userId: this.auth.currentUserId, type: 'goalEntry' };
    this.items = this.dataService.getCollection(collectionId);
  }
}
