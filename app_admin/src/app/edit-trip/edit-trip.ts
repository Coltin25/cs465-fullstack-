import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  public trip!: Trip;
  public submitted = false;
  public message = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something went wrong—couldn't find stored tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTrip::ngOnInit');
    console.log('tripCode:', tripCode);

    this.editForm = this.formBuilder.group({
      _id: [''],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: Trip[]) => {
        if (!value || value.length === 0) {
          this.message = 'No Trip Retrieved!';
        } else {
          this.trip = value[0];
          this.editForm.patchValue(this.trip);
          this.message = `Trip ${tripCode} retrieved`;
        }
        console.log(this.message);
      },
      error: (err: any) => {
        console.error('Error fetching trip:', err);
        this.message = 'Error retrieving trip';
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataService.updateTrips(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log('Update successful:', value);
          this.router.navigate(['']);
        },
        error: (err: any) => {
          console.error('Error updating trip:', err);
          this.message = 'Update failed';
        }
      });
    }
  }

  // shorthand accessor for form controls
  get f() {
    return this.editForm.controls;
  }
}
