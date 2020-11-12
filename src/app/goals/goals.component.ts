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
  queryField;
  queryField2;
  queryField3;
  goals;

  constructor() { }

  ngOnInit(): void
  {}

  onSubmit(): void{



      console.log(this.queryField);
      console.log(this.queryField2);
      console.log(this.queryField3);
      this.addGoal(this.queryField);
      this.addGoal(this.queryField2);
      this.addGoal(this.queryField3);
      this.goals = new Array;
 }

 public addGoal(item): void{


  this.goals.push(item);

}




 private clear(): void{
  this.queryField = '';
  this.queryField2 = '';
  this.queryField3 = '';
}
}
