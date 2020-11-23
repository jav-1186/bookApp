import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { $ } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirestoreDataService } from '../services/firestore-data.service';

interface Item{
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
  styleUrls: ['./goals.component.css']
})

export class GoalsComponent implements OnInit {

  key = 'items';
  ref: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  queryField: Date;
  queryField2: Date;
  queryField3: number;
  updateStatus = false;
  goals: any;
  goalsRef = '/goals/';
  userId: string;
  collectionId: {userId: string, type: string};
 // nullGoal: Goal = {startDate: date, endDate: date, amount: 52'};
 // nullEntry: Item = {userId: 'Placeholder', type: 'placeHolder', goal: this.nullGoal};
  selectedEntry: Item;

  constructor(private af: AngularFirestore, private auth: AuthService, public dataService: FirestoreDataService  ) {  }

  addGoal(startDate: Date, endDate: Date, amount: number): void
  {
   const goalEntry = {userId: this.auth.currentUserId, type: 'goalEntry', goal: {startDate, endDate, amount} };
   console.log('userId inside of addGoal is : ', goalEntry.userId);
   const goalPost = this.dataService.postGoal(goalEntry);
   console.log('Goal post status: ', goalPost);
 }

  ngOnInit(): void
  { this.goals = this.getAllGoals(); this.userId = this.auth.currentUserId; }

  onSubmit(): void{
      this.addGoal(this.queryField, this.queryField2, this.queryField3);
      this.goals = this.getAllGoals();
 }

 getAllGoals(): void {
  this.userId = this.auth.currentUserId;
  console.log(this.userId);
  this.ref = this.af.collection(this.dataService.getId({userId: this.auth.currentUserId, type: 'goalEntry'}));

  this.collectionId = { userId: this.auth.currentUserId, type: 'goalEntry'};
  this.items = this.dataService.getCollection(this.collectionId);
//  this.selectedEntry = this.nullEntry;

}

// public getGoals(): Array<{startDate, endDate, amount}>{
//   return ((localStorage.getItem('goalLibrary') != null) ? JSON.parse(localStorage.getItem('goalLibrary')) : null);
// }

}
