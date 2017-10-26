/**
 * A Font is a pairing of a font-family and a size.
 */
export default class Font {

    static SANS_SERIF: Font = new Font();

    static SERIF: Font = new Font("serif");

    /**
     * The font family or "font face". Specific fonts
     * may not be available on all devices.
     */
    family: string = "sans-serif";

    /**
     * The size of the font.
     */
    size: number = 16;

    constructor(family?: string, size?: number) {
        if (family !== undefined) {
            this.family = family;
        }

        if (size !== undefined) {
            this.size = size;
        }
    }

}