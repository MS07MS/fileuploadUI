import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'fileuploadUI';
  constructor(private http: HttpClient){
  
  }
  file : any
  // http: any;
 
  onFileSelected(event: any) {
    this.file = <File>event.target.files[0];
  }
  
  onUpload(file: File): Observable<any>{
    // console.log(file);
    const endpoint = 'https://8hho3mnu3f.execute-api.us-east-1.amazonaws.com/dev/putObject' 
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders()
    // console.log("Hits upload", this.file);
    headers.set('Content-Type', 'undefined')
    return this.http.post(endpoint, formData, {headers}).pipe(
      tap(() => console.log('file uploaded successfully')),
      catchError((error) => {
        console.error('error uploading file', error);
        return throwError(error);
      })
    );
  }

    
    // const data = fetch("https://8hho3mnu3f.execute-api.us-east-1.amazonaws.com/dev/putObject")
   
  }

  
  
  

