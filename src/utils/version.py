import asyncio
from playwright.async_api import async_playwright
import re


url = "https://wutheringwaves.kurogames.com/en/main"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True) 
        page = await browser.new_page()
        await page.goto(url)
        await page.wait_for_selector("div.banner-text", timeout=10000) 

        element = await page.query_selector("div.banner-text")
        if element:
            text = await element.inner_text()
            match = re.search(r"\d+\.\d+", text)
            if match: 
                return match.group()
        else:
            print("No se encontró el elemento.")
          
        await browser.close()

asyncio.run(main())