import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { SpinnerService } from "../services/spinner.service";
import { Injectable } from "@angular/core";
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();

        //Envia a requisição para o BE 
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide())
        );
    }
}