import { Component, OnInit } from '@angular/core';
import { playerActions } from '../state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ssp-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss'],
})
export class PlayerEditComponent implements OnInit {

  public controlStatuses: { [controlName: string]: string} = {};

  public playerForm = new FormGroup({
    pictures: new FormGroup({
      photo: new FormControl(''),
      numero: new FormControl(''),
    }),
    card: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl(''),
      favoriteFoot: new FormControl(''),
      origin: new FormControl(''),
      nationality: new FormControl(''),
      sponsors: new FormControl(''),
      clubs: new FormControl(''),
      post: new FormControl(''),
      trackRecord: new FormControl(''),
    }),
    morphology: new FormGroup({
      size: new FormControl(null),
      weight: new FormControl(null),
      footSize: new FormControl(null),
      masses: new FormGroup({
        fat: new FormControl(null),
        muscular: new FormControl(null),
        bone: new FormControl(null),
      }),
    }),
    networks: new FormGroup({
      instagram: new FormControl(''),
      facebook: new FormControl(''),
      snapchat: new FormControl(''),
      twitter: new FormControl(''),
    }),
    test: new FormGroup({
      acceleration: new FormControl(null),
      speed: new FormControl(null),
      trigger: new FormControl(null),
      cardio: new FormControl(null),
      bipTest: new FormControl(null),
      RightFootAccuracy: new FormControl(null),
      leftFootAccuracy: new FormControl(null),
      shootingAccuracy: new FormControl(null),
      shootingPower: new FormControl(null),
      reactivity: new FormControl(null),
    }),
    results: new FormArray([
      new FormControl(''),
    ]),
    videos: new FormArray([
      new FormControl(''),
    ]),
  });

  constructor(
    private readonly store: Store<AppState>,
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    console.info(this.route.snapshot.data.player);
  }

  public submit(): void {
    this.controlStatuses = {};

    if (this.playerForm.valid) {
      const data = this.playerForm.value;
      this.store.dispatch(playerActions.SavePlayer({data}));
    } else {
      const formGroup = this.playerForm.get('card') as FormGroup;
      _.forEach(formGroup.controls, (control, controlName) => {
        if (control.errors) {
          this.controlStatuses[controlName] = 'danger';
        }
      });
    }
  }

  public addResult(): void {
    this.addControl(this.playerForm.get('results') as FormArray);
  }

  public addVideo(): void {
    this.addControl(this.playerForm.get('videos') as FormArray);
  }

  public removeResult(): void {
    this.remoteControl(this.playerForm.get('results') as FormArray);
  }

  public removeVideo(): void {
    this.remoteControl(this.playerForm.get('videos') as FormArray);
  }

  private addControl(arrayControl: FormArray): void {
    arrayControl.push(this.formBuilder.control(''));
  }

  private remoteControl(arrayControl: FormArray): void {
    arrayControl.removeAt(arrayControl.length - 1);
  }
}
