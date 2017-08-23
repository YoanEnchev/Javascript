let height = 5;
let radius = 3;

volumeAndSurface(radius, height)

function volumeAndSurface(radius, height) {
    let volume = 1 / 3 * (Math.PI * radius * radius * height);

    let slantHeight = Math.sqrt(height * height + radius * radius);

    let lateralSurface = Math.PI * radius * slantHeight;

    let base = Math.PI * radius * radius;

    let totalSurfaceArea = lateralSurface + base;

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalSurfaceArea}`);
}
