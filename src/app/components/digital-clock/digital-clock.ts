import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';


export interface CardWorldClock {
  country: string;
  zone: string;
}

@Component({
  selector: 'app-digital-clock',
  imports: [Footer, Header],
  templateUrl: './digital-clock.html',
  styleUrl: './digital-clock.css',
})
export class DigitalClock implements OnInit, OnDestroy {
  currentTime = signal(new Date());         

  worldClocks: CardWorldClock[] = [
    {country: 'India', zone:'Asia/Kolkata'},
    {country: 'Germany', zone:'Europe/Berlin'},
    {country: 'America', zone:'America/New_York'},
    {country: 'Japan', zone:'Asia/Tokyo'},
  ];


  internalId:any;


  ngOnInit(): void {
    this.internalId =setInterval(()=> {
      this.currentTime.set(new Date());
    },1000)
  }

  ngOnDestroy():void {
    clearInterval(this.internalId)
  }

  formatTime(zone:string) {
    return this.currentTime().toLocaleTimeString('pt-BR', {
      timeZone : zone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  formatDate(zone:string) {
    return this.currentTime().toLocaleDateString('pt-BR', {
      timeZone : zone,
      year: 'numeric',
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    })
  }
}
