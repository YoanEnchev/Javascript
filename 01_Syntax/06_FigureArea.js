let w = 13;
let h = 2;

let W = 5;
let H = 8;

figureArea(w, h, W, H)

function figureArea(w, h, W, H) {
    let bigger_Width = 0
    let bigger_Heigth = 0;

    let smaller_width = 0;
    let smaller_height = 0;

    if (w > W) {
        bigger_Width = w;
        smaller_width = W;
    } else {
        bigger_Width = W;
        smaller_width = w;
    }

    if (h > H) {
        bigger_Heigth = h;
        smaller_height = H;
    } else {
        bigger_Heigth = H;
        smaller_height = h;
    }

    let bigArea = bigger_Width * bigger_Heigth;

    let extra_heigth = bigger_Heigth - smaller_height;
    let extra_width = bigger_Width - smaller_width;
    let extra_area = extra_heigth * extra_width;

    let result = bigArea - extra_area;
    console.log(result);
}