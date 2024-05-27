const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { processData } = require('../scripts/productProcessing')

puppeteer.use(StealthPlugin());

async function getProducts() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.idealo.de/preisvergleich/OffersOfProduct/201846460_-aspirin-plus-c-forte-800-mg-480-mgbrausetabletten-bayer.html", {
        waitUntil: 'networkidle2'
    });
    await page.screenshot({path: "test.png", fullPage: true})

    // Wait for the consent wrapper for 2 seconds, and click "accept" if it appears
    const consentDialogSelector = '#usercentrics-cmp-ui';

    try {
        await page.waitForSelector(consentDialogSelector, { timeout: 2000 });
        console.log('Consent dialog appeared');
        // Access the shadow DOM
        const shadowHost = await page.$(consentDialogSelector);
        const shadowRoot = await shadowHost.evaluateHandle(element => element.shadowRoot);

        // Click the accept button inside the shadow DOM
        const acceptButton = await shadowRoot.$('[data-action-type="accept"]');
        await acceptButton.click();
        console.log('Clicked accept button');
    } catch (error) {
        // If the selector doesn't appear within 2 seconds, continue without error
        console.log('Consent dialog did not appear.');
    }

    // Wait for the product listings to load
    await page.waitForSelector('.productOffers-listItem');

    let loadMoreButton;
do {
    try {
        loadMoreButton = await page.waitForSelector('.productOffers-listLoadMore', { timeout: 1000 });
        if (loadMoreButton) {
            await loadMoreButton.click();
            // Wait for a short period after clicking the button
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } catch (error) {
        // Handle the error gracefully
        if (error.name === 'TimeoutError') {
            console.log('No more products to load.');
        } else {
            console.error('Error occurred while waiting for or clicking the load more button:', error);
        }
        break; // Exit the loop regardless of the error
    }
} while (loadMoreButton);

    // Extract product information and remove duplicates
    const products = await page.evaluate(() => {
        const productElements = document.querySelectorAll('.productOffers-listItem');
        const uniqueProducts = new Set();
        Array.from(productElements).forEach(product => {
            // Check if the class name contains 'fallback'
            if (product.className.includes('fallback')) {
                return; // Skip processing this element
            }
            const productName = product.querySelector('.productOffers-listItemTitle').textContent.trim();
            const priceElement = product.querySelector('.productOffers-listItemOfferPrice');
            let price = priceElement ? priceElement.textContent.trim() : ''; // Extract raw price
            price = price.split('\n')[0]; // Extract only the price part, excluding additional text

            const shopName = product.querySelector('.productOffers-listItemOfferShopV2LogoImage').getAttribute('alt');
            const position = uniqueProducts.size + 1;
    
            uniqueProducts.add(JSON.stringify({ productName, price, shopName, position }));
        });
        return Array.from(uniqueProducts).map(entry => JSON.parse(entry));
    });
    console.log(products)
    if(products){
        processData(products)
    }

    await browser.close();
}

module.exports = {
    getProducts,
}
