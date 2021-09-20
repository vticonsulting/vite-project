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
// https://gist.github.com/sambedingfield/e1766e97a79fbb123941cea1e22375de
// 1. In this example we import Oruga components and use our own styles with the default Oruga class names.
import Vue from 'vue'
import { Button, Notification } from '@oruga-ui/oruga';
Vue.use(Button);
Vue.use(Notification);
export default {}
</script>

<style lang="scss">
// However, Oruga components use "BEM" and a different prefix to our other custom components.
// We need to structure our SCSS differently between components and have a mix of both class prefixes.
// Our components (C3)
.ui-card {
    &_wrapper {
        .--primary & {
            @apply bg-primary;
        }
    }
}
// Oruga components (BEM)
.o-btn {
    &--primary {
        .o-btn__wrapper {
            @apply bg-primary;
        }
    }
}
.o-notification {
    &--primary {
        .o-notification__wrapper {
            @apply bg-primary;
        }
    }
}
</style>
