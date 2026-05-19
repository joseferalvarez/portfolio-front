import { Component } from '@angular/core';
import { ContactForm } from '@shared/components/contact-form/contact-form.component';

@Component({
  selector: 'jf-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ContactForm],
})
export class Contact {}
