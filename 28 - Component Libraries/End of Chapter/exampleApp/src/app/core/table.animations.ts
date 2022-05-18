import { trigger, style, state, transition, animate, group } 
    from "@angular/animations";
import { getStylesFromClasses, stateClassMap } from "./animationUtils";

export const HighlightTrigger = trigger("rowHighlight", [
    state("selected", style(getStylesFromClasses(stateClassMap["selected"]))),
    state("notselected", style(getStylesFromClasses(stateClassMap["notselected"]))),
    state("void", style({
        transform: "translateX(-50%)"
    })),
    transition("* => notselected", animate("200ms")),
    transition("* => selected", animate("400ms 200ms ease-in")),
    transition("void => *", animate("500ms"))
]);
