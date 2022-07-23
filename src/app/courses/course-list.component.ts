import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
	selector: "app-course-list",
	// template: "<h2>Course List</h2>"
	templateUrl: "./course-list.component.html" // Recomendado
})

export class CourseListComponent implements OnInit{
	courses: Course[] = [];

	ngOnInit(): void{
		this.courses = [
			{
				id: 1,
				name: "Angular: Forms",
				imageUrl: "",
				price: 99.99,
				code: "ABC-123",
				duration: 120,
				rating: 5,
				releaseDate: "July, 23, 2022"
			},
			{
				id: 2,
				name: "Angular: HTTP",
				imageUrl: "",
				price: 90,
				code: "ABC-123",
				duration: 120,
				rating: 4.5,
				releaseDate: "July, 23, 2022"
			}
		]
	}
}