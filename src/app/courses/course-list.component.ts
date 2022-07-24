import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./star/course.service";

@Component({
	selector: "app-course-list",
	// template: "<h2>Course List</h2>"
	templateUrl: "./course-list.component.html" // Recomendado
})

export class CourseListComponent implements OnInit{
	courses: Course[] = [];

	constructor(private courseService: CourseService) {

	}

	ngOnInit(): void{
		this.courses = this.courseService.retrieveAll();
	}
}