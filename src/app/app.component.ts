import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import * as faker from "faker";

@Component({
  selector: "app-root",
  template: `
    <button id="setcookiebtn" (click)="setCookie()">Set Cookie</button>
    <button id="getcookiebtn" (click)="getCookie()">Get Cookie</button>
    <button id="deletecookiebtn" (click)="deleteCookie()">Delete Cookie</button>
    <p>{{ cookieValue }}</p>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  cookieValue = "";
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.getCookie();
  }

  setCookie() {
    const title = faker.name.firstName();
    this.cookieService.set("title", title);
  }
  getCookie() {
    this.cookieValue = this.cookieService.get("title");
    console.log(this.cookieValue);
  }
  deleteCookie() {
    this.cookieService.delete("title");
  }
}
