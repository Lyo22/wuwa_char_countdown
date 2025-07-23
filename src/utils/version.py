import asyncio
from playwright.async_api import async_playwright
import re

url = "https://wutheringwaves.kurogames.com/en/"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True) 
        page = await browser.new_page()
        await page.goto(url)
        container = await page.wait_for_selector("div.video-container", timeout=10000) 
        if container is not None:
            element = await container.query_selector("img[alt='']") 
            if element is not None:
                text = await element.get_attribute("src")
                v = text.split("=")[1] if text is not None else ""  
                print(v)
                return v
            else:
                print("No se encontró el elemento.")
        await browser.close()

asyncio.run(main())