<template>
    <section>
        <div class="ui-card --primary">
            <span class="ui-card_wrapper">Other components</span>
        </div>

        <o-button variant="primary">Oruga button</o-button>

        <o-notification variant="primary">Oruga notification</o-notification>
    </section>
</template>

<script>
// 2. In this example, we use the Oruga override solution so that we can use our own classes.
// To do so, we need to look up and replace every Oruga class available for every component.
import Vue from 'vue'
import { Button, Notification, Config } from '@oruga-ui/oruga';
Vue.use(Button);
Vue.use(Notification);
Vue.use(Config, {
    button: {
        override: true,
        rootClass: 'ui-btn',
        elementsWrapperClass: 'ui-btn_wrapper',
        variantClass: (suffix) => {
            return '--' + suffix
        },
        // need to add other component classes here
        // need to add other component classes here
        // need to add other component classes here
    },
    notification: {
        override: true,
        rootClass: 'ui-notification',
        wrapperClass: 'ui-notification_wrapper',
        variantClass: (suffix) => {
            return '--' + suffix
        },
        // need to add other component classes here
        // need to add other component classes here
        // need to add other component classes here
    },
    // ...
    // ...
    // Repeat the above for every single component
    // ...
    // ...
    // .......
    // ...
    // ...
    // Repeat the above for every single component
    // ...
    // ...
    // .......
    // ...
    // ...
    // Repeat the above for every single component
    // ...
    // ...
});
export default {}
</script>

<style lang="scss">
// We can now use other methodologies, such as "C3 CSS".
.ui-card,
.ui-btn,
.ui-notification {
    &_wrapper {
        .--primary & {
            @apply bg-primary;
        }
    }
}
</style>
