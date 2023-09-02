import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-age-editor',
    templateUrl: './age-editor.component.html',
    styleUrls: ['./age-editor.component.css']
})
export class AgeEditorComponent {
    age = new FormControl(50)

    profileForm = this.fb.group({
        firstName: [''],
        email: ['', [Validators.email]],
        lastName: [''],
        birthDate: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            country: ['']
        }),
        aliases: this.fb.array([
            this.fb.control('')
        ])
    })

    get aliases() : FormArray {
        return this.profileForm.controls.aliases
        // return this.profileForm.get('aliases') as FormArray
    }

    addAlias() {
        this.aliases.push(new FormControl(''))
    }

    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     age: new FormControl(0),
    //     birthDate: new FormControl(new Date().toISOString().split('T')[0]),
    //     address: new FormGroup({
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         country: new FormControl('')
    //     })
    // })

    constructor(private fb: FormBuilder) {}

    incrementAge() {
        this.age.setValue(this.age.value ? Number(this.age.value) + 1 : 1)
    }

    onSubmit() {
        console.warn(this.profileForm.value)
    }

    updateProfile() {
        console.log('updating profile')
        this.profileForm.patchValue({
            firstName: 'Johnson',
            address: {
                country: 'Uganda',

            }
        })
    }

    changeCity() {
        console.log('changing city')
        this.profileForm.controls.address.controls.city.setValue('Namirembe')
    }
}
