export const imageRatio = (photos) => {
    return photos.map(image => {
        return { width: parseInt(image.width_s, 10), height: parseInt(image.height_s, 10) }
    })
}