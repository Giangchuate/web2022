import { render } from "./common";
import { categories, productList } from "./data";

function showData(data, key) {
    // kiểm tra
    if (!Array.isArray(data) || data.length == 0) return false;

    // xử lý
    let result = "";
    if (key == "product") {
        for (let i = 0; i < data.length; i++) {
            result += `<h2><a href="./detail.html?id=${data[i].id}">${data[i].name}</a></h2>`;
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            result += `<div><h2><a href="./product.html?id=${data[i].id}">${data[i].name}</a></h2></div>`;
        }
    }
    // trả về kết quả
    return result;
}

render("product", showData(productList, "product"));
render("category", showData(categories, "category"));