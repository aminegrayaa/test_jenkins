import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test ('test', async({page})=>
  {
    
    const browser = await chromium.launch();
    const page1 = await browser.newPage();
    await page1.goto('https://google.com');
    const title = await page1.title();
    console.log('Titre de la page :', title);
    await browser.close();
    
    
     
  }) 