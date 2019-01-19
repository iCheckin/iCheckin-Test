import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  courseName: String;

  signUpSheet: any;
  inputText: String;

  constructor(private route:ActivatedRoute, private router: Router) {
    this.courseName = this.route.snapshot.paramMap.get('id');
    this.signUpSheet = [
      {firstname:"Yuqi", lastname:"Huai", signUpDate:Date.now()},
      {firstname:"Yuqi2", lastname:"Huai2", signUpDate:Date.now()},
    ];

    // this.signUpSheet.push(new SignUpData({
    //   firstname: "Yuqi",
    //   lastname: "Huai",
    //   signUpDate: Date.now()
    // }));
  }

  ngOnInit() {
  }

  manualEntry(){
    const splitted = this.inputText.split(" ");
    this.signUpSheet.push({firstname: splitted[0], lastname: splitted[1], signUpDate: Date.now()});
  }

  goToConsole()
  {
    this.router.navigateByUrl('/console');
  }

}
