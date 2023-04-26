import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginUI';

  onMultipleSubmit() {
    console.log("sucess")
    window.location.href = "https://blogpost.auth.us-east-1.amazoncognito.com/login?client_id=5js45754cce2otm1jhjfpt0nlq&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:5500/api-auth/auth";
  }

 


}
