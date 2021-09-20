export default {
    methods: {
        computedClass(field, defaultValue, suffix='') {
            // ...
            // add `filter` to last few lines of computedClass method...
            let returnClass = (`${(override && !overrideClass) || (!override && !overrideClass) ? defaultValue : ''} `
               + `${blankIfUndefined(globalClass)} `
               + `${blankIfUndefined(currentClass)}`).trim().replace(/\s\s+/g, ' ');
            if (typeof config.filter === "function") {
              return config.filter(returnClass);
            }
            return returnClass;
        }
    }
}
