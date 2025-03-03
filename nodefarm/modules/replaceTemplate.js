module.exports = (template, product) => {
    let output = template.replace(/<%productName%>/g, product.productName);
    output = output.replace(/<%image%>/g, product.image);
    output = output.replace(/<%price%>/g, product.price);
    output = output.replace(/<%description%>/g, product.description);
    output = output.replace(/<%id%>/g, product.id);
    output = output.replace(/<%nutrients%>/g, product.nutrients);
    output = output.replace(/<%from%>/g, product.from);
    output = output.replace(/<%quantity%>/g, product.quantity);
    if (!product.organic) {
        output = output.replace(/<%notorganic%>/g, "not-organic");
    }
    return output;
};
