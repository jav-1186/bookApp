import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { $ } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  key = 'items';
  items;
  queryField : Date;
  queryField2 : Date;
  queryField3 : number;
  goals;

  constructor() { }

  ngOnInit(): void
  {this.goals = this.getGoals();}

  onSubmit(): void{

      this.addGoal(this.queryField, this.queryField2, this.queryField3);
      this.goals = this.getGoals();
 }

 public addGoal(startDate: Date, endDate: Date, amount: number): void
 {
  let goalLibrary;
  let goalEntry;
  if (localStorage.getItem('goalLibrary') != null){
    goalLibrary = JSON.parse(localStorage.getItem('goalLibrary'));
  }
  else{
    goalLibrary = new Array();
  }
  goalEntry = { startDate: startDate, endDate: endDate, amount: amount};
  goalLibrary.push(goalEntry);
  localStorage.setItem('goalLibrary', JSON.stringify(goalLibrary));
  console.log(goalEntry);
  console.log(startDate);
  console.log(endDate);
  console.log(amount);

}

public getGoals(): Array<{startDate, endDate, amount}>{
  return ((localStorage.getItem('goalLibrary') != null) ? JSON.parse(localStorage.getItem('goalLibrary')) : null);
}




}
