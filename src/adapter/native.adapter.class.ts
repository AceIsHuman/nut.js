import {Image} from "../image.class";
import {Point} from "../point.class";
import {INativeProviderInterface} from "../provider/native/INativeProviderInterface";
import {Region} from "../region.class";

export class NativeAdapter {
    constructor(private native: INativeProviderInterface) {
    }

    public grabScreen(): Promise<Image> {
        return this.native.grabScreen();
    }

    public grabScreenRegion(region: Region): Promise<Image> {
        return this.native.grabScreenRegion(region);
    }

    public setMouseDelay(delay: number): void {
        this.native.setMouseDelay(delay);
    }

    public setMousePosition(p: Point): void {
        this.native.setMousePosition(p);
    }

    public currentMousePosition(): Point {
        return this.native.currentMousePosition();
    }

    public screenWidth(): number {
        return this.native.screenWidth();
    }

    public screenHeight(): number {
        return this.native.screenHeight();
    }

    public screenSize(): Region {
        return this.native.screenSize();
    }

    public leftClick(): void {
        this.native.leftClick();
    }

    public rightClick(): void {
        this.native.rightClick();
    }
}
