import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit, OnDestroy {

  currentTime = signal(new Date());       // iniciando a variavel com um signal, pra mudança de estados

  // wordClocks = [                                      // paises com suas zone
  //   {country: 'India', zone:'Asia/Kolkata'},    
  //   {country: 'Brasil', zone:'America/Sao_Paulo'},
  //   {country: 'Germany', zone:'Europe/Berlin'},
  //   {country: 'America', zone:'America/New_York'},
  //   {country: 'Japan', zone:'Asia/Tokyo'},
  // ];

  internalId: any;

  ngOnInit(): void {
    this.internalId = setInterval(()=> {
      this.currentTime.set(new Date())
    },1000)
  }

  ngOnDestroy(): void {
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
      month: 'short',
      day: 'numeric'
    })
  }
}
