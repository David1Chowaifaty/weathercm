/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CmMainwweather {
    }
    interface CmWeather {
        "title": string;
    }
}
declare global {
    interface HTMLCmMainwweatherElement extends Components.CmMainwweather, HTMLStencilElement {
    }
    var HTMLCmMainwweatherElement: {
        prototype: HTMLCmMainwweatherElement;
        new (): HTMLCmMainwweatherElement;
    };
    interface HTMLCmWeatherElement extends Components.CmWeather, HTMLStencilElement {
    }
    var HTMLCmWeatherElement: {
        prototype: HTMLCmWeatherElement;
        new (): HTMLCmWeatherElement;
    };
    interface HTMLElementTagNameMap {
        "cm-mainwweather": HTMLCmMainwweatherElement;
        "cm-weather": HTMLCmWeatherElement;
    }
}
declare namespace LocalJSX {
    interface CmMainwweather {
    }
    interface CmWeather {
        "title"?: string;
    }
    interface IntrinsicElements {
        "cm-mainwweather": CmMainwweather;
        "cm-weather": CmWeather;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cm-mainwweather": LocalJSX.CmMainwweather & JSXBase.HTMLAttributes<HTMLCmMainwweatherElement>;
            "cm-weather": LocalJSX.CmWeather & JSXBase.HTMLAttributes<HTMLCmWeatherElement>;
        }
    }
}
