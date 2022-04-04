import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private authService: AuthService) {} 

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    const token = this.authService.getToken();

    if (token) {
      
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: {Authorization: `Authorization token ${token}`}
      });
    }

    return next.handle(request).pipe(
      catchError((err:any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            // redirect user to the logout page
            }
        }
        return throwError(() => new Error(err))
      })
    )
    }

}
