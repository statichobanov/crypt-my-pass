import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  copyright = `Copyright © ${new Date().getFullYear()} Stati Chobanov`;
  footerMenu: { url: string; title: string, icon:string }[] = [
    { url: '#', title: 'Github', icon: 'pi pi-github' },
    { url: '#', title: 'LinkedIn', icon: 'pi pi-linkedin' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
