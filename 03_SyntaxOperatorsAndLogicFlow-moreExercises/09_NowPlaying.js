let music_info = ['Number One', 'Nelly', '4:09'];

printInfo(music_info);

function printInfo(music_info) {
    let track_name = music_info[0];
    let artist = music_info[1];
    let duration = music_info[2];

    console.log(`Now Playing: ${artist} - ${track_name} [${duration}]`);
}
