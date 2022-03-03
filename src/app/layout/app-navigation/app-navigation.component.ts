import { Component, OnInit } from '@angular/core';

interface MenuItem {
  command?: Function;
  tooltipOptions: {[tooltipLabel:string]: string},
  icon: string,
  routerLink?: string[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  items: MenuItem[] = [
    {
      tooltipOptions: {
        tooltipLabel: 'Edit',
      },
      icon: 'pi pi-pencil',
      command: () => {
        console.log('Write file');
      },
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Encrypt file',
      },
      icon: 'pi pi-key',
      routerLink: ['/encrypt'],
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Decrypt file',
      },
      icon: 'pi pi-lock-open',
      routerLink: ['/decrypt'],
    },
  ];
  
  constructor() {}

  ngOnInit(): void {
  }
}
