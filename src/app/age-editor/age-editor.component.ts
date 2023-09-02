import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-age-editor',
    templateUrl: './age-editor.component.html',
    styleUrls: ['./age-editor.component.css']
})
export class AgeEditorComponent {
    age = new FormControl(50)

    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        age: new FormControl(0),
        birthDate: new FormControl(new Date().toISOString().split('T')[0]),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            country: new FormControl('')
        })
    })

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
