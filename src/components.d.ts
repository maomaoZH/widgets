/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ScaleWidgetNews {
        /**
          * (optional) Label of the news widget
         */
        "label"?: string;
        /**
          * (optional) Link news widget rel
         */
        "rel"?: string;
        /**
          * (optional) Injected CSS styles
         */
        "styles"?: string;
        /**
          * (optional) Link news widget target
         */
        "target"?: string;
        /**
          * (optional) Link to news
         */
        "to"?: string;
    }
}
declare global {
    interface HTMLScaleWidgetNewsElement extends Components.ScaleWidgetNews, HTMLStencilElement {
    }
    var HTMLScaleWidgetNewsElement: {
        prototype: HTMLScaleWidgetNewsElement;
        new (): HTMLScaleWidgetNewsElement;
    };
    interface HTMLElementTagNameMap {
        "scale-widget-news": HTMLScaleWidgetNewsElement;
    }
}
declare namespace LocalJSX {
    interface ScaleWidgetNews {
        /**
          * (optional) Label of the news widget
         */
        "label"?: string;
        /**
          * (optional) Link news widget rel
         */
        "rel"?: string;
        /**
          * (optional) Injected CSS styles
         */
        "styles"?: string;
        /**
          * (optional) Link news widget target
         */
        "target"?: string;
        /**
          * (optional) Link to news
         */
        "to"?: string;
    }
    interface IntrinsicElements {
        "scale-widget-news": ScaleWidgetNews;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scale-widget-news": LocalJSX.ScaleWidgetNews & JSXBase.HTMLAttributes<HTMLScaleWidgetNewsElement>;
        }
    }
}
