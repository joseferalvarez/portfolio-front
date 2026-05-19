import { Component, signal } from '@angular/core';
import { form, minLength, required, submit, FormField, email } from '@angular/forms/signals';
import { Contact } from '@models/contact';

@Component({
  selector: 'jf-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports: [FormField],
})
export class ContactForm {
  contactModel = signal<Contact>({
    name: '',
    email: '',
    company: '',
    phone: '',
    linkedin: '',
    message: '',
  });

  contactForm = form(this.contactModel, (path) => {
    required(path.name, { message: 'Name is required' });
    minLength(path.name, 3, { message: 'Name must be at least 3 characters long' });

    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Email is invalid' });

    required(path.message, { message: 'Message is required' });
    minLength(path.message, 10, { message: 'Message must be at least 10 characters long' });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.contactForm, async (data) => {
      console.log();
    });
  }
}
