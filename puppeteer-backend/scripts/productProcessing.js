const fs = require('fs');
const Ajv = require("ajv")

//Schema for validation
const schema = require('./schema.json')

async function processData(products) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(products);
    
    if (!isValid) {
        console.error('Error: Invalid JSON data format.');
        console.error(validate.errors);
        return;
    }
    // Basic data validation checks
    if (!Array.isArray(products)) {
        console.error('Error: Products must be an array.');
        return;
    }

    if (products.length === 0) {
        console.warn('Warning: No products found.');
        return;
    }

    // Structure the data as per the provided format
    const structuredData = {};
    products.forEach((product, index) => {
        const { price, shopName, position } = product;
        structuredData[position] = { price, shop_name: shopName, position };
    });

    // Store the processed data as a JSON file
    const dataFileName = 'processed_data.json';
    fs.writeFile(dataFileName, JSON.stringify(structuredData, null, 2), err => {
        if (err) {
            console.error('Error occurred while writing data to file:', err);
        } else {
            console.log(`Data has been successfully processed and stored in '${dataFileName}'.`);
        }
    });
}

module.exports = {
    processData,
};
