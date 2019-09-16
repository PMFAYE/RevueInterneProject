import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjeectServiceService {

  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://localhost:8080/dashboard';
   }

  findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  public save(project: Project){
    return this.http.post<Project>(this.projectUrl, project);
  }

}
