import { Component } from '@angular/core';

import * as jsreport from 'jsreport-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numeroRighe: number;
  numeroColonne: number;
  padding: number;

  margineAlto: number;
  margineBasso: number;
  margineDestra: number;
  margineSinistra: number;

  numeroElementi:number;


  constructor() {
    this.numeroRighe = 2;
    this.numeroColonne = 2;
    this.padding = 0.2;

    this.margineAlto = 2.5;
    this.margineBasso = 2;
    this.margineDestra = 1;
    this.margineSinistra = 1;

    this.numeroElementi = 8;


  }

  elementi(pag:number) {
    const pageSize= this.numeroColonne*this.numeroRighe;
    return  Array(this.numeroElementi).slice((pag-1) * pageSize, pag * pageSize);
  }

  numeroPagine(){
    return Array(Math.ceil(this.numeroElementi/(this.numeroRighe*this.numeroColonne)));
  }

  GeneraPDFChrome(){
    
   /*
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:4200/', {waitUntil: 'networkidle2'});
      await page.pdf({path: 'Test.pdf',  format: 'A4'});

      await browser.close();
    })();*/

    // jsreport.init().then(() => {
    //   return jsreport.render({
    //     template: {
    //       content: '<h1>Test</h1>',
    //       engine: 'handlebars',
    //       recipe: 'chrome-pdf'
    //     } 
    //   }).then((resp) => {
    //      // prints pdf with headline Hello world
    //     console.log(resp.content.toString())
    //    });
    // }).catch((e) => {
    //   console.error(e)
    // })
  }

}
