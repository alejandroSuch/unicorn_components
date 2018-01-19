import { Component } from '@angular/core';

@Component({
    selector: 'app-data',
    templateUrl: 'data.component.html',
})
export class DataComponent {
    data = [
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' }
    ];

    // try benchmark with 15K items: http://alberto.servidorbeta.com/productos.json
    longData = [
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alfredo', birth: '1992-12-17', progress: 0.25, alerts: '2', img: 'http://placekitten.com/g/65/65' },
        { name: 'Rafael', birth: '1995-06-28', progress: 0.5, alerts: '3', img: 'http://placekitten.com/g/65/65' },
        { name: 'Suso', birth: '1985-09-07', progress: 0.75, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Beatriz', birth: '1963-04-24', progress: 0.80, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Alicia', birth: '1992-03-24', progress: 0.15, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Concha', birth: '1978-12-07', progress: 0.40, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Luke', birth: '1964-04-24', progress: 0.86, alerts: '0', img: 'http://placekitten.com/g/65/65' },
        { name: 'Kyle', birth: '1992-02-24', progress: 0.18, alerts: '6', img: 'http://placekitten.com/g/65/65' },
        { name: 'Dolores', birth: '1978-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' },
        { name: 'Carmina', birth: '1988-11-07', progress: 0.47, alerts: '1', img: 'http://placekitten.com/g/65/65' }
    ];


    log(...args) {
        console.log('', ...args);
    }
}
