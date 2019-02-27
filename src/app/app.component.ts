import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAndFilters';
  filterSearch: string;

  appStatus = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve("Active");
    }, 3000)
  });

  persons = [{name: "Rashmith Tula", profession: "Engineer", dob: new Date(1987, 5, 21), status: "intelligent"},
             {name: "Rajesh Rao Vemula", profession: "Teacher", dob: new Date(1986, 11, 15), status: "average"},
             {name: "Randeep Rao Tula", profession: "Doctor", dob: new Date(1988, 7, 7), status: "dull"},
             {name: "Sri Ram Sohan", profession: "Student", dob: new Date(1996, 1, 18), status: "dull"},
             {name: "Rahul Reddy", profession: "Engineer", dob: new Date(1985, 9, 23), status: "intelligent"},
             {name: "Ajay Reddy", profession: "Engineer", dob: new Date(1986, 11, 21), status: "intelligent"},
             {name: "Ramesh Yadav", profession: "Doctor", dob: new Date(1989, 4, 25), status: "average"},
             {name: "Vinay Raju", profession: "Teacher", dob: new Date(1986, 11, 15), status: "average"},
            ];

  getBgColor(person) {
     return {'list-group-item-success' : person.status === 'intelligent',
             'list-group-item-warning' : person.status === 'average', 
             'list-group-item-danger' : person.status === 'dull' 
            };
  }     
  
  onAdd() {
    let pers = {name: "Shravani", profession: "Devotee", dob: new Date(1994, 7, 7), status: "intelligent" };
    this.persons.push(pers);
  }
}
