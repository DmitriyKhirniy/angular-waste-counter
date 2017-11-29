import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  titleStream: Subject<any> = new Subject()
  users: any[]
  usersStore: any

  usersStream: BehaviorSubject<any> = new BehaviorSubject([])

  public sortOptions: any = {
    filed: 0
  }

  constructor(private changeDetector: ChangeDetectorRef,
              private httpClient: HttpClient) {}

  click() {
    // this.usersStream.next(this.usersStore)
    this.users = this.usersStore
    this.changeDetector.detectChanges()
  }

  public add(): void {
    // const list: any[] = this.usersStream.getValue()
    const list: any[] = [...this.users]
    list.unshift(JSON.parse(` {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }`))
    // this.usersStream.next(list)
    this.users = list
    this.changeDetector.detectChanges()
  }

  public sortTable(field: string): void {
    this.sortOptions[field] = this.sortOptions[field] === 1 ? -1 : 1
    const users: any[] = this.usersStream.getValue()
    console.time('sort'+this.sortOptions[field])
    if (this.sortOptions[field] === 1) {
      users.sort((user: any, userNext: any) => userNext.id - user.id)
    } else {
      users.sort((user: any, userNext: any) => user.id - userNext.id)
    }
    console.timeEnd('sort'+this.sortOptions[field])
    // this.usersStream.next(users)
    this.users = users
    this.changeDetector.detectChanges()
  }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (res: any) => {
          this.usersStore = []
          for (let i =0;i<10;i++) {
            this.usersStore.push(...res)
          }
        }
      )
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.titleStream.next('Hello')
    //   // this.changeDetector.detectChanges()
    // }, 2000)
  }
}
