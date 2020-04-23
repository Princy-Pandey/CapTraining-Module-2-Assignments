import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { NgAlertModule } from '@theo4u/ng-alert';
    import { AppComponent } from './app.component';
    import { CreateEmployeeComponent } from './create-employee/create-employee.component';
    import { ListEmployeeComponent } from './list-employee/list-employee.component';
    import { EmployeeService } from './services/employee.service';
    import { ReactiveFormsModule } from '@angular/forms';
    import { HttpClientModule } from '@angular/common/http';
    import { PusherService } from './services/pusher.service';

    @NgModule({
      declarations: [
        AppComponent,
        CreateEmployeeComponent,
        ListEmployeeComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgAlertModule,
        HttpClientModule
      ],
      providers: [EmployeeService, PusherService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }