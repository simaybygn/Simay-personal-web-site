import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ActivitiesData, ContactDetailsData,CourseData,DataType,  SkıllsData} from '../service/service';
declare var $: any;
import { TreeControl } from '@angular/cdk/tree';
import { CdkTree } from '@angular/cdk/tree';
import { CdkTreeNode } from '@angular/cdk/tree';
import { CdkTreeNodeDef } from '@angular/cdk/tree';
import { CdkTreeNodeOutlet } from '@angular/cdk/tree';
import { CdkTreeNodePadding } from '@angular/cdk/tree';
import { CdkTreeNodeToggle } from '@angular/cdk/tree';
import { CollectionViewer } from '@angular/cdk/collections';
import { _Constructor } from '@angular/material/core';
import { DataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  dataSource = new MatTableDataSource(ActivitiesData);
  contactDatas: DataType[] = ContactDetailsData;

  displayedColumns: string[] = ['adres', 'pozisyon','firma','aciklama','tarih'];
  panelOpenState = false;
  skillsDatas:DataType[]=SkıllsData;
  courseDatas:DataType[]=CourseData;
  isVisibility : boolean = false;
  isLinear = false;
    courseClick = () => {
    this.isVisibility = ! this.isVisibility;
  }
  constructor(){ }
  ngOnInit(): void {
     this.contactDatas = ContactDetailsData;

     this.skillsDatas=SkıllsData;
     
  }
 

  }
  
   



