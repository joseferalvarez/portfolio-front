import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ContactDto } from '@models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  postResult = signal(0);

  readonly sendContact = async (data: ContactDto) =>
    this._http.post<ContactDto>(`${this.apiUrl}/api/v1/contact`, data).subscribe((res) => {
      this.postResult.set(1);
    });
}
