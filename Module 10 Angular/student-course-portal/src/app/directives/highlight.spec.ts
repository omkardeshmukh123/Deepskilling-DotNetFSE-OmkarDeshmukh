import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {

  it('should create', () => {

    const elementRef = new ElementRef(document.createElement('div'));

    const directive = new Highlight(elementRef);

    expect(directive).toBeTruthy();

  });

});