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
    private _family: string = "sans-serif";

    get family(): string {
        return this._family;
    }

    /**
     * The size of the font.
     */
    private _size: number = 16;

    get size(): number {
        return this._size;
    }

    constructor(family?: string, size?: number) {
        if (family !== undefined) {
            this._family = family;
        }

        if (size !== undefined) {
            this._size = size;
        }
    }

}