import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeoplePageRoutingModule } from './people-routing.module';
import { PeoplePage } from './people.page';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PeoplePageRoutingModule,
  ],
  declarations: [PeoplePage, PersonComponent, PersonDetailComponent]
})
export class PeoplePageModule  {}

