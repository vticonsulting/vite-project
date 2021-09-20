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
// 3. In this proposed example, we could pass a new `filter` property to the config, which would be a function that returns the class name.
// This would allow us to change the entire methodology of the Oruga component library with replacing or regex patterns.
import Vue from 'vue'
import { Button, Notification, Config } from '@oruga-ui/oruga';
Vue.use(Button);
Vue.use(Notification);
Vue.use(Config, {
    filter: (cssClass) => {
        cssClass = cssClass.replace('o-', 'ui-');
        cssClass = cssClass.replace('__', '_');
        cssClass = cssClass.replace('--', ' --');
        return cssClass;
    }
});
export default {}
</script>

<style lang="scss">
// We can now use our apps methodology, "C3 CSS".
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
