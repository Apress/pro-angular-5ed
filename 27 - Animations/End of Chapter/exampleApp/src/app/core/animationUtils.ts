export const stateClassMap : {[key: string]: string[] | string} = {
    selected: ["table-success", "h2"],
    notselected: ["table-info"]
};

export function getStylesFromClasses(names: string | string[], 
    elementType: string = "div") : { [key: string]: string | number } {

    return findStylesOrProps(names, elementType, (name) => !name.startsWith("--"))
}


export function setPropertiesFromClasses(state: string,  target: HTMLElement)  {

    let props = findStylesOrProps(stateClassMap[state], "div", (name) => name.startsWith("--"));
    Object.keys(props).forEach(k => {
        target.style.setProperty(k, props[k]);
    })
}

function findStylesOrProps(names: string | string[], elementType: string, selector: (name: string) => boolean)
    : { [key: string]: string  } {

        let elem = document.createElement(elementType);
        (typeof names == "string" ? [names] : names).forEach(c => elem.classList.add(c));
    
        let result : { [key: string]: string } = {};
    
        for (let i = 0; i < document.styleSheets.length; i++) {
            let sheet = document.styleSheets[i] as CSSStyleSheet;
            let rules = sheet.cssRules || sheet.cssRules;
            for (let j = 0; j < rules.length; j++) {
                if (rules[j] instanceof CSSStyleRule) {
                    let styleRule = rules[j] as CSSStyleRule;
                    if (elem.matches(styleRule.selectorText)) {
                        for (let k = 0; k < styleRule.style.length; k++) {
                            let name = styleRule.style[k];
                            if (selector(name)) {
                                result[name] = styleRule.style.getPropertyValue(name);
                            }
                        }
                    }
                }
            }
        }
        return result;
}