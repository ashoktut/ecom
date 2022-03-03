import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from '../../../components/components.module';
import { SpecialsComponent } from 'src/app/components/specials/specials.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePage, SpecialsComponent, CategoriesComponent]
})
export class HomePageModule {}
