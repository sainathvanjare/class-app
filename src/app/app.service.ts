import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AppService {

  getUserUrl = "http://localhost:3002/api/v1/users/all"
  signupUrl = "http://localhost:3002/api/v1/users/signup"
  signInUrl = "http://localhost:3002/api/v1/users/login"
  postMeeting = "http://localhost:3002/api/v1/users/addMeeting"
  getEventDataUrl = "http://localhost:3002/api/v1/users/getAllEvents";
  deleteMeetingUrl = "http://localhost:3002/api/v1/users/deleteMeeting";
  updateMeetingUrl = "http://localhost:3002/api/v1/users/updateMeeting";
  resetLink = "http://localhost:3002/api/v1/users/updateMeeting";
  createTeamUrl = "http://localhost:3002/api/v1/team/createTeam";




  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.getUserUrl)
  }

  signUp(data): Observable<any> {
    return this.http.post(this.signupUrl, data)
  }

  signIn(data): Observable<any> {
    return this.http.post(this.signInUrl, data)
  }


  setMeeting(data): Observable<any> {
    return this.http.post(this.postMeeting, data);
  }

  deleteEvent(data): Observable<any> {
    return this.http.post(this.deleteMeetingUrl, data);
  }

  updateEvent(meetingId, data): Observable<any> {
    return this.http.put(`${this.updateMeetingUrl}?meetingId=${meetingId}`, data);
  }

  getEventData(userId): Observable<any> {
    return this.http.get(this.getEventDataUrl + "?" + "userId=" + userId)
  }

  createTeam(data): Observable<any> {
    return this.http.post(this.createTeamUrl, data)
  }

  public sendResetLink(email): Observable<any> {


    return this.http.post(`${this.resetLink}`, email);
  }



}
